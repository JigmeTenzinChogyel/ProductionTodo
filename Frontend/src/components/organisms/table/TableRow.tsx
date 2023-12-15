import React, { useState, ChangeEvent } from 'react';
import { useTodo } from '../../../store/entities/todo/hooks';
import CRUDButton from '../../atoms/buttons/CRUDButton';
import Input from '../../atoms/inputs/Input';

type TableRowProps = {
  id: string;
};

const TableRow: React.FC<TableRowProps> = ({ id }): React.JSX.Element => {
  const { todo } = useTodo(id);
  const { completion } = todo;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(todo.completion);
  const [value, setValue] = useState<string>(todo.description);

  const handleCompletionChange = () => {
    setIsComplete((prevIsComplete) => !prevIsComplete);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    console.log('delete');
  };

  const handleSave = () => {
    console.log(value);
    setIsEdit(!isEdit);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <tr>
      <td>
        {
          isEdit ? 
          <Input 
          type='text'
          onChange={handleInputChange}
          style='w-full h-full outline-none border-none'
          value={value} 
          onFocus={isEdit}
          /> :
          value
        }
      </td>
      <td className='flex gap-2 justify-center items-center'>
        {isEdit ? (
          <Input
            type='checkbox'
            checked={isComplete}
            onChange={handleCompletionChange}
          />
        ) : (
          <span>{completion ? 'Completed' : 'InComplete'}</span>
        )}
      </td>
      <td className='flex justify-evenly'>
        {isEdit ? (
          <CRUDButton
            onClick={handleSave}
            btnLabel='Save'
            btnStyle='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          />
        ) : (
          <>
            <CRUDButton
              onClick={handleEdit}
              btnLabel='Edit'
              btnStyle='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            />
            <CRUDButton
              onClick={handleDelete}
              btnLabel='Delete'
              btnStyle='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
