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
    listState: todosState 
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
  