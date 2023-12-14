import React, { useState } from 'react'
import SingleList from '../../molecules/SingleList'
import { useUser } from '../../../store/entities/user/hooks/useUser';
import { useTodoIdsByUserId } from '../../../store/entities/todo/hooks';

type isEditType = boolean;
const TodoList:React.FC = ():React.JSX.Element => {
  
  const { user } = useUser();
  const {todoIds} = useTodoIdsByUserId(user.id);
  const [ isEdit, setIsEdit ] = useState<isEditType>(false)

    const handleDelete = (id: string) => {
        console.log("Deleted: ", id)
    }

  return (
    <div className='h-2/3 w-3/4 '>
        {
          todoIds.map( id => 
          <SingleList 
              key={id} 
              todoId={id}
              handleDelete={() => handleDelete(id) }
              isEdit={ isEdit } 
              />)
        }
    </div>
  )
}

export default TodoList