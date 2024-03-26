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
                <InputLabel htmlFor={htmlFor} value={label} />
                <TextInput
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    id={id}
                    type="file"
                    name={name}
                    ref={ref}
                    accept="image/*"
                    onChange={handleFileChange}
               />
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="mt-2 w-20 h-auto"
                    />
                )}
                <InputError message={errorMessage} className="mt-2" />
            </div>
        );
    }
);

export default ImgField;
