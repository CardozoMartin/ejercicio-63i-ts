import React from 'react'

interface InputProps {
    placeholder: string;
    label: string;
    type?: string;
    name: string;
    options?: Record<string, any>;
    register: any; // Por ahora lo dejamos como 'any' para mantenerlo simple
    className?: string;
    error?: boolean;
  }

const Input = (props: InputProps) => {

    //ahora desesctructuramos los detalles que nos llegaran por los props

    const {
        placeholder,
        label,
        type="text",
        options={},
        name,
        register,
        className="",
        error=false
    }= props;

    return (
        <fieldset className={`form-floating ${className}`}>

            <input 
                type={type}
                id={`${name}-input`}
                name={name}
                placeholder={placeholder}
                {...register(name, options)}
                className={`form-control ${error ? 'is-invalid' : ''}`}
            />
            <label htmlFor={`${name}-input`}>{label}</label>
        </fieldset>
    )
}

export default Input