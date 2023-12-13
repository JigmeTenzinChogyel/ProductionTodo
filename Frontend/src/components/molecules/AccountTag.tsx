import React from 'react';
import Tag from '../atoms/tag/Tag';
import SingleActionButton from '../atoms/buttons/SingleActionButton';

interface Props {
  label?: string;
  btnLabel?: string;
  onClick?(): void;
}

const AccountTag: React.FC<Props> = ({ label, btnLabel, onClick }): React.JSX.Element => {
  return (
    <div className="p-4 flex justify-center items-center gap-2 w-full">
      <Tag label={label} style="font-semibold text-slate-300 text-sm" />
      <SingleActionButton btnLabel={btnLabel} onClick={onClick} style="text-blue-500 font-semibold" />
    </div>
  );
};

export default AccountTag;
