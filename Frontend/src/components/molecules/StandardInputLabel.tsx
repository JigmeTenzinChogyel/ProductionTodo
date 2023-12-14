import React from 'react'
import Label from '../atoms/labels/Label'
import Input from '../atoms/inputs/Input';

interface Props {
  id?: string;
  label?: string;
  name?: string;
  type?: string;
  style?: string;
  placeholder?: string;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void; 
}

const StandardInputLabel: React.FC<Props> = (Props): React.JSX.Element => {
  return (
    <div className={Props.style}>
      <Label 
        id={Props.id} 
        label={Props.label}/>
      <Input 
        name={Props.name} 
        type={Props.type} 
        placeholder={Props.placeholder} 
        value={Props.value} 
        style='border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
        onChange={Props.onChange}/>
    </div>
  )
}

export default StandardInputLabel