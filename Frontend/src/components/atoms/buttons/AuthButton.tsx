import React from 'react'

interface Props {
    label?: string;
    style?: string;
}

const AuthButton: React.FC<Props> = ({ label, style}): React.JSX.Element => {

  return (
    <button className={`${style}`}>
      {label}
    </button>
  )
}

export default AuthButton