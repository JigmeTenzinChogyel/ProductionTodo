import type { 
    SignInUserMutationVariables, 
    UserResponse 
} from "../../../graphql/types/user";

export type { UserResponse}
export type {
    SignUpMutation,
    SignInUserMutation,
    SignInUserMutationVariables,
    SignUpMutationVariables,
    VerifyTokenQuery,
    VerifyTokenQueryVariables,
} from "../../../graphql/types/user"

export type CurrentUser = Omit<UserResponse,'todos'>
export type UserSignInType = SignInUserMutationVariables;
