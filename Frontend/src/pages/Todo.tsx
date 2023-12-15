import React from 'react'
import AddTodo from '../components/organisms/forms/AddTodo'
import Table from '../components/organisms/table/Table'
import TableContent from '../components/organisms/table/TableContent'

const Todo: React.FC = (): React.JSX.Element => {
  const tableHeaders = [
    "Description",
    "Completion",
    "Action",
  ];
  return (
    <div className='flex flex-col justify-center items-center w-4/5'>
        <AddTodo />
        <Table
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<TableContent />}/>
    </div>
  )
}

export default Todo