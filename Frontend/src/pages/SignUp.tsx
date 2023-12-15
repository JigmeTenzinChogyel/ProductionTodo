import React from 'react'
import Table from '../components/organisms/table/Table'
import TableContent from "../components/organisms/table/TableContent";

const tableHeaders = [
  "Description",
  "Due Date",
  "Action",
];

const SignUp: React.FC = () => {
  return (
    <Table
      headers={tableHeaders}
      minCellWidth={120}
      tableContent={<TableContent />}/>
  )
}

export default SignUp