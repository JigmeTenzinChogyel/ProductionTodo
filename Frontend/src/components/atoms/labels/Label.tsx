import React from 'react'

interface Props {
    id?: string;
    label?: string;
    style?: string;
}

const Label: React.FC<Props> = ({ id, label, style }): React.JSX.Element => {
  return (
    <label 
        htmlFor={id}
        className={`${style} text-slate-400 text-sm font-semibold`}>
        {label}
    </label>
  )
}

export default Label