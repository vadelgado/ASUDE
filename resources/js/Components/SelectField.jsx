import React, { forwardRef } from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

const SelectField = forwardRef( 
  (
    {
      htmlFor,
      label,
      id,
      name,
      value,
      options,
      onChange,
      errorMessage
    },
    ref
  ) => (
    <div className="mt-1">
      <InputLabel htmlFor={htmlFor} value={label} />
      <select
        name={name}
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <InputError message={errorMessage} className="mt-2" />
    </div>
  )
);

export default SelectField;
