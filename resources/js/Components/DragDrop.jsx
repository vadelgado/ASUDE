import { useRef, useState, useCallback } from "react";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

function DragDrop({ fk_user, alumnoId }) {
    const [compressedFiles, setCompressedFiles] = useState([]);
    const [secureUrl, setSecureUrl] = useState('');
    const [valor, setValor] = useState('');
    const [uploading, setUploading] = useState(false);
    const valorInput = useRef();
    const secureUrlInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        fk_user: fk_user,
        alumnoId: alumnoId,
        secureUrl: '',
        valor: '',
    });

    useEffect(() => {
        const uploadImage = async () => {
            if (uploading && compressedFiles.length > 0) {
                const formData = new FormData();
                formData.append('file', compressedFiles[0]);
                formData.append('upload_preset', 'f5oupgly');
                formData.append('api_key', 'ArTr9L8w2XOYRKmenPX-Zsuiq5Y');

                try {
                    const response = await fetch('https://api.cloudinary.com/v1_1/dykkizvxc/image/upload', {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        const data = await response.json();
                        alert('Comprobante subido con éxito');
                        setSecureUrl(data.secure_url);
                        setCompressedFiles([]);
                    } else {
                        alert('Error al subir el comprobante1');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error al subir el comprobante1');
                } finally {
                    setUploading(false); // Resetear el estado después de la carga
                }
            }
        };

        uploadImage();
    }, [uploading, compressedFiles]);

    const compressAndSetFiles = useCallback(async (files) => {
        const compressedFilesArray = await Promise.all(
            files.map(async (file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();

                    reader.onload = () => {
                        const img = new Image();
                        img.src = reader.result;

                        img.onload = () => {
                            const canvas = document.createElement('canvas');
                            const MAX_WIDTH = 239;
                            const MAX_HEIGHT = 533;
                            let width = img.width;
                            let height = img.height;

                            if (width > height) {
                                if (width > MAX_WIDTH) {
                                    height *= MAX_WIDTH / width;
                                    width = MAX_WIDTH;
                                }
                            } else {
                                if (height > MAX_HEIGHT) {
                                    width *= MAX_HEIGHT / height;
                                    height = MAX_HEIGHT;
                                }
                            }
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, width, height);

                            canvas.toBlob((blob) => {
                                resolve(new File([blob], file.name, { type: file.type }));
                            }, file.type);
                        };
                    };

                    reader.readAsDataURL(file);
                });
            })
        );

        setCompressedFiles(compressedFilesArray);
    }, []);

    const onDrop = useCallback((acceptedFiles) => {
        compressAndSetFiles(acceptedFiles);
    }, [compressAndSetFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', compressedFiles[0]);
            formData.append('upload_preset', 'f5oupgly');
            formData.append('api_key', 'ArTr9L8w2XOYRKmenPX-Zsuiq5Y');

            const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dykkizvxc/image/upload', {
                method: 'POST',
                body: formData,
            });

            if (cloudinaryResponse.ok) {
                const cloudinaryData = await cloudinaryResponse.json();
                setSecureUrl(cloudinaryData.secure_url);
                setData({ ...data, secureUrl: cloudinaryData.secure_url });
                alert('Comprobante subido con éxito');
            } else {
                alert('Error al subir el comprobante a Cloudinary');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al subir el comprobante');
        } finally {
            setUploading(false);
        };
    };

    const handleEnviar = (e) => {
        e.preventDefault();

        post(route('comprobantes.store'), {
            data: {
                fk_user: fk_user,
                alumnoId: alumnoId,
                secureUrl: secureUrl,
                valor: valor,
            },
            onSuccess: () => {
                alert('Comprobante enviado con éxito');
            },
            onError: (error) => {
                console.error('Error:', error);
                alert('Error al enviar el comprobante');
            },
        });
    };

    return (
        <section className="container flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Subir comprobante</h1>

                <div {...getRootProps()} className="border border-black w-72 h-72 flex items-center justify-center">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Suelte los archivos aquí...</p>
                    ) : (
                        <p style={{ textAlign: 'justify', marginLeft: '20px', marginRight: '20px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            👉Arrastre y suelte comprobante aquí o haga clic para seleccionar comprobante 👈
                        </p>
                    )}
                </div>
                {compressedFiles[0] && (
                    <img
                        src={URL.createObjectURL(compressedFiles[0])}
                        alt=""
                        className="w-240 h-400"
                    />
                )}
                <PrimaryButton className="mt-4" disabled={uploading || compressedFiles.length === 0}>
                    Subir Imagen
                </PrimaryButton>
            </form>

            <form onSubmit={handleEnviar}>


                <div className="mt-4">
                    <InputLabel htmlFor='valor' values='Valor Pagado'></InputLabel>
                    <TextInput
                        id='valor'
                        name='valor'
                        ref={valorInput}
                        type='number'
                        placeholder='Valor Pagado'
                        value={data.valor}
                        onChange={(e) =>
                            setData({ ...data, valor: e.target.value })
                        }
                        className="mt-1 block w-full"
                    />
                    <InputError message={errors?.apellidos} className="mt-2"></InputError>
                </div>

                <TextInput
                    id="secureUrl"
                    name="secureUrl"
                    ref={secureUrlInput}
                    type="text"
                    placeholder='Enlace'
                    value={secureUrl}
                    onChange={(e) =>
                        setData({ ...data, secureUrl: e.target.value })
                    }
                />

                <input
                    name="fk_user"
                    value={fk_user}
                    onChange={(e) =>
                        setData({ ...data, fk_user: e.target.value })
                    }
                />
                <input
                    name="alumnoId"
                    value={alumnoId}
                    onChange={(e) =>
                        setData({ ...data, alumnoId: e.target.value })
                    }
                />


                <PrimaryButton className="mt-3" type="submit">
                    Enviar
                </PrimaryButton>
            </form>
        </section>
    );
}

export default DragDrop;
