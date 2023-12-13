import React from 'react'
import Tag from '../atoms/tag/Tag'
import CRUDButton from '../atoms/buttons/CRUDButton'

interface Props {
    label?: string;
    handleEdit?(): void;
    handleDelete?(): void;
    handleSave?(): void;
    isEdit: boolean;
}

const SingleList: React.FC<Props> = ({ label, handleEdit, handleDelete, handleSave, isEdit }): React.JSX.Element => {
    if (isEdit) {
        return (
            <div className='flex items-center'>
                <Tag 
                label={ label }
                style=''
                />
                <CRUDButton onClick={ handleSave } btnLabel='Edit'/>
            </div>
          )
    } else {
        return (
            <div className='flex items-center'>
                <Tag 
                label={ label }
                style=''
                />
                <CRUDButton onClick={ handleEdit } btnLabel='Edit'/>
                <CRUDButton onClick={ handleDelete } btnLabel='Delete'/>
            </div>
          )
    }

}

export default SingleList