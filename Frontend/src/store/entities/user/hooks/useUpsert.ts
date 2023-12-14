import { useRecoilCallback } from "recoil";
import { userState } from "../atom";
import { CurrentUser } from "..";

export const useUpsert = () => {
    const upsert = useRecoilCallback(
      ({ set }) =>
        (user: CurrentUser) => {
          set(userState, user)
        },
      [],
    )
  
    return {
      upsert,
    }
  }
  
