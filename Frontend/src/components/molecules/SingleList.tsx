import React from 'react'
import Tag from '../atoms/tag/Tag'
import CRUDButton from '../atoms/buttons/CRUDButton'
import { useTodo } from '../../store/entities/todo/hooks';

interface Props {
    todoId: string;
    handleEdit?(): void;
    handleDelete?(): void;
    handleSave?(): void;
    isEdit: boolean;
}

const SingleList: React.FC<Props> = ({ todoId, handleEdit, handleDelete, handleSave, isEdit }): React.JSX.Element => {
    const {todo} = useTodo(todoId)

    if (isEdit) {
        return (
            <div className='p-1 my-1 block w-full rounded-lg'>
                <div className='w-full flex items-center justify-between border-b px-5 py-2'>
                    <Tag 
                    label={ todo.description }
                    style='tw-3/4 text-base text-neutral-600'
                    />
                </div>
                <CRUDButton 
                    onClick={ handleSave } 
                    btnLabel='Edit'
                    btnStyle='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'/>
            </div>
          )
    } else {
        return (
            <div className='p-1 my-1 block w-full rounded-lg'>
                <div className='w-full flex items-center justify-between border-b px-5 py-2'>
                    <Tag 
                    label={ todo.description }
                    style='w-3/4 text-lg text-neutral-600 '
                    />
                    <div className='flex items-center gap-6'>
                        <CRUDButton 
                            onClick={ handleEdit } 
                            btnLabel='Edit'
                            btnStyle='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
                        <CRUDButton 
                            onClick={ handleDelete } 
                            btnLabel='Delete'
                            btnStyle='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'/>
                    </div>
                </div>
            </div>
          )
    }

}

export default SingleList