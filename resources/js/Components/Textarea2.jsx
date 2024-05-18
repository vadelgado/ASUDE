import React, { forwardRef } from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

const Textarea2 = forwardRef(
    (
        {
            htmlFor,
            label,
            id,
            name,
            placeholder,
            value,
            onChange,
            errorMessage,
        },
        ref
    ) => {
        return (
            <div>
                <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
                <textarea
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                    id={id}
                    ref={ref}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />                
                <InputError message={errorMessage} className="mt-2" />
            </div>
        );
    }
);

export default Textarea2;
