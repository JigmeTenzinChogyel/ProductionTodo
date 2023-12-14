import { Todo } from "./type";
import { selectorFamily } from "recoil";
import { createState } from "../../utils/createState";

const key = (str: string) => `src/store/entities/todo/${str}`

export const initialState = (): Todo => ({
    id: "",
    description: "",
    completion: false,
    user_id: "",
  });
  
  export const { 
    state: todoState, 
    listState: todosState ,
    idsState: todoIdsState
  } = createState({ key, initialState });
  
  export const TodoByUserIdState = selectorFamily<Todo[], string>({
    key: key("TodoByUserIdState"),
    get:
      (user_id) =>
      ({ get }) => {
        const todo = get(todosState);
        return todo.filter((todo) => todo.id === user_id);
      },
  });

  export const TodoIdsByUserIdState = selectorFamily<string[], string>({
    key: key("TodoIdsByUserIdState"),
    get:
      (user_id) =>
      ({ get }) => {
        const todo = get(todosState);
        return todo.filter((todo) => todo.user_id === user_id).map((todo) => todo.id);
      },
  });
  
  