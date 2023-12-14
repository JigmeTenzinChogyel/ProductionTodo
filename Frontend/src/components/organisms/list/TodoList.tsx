import React, { useState } from 'react'
import SingleList from '../../molecules/SingleList'
import { useUser } from '../../../store/entities/user/hooks/useUser';
import { useTodoIdsByUserId } from '../../../store/entities/todo/hooks';

type isEditType = boolean;

const getAllTodo = [
    {
      id: "2f5ff3c8-6c4f-4973-bfb9-3b4349a08cdb",
      user_id: "7b068c1b-45fb-4050-bf2d-4f43c6036e25",
      description: "Go for shopping",
      completion: false
    },
    {
      id: "cd309e55-0abb-4b25-9bd3-0ca70358aa80",
      user_id: "b04f84e4-2513-44c8-8aab-8ebe639c5b85",
      description: "Buy food",
      completion: false
    },
    {
      id: "48c662a9-89fb-42f7-ba84-8e98b23de350",
      user_id: "7b068c1b-45fb-4050-bf2d-4f43c6036e25",
      description: "Cook Dinner",
      completion: false
    },
    {
      id: "fd09301d-139c-4785-9384-de9213f005a2",
      user_id: "7b068c1b-45fb-4050-bf2d-4f43c6036e25",
      description: "Go For Shopping",
      completion: false
    },
    {
      id: "0a17ca3f-7249-4abe-946b-93ca3dfeb7c1",
      user_id: "7b068c1b-45fb-4050-bf2d-4f43c6036e25",
      description: "Fill up excel",
      completion: false
    }
  ]
const TodoList:React.FC = ():React.JSX.Element => {
  
  const { user } = useUser();
  const {todoIds} = useTodoIdsByUserId(user.id);
  console.log(todoIds, "todoids");
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