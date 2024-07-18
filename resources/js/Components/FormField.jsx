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

            


<div className="relative z-0 mt-3 space-y-2">
    <TextInput
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        id={id}
        type={type}
        name={name}
        ref={ref}
        placeholder=" "
        value={value}
        onChange={onChange}
        autoComplete="off"
    />
    <InputLabel
        htmlFor={htmlFor}
        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        value={label}
    />
    <InputError message={errorMessage} className="mt-2" />
</div>
        );
    }
);

export default FormField;