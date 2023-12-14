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
        className={style}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}

export default Input