import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import {
    useSignInUserMutation,
    useVerifyTokenLazyQuery,
} from "../../../../graphql/types";
import { CurrentUser, UserSignInType } from "../type";

export const useUser = () => {

  const { upsert } = useUpsert();
  const [signInUserMutation] = useSignInUserMutation();
  const [ verifyTokenQuery ] = useVerifyTokenLazyQuery();

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

  const getCurrentUser = async () => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const user = await verifyTokenQuery({
          variables: {
            token
          }
        });
        return user;
      } catch (decodeError) {
        console.error(`Error decoding token: ${decodeError}`);
        throw new Error(`Error decoding token: ${decodeError}`);
      }
    }
    return null;
  };  

  return {
    setUser,
    getCurrentUser,
  };
};
