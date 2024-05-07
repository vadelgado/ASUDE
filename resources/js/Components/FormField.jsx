import React, { forwardRef } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const FormField = forwardRef(
    (
        {
            htmlFor,
            label,
            id,
            type,
            name,
            placeholder,
            value,
            onChange,
            errorMessage,
        },
        ref
    ) => {
        const autocompleteValue = type === "password" ? "current-password" : "on";
        return (
            <div className="mt-1">
                <InputLabel htmlFor={htmlFor} value={label} />
                <TextInput
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    id={id}
                    type={type}
                    name={name}
                    ref={ref}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete={autocompleteValue}
                />
                <InputError message={errorMessage} className="mt-2" />
            </div>
        );
    }
);

export default FormField;