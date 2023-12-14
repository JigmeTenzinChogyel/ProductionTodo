import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { todoState, initialState } from "../atom";
import { useCreateTodoMutation } from "../../../../graphql/types";
import { v4 as uuidv4} from "uuid"
import { useTodoResponse } from "./useTodoResponse";

export const useTodoCommand = () => {

  const storedToken = localStorage.getItem("token");
  const { upsert } = useUpsert();
  const [ createTodoMutation ] = useCreateTodoMutation();
  // const [ getAllTodoForOneUser ] = useGetAllTodoForOneUserLazyQuery();
  const { setTodos } = useTodoResponse();

  //function to create todo
  const createTodo = useRecoilCallback(
    ({ reset }) => async (input: { description: string, user_id: string}) => {
      const id = uuidv4();
      if (!storedToken) {
              console.error("Authentication token not found.");
              throw new Error("Authentication token not found.");
            }
      upsert({
        ...initialState(),
        ...input,
        id,
      });
      const restore = () => {
        reset(todoState(id))
      };
      try {
        const res = await createTodoMutation({
          variables: {
            id,
            description: input.description,
            user_id: input.user_id,
          },
          context: {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          },
        });
        if(res.errors) {
          restore()
          return ""
        }
        const addTodo = res.data?.createTodo;
        if (!addTodo) {
          restore()
          return ""
        }
        setTodos([
          {
            ...addTodo,
          }
        ]);
      } catch ( err ) {
        restore();
        throw err;
      }
    },
    [
      upsert,
      createTodoMutation,
      setTodos,
    ],
  );

  return {
    createTodo,
  };
};
