import React from 'react';

interface Props {
  btnLabel?: 'Add' | 'Edit' | 'Delete' | 'Save'; // Use a union type for specific options
  btnStyle?: string;
  onClick?(): void;
}

const CRUDButton: React.FC<Props> = ({ btnLabel, btnStyle, onClick }) => {
  return (
    <button className={`btn ${btnStyle}`} onClick={onClick}>
      {btnLabel}
    </button>
  );
};

export default CRUDButton;
