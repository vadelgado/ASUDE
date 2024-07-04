import React, { forwardRef } from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Select from "react-select";

const SelectField = forwardRef(
  (
    {
      htmlFor, label, id, name, value, options, onChange, errorMessage
    },
    ref
  ) => {
    const handleChange = (selectedOption) => {
      onChange({ target: { name, value: selectedOption ? selectedOption.value : '' } });
    };

    const selectedOption = options.find(option => option.value === value);

    return (
      <div className="mt-1">
        <InputLabel htmlFor={htmlFor} value={label} />
        <Select
          name={name}
          ref={ref}
          id={id}
          value={selectedOption}
          onChange={handleChange}
          options={options}
          classNamePrefix="react-select"
          noOptionsMessage={({ inputValue }) => inputValue ? 'Opción no encontrada' : 'No hay opciones'}
          placeholder="Selecciona..."
          aria-label={label}
          aria-invalid={!!errorMessage}
          aria-describedby={`${id}-error`}
          styles={{
            container: (provided) => ({
              ...provided,
              marginTop: '0.25rem',
            }),
            control: (provided) => ({
              ...provided,
              borderColor: errorMessage ? '#E53E3E' : provided.borderColor,
              '&:hover': {
                borderColor: errorMessage ? '#E53E3E' : provided.borderColor,
              },
              boxShadow: errorMessage ? '0 0 0 1px #E53E3E' : provided.boxShadow,
            }),
            option: (provided) => ({
              ...provided,
              textDecoration: 'none',
            }),
          }}
        />
        <InputError id={`${id}-error`} message={errorMessage} className="mt-2" />
      </div>
    );
  }
);

export default SelectField;