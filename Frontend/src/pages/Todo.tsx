import React from 'react'
import AddTodo from '../components/organisms/forms/AddTodo'
import TodoList from '../components/organisms/list/TodoList'

const Todo: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center w-4/5'>
        <AddTodo />
        <TodoList />
    </div>
  )
}

export default Todo