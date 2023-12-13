import React from 'react'

interface Props {
    btnLabel?: string;
    style?: string;
    onClick?(): void;
}

const SingleActionButton: React.FC<Props> = ({ btnLabel, style, onClick }): React.JSX.Element => {
  return (
    <button 
    className={`${ style }`}
    onClick={ onClick }>
        {btnLabel}
    </button>
  )
}

export default SingleActionButton