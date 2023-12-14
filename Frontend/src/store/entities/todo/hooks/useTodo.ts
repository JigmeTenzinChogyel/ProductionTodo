import { useRecoilCallback, useRecoilValue } from "recoil";
import { Todo } from "../type"
import { useUpsert } from "./useUpsert"
import { todoState } from "../atom";
import { useUpdateTodoMutation } from "../../../../graphql/types";

export const useTodo = (todoId: string) => {

  const storedToken = localStorage.getItem("token");
  const { upsert } = useUpsert();
  const [ updateTodoMutation ] = useUpdateTodoMutation();
  const todo = useRecoilValue(todoState(todoId));

  const setTodo = useRecoilCallback(
    ({ snapshot }) =>
    async (input: Todo) => {
      const prev = await snapshot.getPromise(
        todoState(todoId),
      )
      upsert({ ...prev, ...input });
      const res = await updateTodoMutation({
        variables: {
          ...input
        },
        context: {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        },
      });
      if (res.errors) upsert(prev)
    },
  [
    todoId,
    updateTodoMutation,
    upsert,
  ],
  )
  return {
    todo,
    setTodo,
  }
}