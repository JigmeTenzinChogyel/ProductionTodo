import React, { useCallback, useState } from 'react'
import InputButton from '../../molecules/InputButton'
import { useUser } from '../../../store/entities/user/hooks/useUser'
import { useTodoCommand } from '../../../store/entities/todo/hooks/useTodoCommand';

type todoType = string;

const AddTodo: React.FC = (): React.JSX.Element => {
    const { getCurrentUser } = useUser();
    const { createTodo } = useTodoCommand();
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
            if ( !user_id ) {
              throw new Error("User ID is undefined")
            }
            try {
              const todoWithUserId = {
                description,
                user_id
              }
              await createTodo( todoWithUserId );
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
        className=' flex w-full flex-col items-center gap-5 p-5'>
        <h3 className='text-3xl font-semibold'>Add your TODOS!</h3>
        <InputButton
            name='todo'
            type='text'
            style="w-1/2 px-5 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder='create todo'
            value={ description }
            onChange={ handleChange }
            label="Add"
        />
    </form>
  )
}

export default AddTodo