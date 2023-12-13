import { UserFragmentFragment } from ".";

export type UserResponse = NonNullable<UserFragmentFragment>;

export type {
    SignInUserMutation,
    SignInUserMutationVariables,
    SignUpMutation,
    SignUpMutationVariables,
    GetAllUsersQueryVariables,
    GetAllUsersQuery,
    VerifyTokenQueryVariables,
    VerifyTokenQuery,
} from ".";