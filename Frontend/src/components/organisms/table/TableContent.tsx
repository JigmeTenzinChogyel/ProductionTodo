import React from "react";
import { useUser } from "../../../store/entities/user/hooks/useUser";
import { useTodoIdsByUserId } from "../../../store/entities/todo/hooks";
import TableRow from "./TableRow";

const TableContent: React.FC = (): React.JSX.Element => {
  const { user } = useUser();
  const {todoIds} = useTodoIdsByUserId(user.id);
  return (
    <tbody>
      {
        todoIds.map(id => <TableRow key={id} id={id}/>)
      }
    </tbody>
  );
};
export default TableContent;


