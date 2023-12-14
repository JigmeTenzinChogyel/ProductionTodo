import { atom } from "recoil";
import { CurrentUser } from ".";

const key = (str: string) => `src/store/entities/user/${str}`

export const initialState = (): CurrentUser => ({
    id: "",
    name: "",
    email: "",
});



export const userState = atom<CurrentUser>({
    key: key('workspaceState'),
    default: initialState(),
  })
  