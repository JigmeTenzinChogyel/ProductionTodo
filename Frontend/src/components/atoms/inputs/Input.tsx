import React from 'react'

interface Props {
    name?: string;
    type?: string;
    style?: string;
    placeholder?: string;
    value?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void; 
}

const Input: React.FC<Props> = ({ name, type, style, placeholder, value, onChange }): React.JSX.Element => {
  return (
    <input 
        id={name}
        name={name}
        className={`${style} w-full bg-gray-200 text-gray-700 border rounded px-2 py-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}

export default Input