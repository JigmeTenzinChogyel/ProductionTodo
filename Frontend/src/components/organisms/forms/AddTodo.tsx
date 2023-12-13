import React, { useCallback, useState } from 'react'
import InputButton from '../../molecules/InputButton'
import { useUser } from '../../../store/entities/user/hooks/useUser'
import { useCreateTodo } from '../../../store/entities/todo/hooks/useCreateTodo';
import { v4 as uuidv4 } from 'uuid';

type todoType = string;

const AddTodo: React.FC = (): React.JSX.Element => {
    const { getCurrentUser } = useUser();
    const { createTodo } = useCreateTodo();
    const [ description, setDescription ] = useState<todoType>('')

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      setDescription(e.target.value)
    }

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
          e.preventDefault();
          try {
            const user = await getCurrentUser();
            const user_id = user?.data?.verifyToken?.id;
            console.log(user_id)
            if ( !user_id ) {
              throw new Error("User ID is undefined")
            }
            try {
              const todoWithUserId = {
                id: uuidv4(), 
                description,
                user_id
              }
              await createTodo({todo: todoWithUserId});
            } catch ( err ) {
              throw new Error(`Error creating todo: ${err}`)
            }
            setDescription("")
          } catch (error) {
            console.error(error);
          }
        },
        [getCurrentUser] // Add dependencies if needed
      );     

  return (
    <form 
        onSubmit={ handleSubmit }
        className=''>
        <h3 className='text-7xl font-semibold'>Todos</h3>
        <InputButton
            name='todo'
            type='text'
            style="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder='create todo'
            value={ description }
            onChange={ handleChange }
            label="Add"
        />
    </form>
  )
}

export default AddTodo