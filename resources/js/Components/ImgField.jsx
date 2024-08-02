import React, { forwardRef, useState, useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const ImgField = forwardRef(
    ({ htmlFor, label, id, name, onChange, errorMessage, imageUrl }, ref) => {
        const [previewImage, setPreviewImage] = useState(imageUrl || null);

        useEffect(() => {
            setPreviewImage(imageUrl || null);
        }, [imageUrl]);

        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
            onChange(e);
        };

        return (
            <div>
                <InputLabel className="block my-2 mb-2 text-sm font-medium text-gray-900" htmlFor={htmlFor} value={label} />
                <input
                    className="block w-full text-sm text-blue-900 border border-blue-300 rounded-lg cursor-pointer bg-blue-50 focus:outline-none"
                    id={id}
                    type="file"
                    name={name}
                    ref={ref}
                    accept="image/*"
                    onChange={handleFileChange}
               />
                {previewImage && (
                    <img
                        src={typeof previewImage === 'string' && previewImage.startsWith('data:') ? previewImage : `/storage/${previewImage}`}
                        alt="Preview"
                        className="w-20 h-auto mt-2"
                    />
                )}
                <InputError message={errorMessage} className="mt-2" />
            </div>
        );
    }
);

export default ImgField;