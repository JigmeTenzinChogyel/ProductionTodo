import { useRecoilCallback } from "recoil";
import { todoState } from "../atom";
import { Todo } from "../type";

export const useUpsert = () => {
  const upsert = useRecoilCallback(
    ({ set }) =>
      (input: Todo) => {
        if (input != null && input.id != null) {
          set(todoState(input.id), input);
        }
      },
    []
  );

  return {
    upsert,
  };
};
