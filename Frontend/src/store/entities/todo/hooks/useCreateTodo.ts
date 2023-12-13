import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import {
  CreateTodoMutationVariables,
  useCreateTodoMutation,
} from "../../../../graphql/types";

export const useCreateTodo = () => {
  const [CreateTodoMutation] = useCreateTodoMutation();
  const { upsert } = useUpsert();

  const createTodo = useRecoilCallback(
    () => async (input: { todo: CreateTodoMutationVariables }) => {

      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        console.error("Authentication token not found.");
        throw new Error("Authentication token not found.");
      }

      try {
        const res = await CreateTodoMutation({
          variables: {
            ...input.todo,
          },
          context: {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          },
        });

        if (res.errors) {
          throw res.errors;
        } else {
          // upsert({ ...input.todo });
        }
      } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
      }
    },
    [CreateTodoMutation]
  );

  return {
    createTodo,
  };
};
