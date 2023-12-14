import React from 'react'
import Input from '../atoms/inputs/Input'
import AuthButton from '../atoms/buttons/AuthButton';

interface Props {
    name?: string;
    type?: string;
    style?: string;
    placeholder?: string;
    value?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    label?: string;
}

const InputButton: React.FC<Props> = ({
     name, 
     type, 
     style, 
     placeholder, 
     value, 
     onChange, 
     label, 
    }): React.JSX.Element => {

  return (
    <div className='flex justify-center gap-4 w-full'>
        <Input 
            name={name}
            type={type}
            style={style}
            placeholder={placeholder}
            value={value}
            onChange={ onChange }
            />
        <AuthButton 
        label={ label } 
        style='my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg '/>
    </div>
  )
}

export default InputButton