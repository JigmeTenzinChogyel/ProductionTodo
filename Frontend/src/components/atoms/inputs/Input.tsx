import React from 'react'

interface Props {
    name?: string;
    type?: string;
    style?: string;
    placeholder?: string;
    value?: string;
    checked?: boolean;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void; 
    onFocus?: boolean;
}

const Input: React.FC<Props> = ({ name, type, style, placeholder, value, checked, onChange, onFocus }): React.JSX.Element => {
  return (
    <input 
        id={name}
        name={name}
        className={style}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
    />
  )
}

export default Input