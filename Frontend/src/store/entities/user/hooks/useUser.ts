import { useRecoilCallback, useRecoilState } from "recoil";
import { useUpsert } from "./useUpsert";
import {
  TodoFragmentFragment,
    useSignInUserMutation,
} from "../../../../graphql/types";
import { CurrentUser, UserSignInType } from "../type";
import { useTodoResponse } from "../../todo/hooks/useTodoResponse";
import { userState } from "../atom";

export const useUser = () => {

  const { upsert } = useUpsert();
  const [signInUserMutation] = useSignInUserMutation();
  const {setTodos} = useTodoResponse();
  const [user] = useRecoilState(userState)

  const setUser = useRecoilCallback(
    () => async (input: UserSignInType) => {
      try {
        const res = await signInUserMutation({
            variables: {
                ...input,
            }
        });

        const usertoken: string | null = res.data?.signInUser?.token ?? null;
        const user: CurrentUser | null = res.data?.signInUser?.user ?? null;
        const todos = res.data?.signInUser?.user?.todos || [];

        if(todos.length > 0){
          setTodos(todos as TodoFragmentFragment[])
        }
        
        if ( usertoken ) {
          localStorage.setItem("token", usertoken);
          if (user) {
            upsert(user);
          } else {
            throw new Error('upsert unsucessfull!');
          }
        } else {
          throw new Error(`Error during sign-in:, ${res.errors}`);
        }
      } catch (fetchError) {
        throw new Error(`Error during sign-in fetch:, ${fetchError}`);
      }
    },
    [upsert, signInUserMutation]
  ); 

  return {
    user,
    setUser,
  };
};
