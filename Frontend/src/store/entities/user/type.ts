import type { 
    SignInUserMutationVariables, 
    UserResponse 
} from "../../../graphql/types/user";

export type {
    SignUpMutation,
    SignInUserMutation,
    SignInUserMutationVariables,
    SignUpMutationVariables,
    VerifyTokenQuery,
    VerifyTokenQueryVariables,
} from "../../../graphql/types/user"

export type CurrentUser = UserResponse;
export type UserSignInType = SignInUserMutationVariables;

