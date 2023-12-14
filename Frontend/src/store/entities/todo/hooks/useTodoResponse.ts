import { useRecoilCallback } from "recoil"
import { todoResponse } from "../../../../graphql/types/todo"
import { todoState } from "../atom";

type Data = todoResponse;
export const useTodoResponse = () => {
    const setTodos = useRecoilCallback(
        ({ set }) => (
            data: Data[]
        ) => {
            console.log(data)
            data.forEach((d) => {
                set(todoState(d.id), (prev) => {
                    return {
                        ...prev,
                        ...d,
                    }
                })
            })
        },
        [],
    )
    return {
        setTodos,
    }
}