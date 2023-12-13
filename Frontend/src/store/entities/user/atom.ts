import { CurrentUser } from ".";
import { createState } from "../../utils/createState";

const key = (str: string) => `src/store/entities/user/${str}`

export const initialState = (): CurrentUser => ({
    id: "",
    name: "",
    email: "",
});

export const { state: userState } = createState({
    key,
    initialState,
})