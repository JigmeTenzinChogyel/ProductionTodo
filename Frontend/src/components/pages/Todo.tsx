import React from 'react'
import AddTodo from '../organisms/forms/AddTodo'
import TodoList from '../organisms/list/TodoList'

const Todo: React.FC = (): React.JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <AddTodo />
        <TodoList />
    </div>
  )
}

export default Todo