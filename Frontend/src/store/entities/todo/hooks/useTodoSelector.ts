import { useCallback, useEffect } from "react";
import { useGetTodoDetailsLazyQuery } from "../../../../graphql/types";
import { Todo } from "../type";
import { useTodo } from "./useTodo";
import { useTodoResponse } from "./useTodoResponse";

type Props = {
    todoId: string;
};

type Result = {
  todo: Todo;
  loading:boolean
};
export const useTodoSelector = (props: Props): Result => {
    const { todo } = useTodo(props.todoId);
    const { setTodos: setTodosFromResponse } = useTodoResponse();
    const [ refetchQuery, { loading} ] = useGetTodoDetailsLazyQuery();
    const fetchData = useCallback(async () => {
        const { data } = await refetchQuery({
            variables: {
                id: props.todoId,
            },
        });
        if (data && data.getTodoDetails) {
            setTodosFromResponse([data.getTodoDetails]);
        }
    }, [ refetchQuery, props.todoId, setTodosFromResponse]);
    useEffect(() => {
        if (!todo.id) {
            fetchData();
        }
    }, [ todo.id, fetchData]);
    return { todo, loading };
};