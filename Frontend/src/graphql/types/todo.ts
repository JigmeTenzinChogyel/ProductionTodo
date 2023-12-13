import { TodoFragmentFragment } from ".";

export type todoResponse = NonNullable<TodoFragmentFragment>

export type {
    CreateTodoMutation,
    CreateTodoMutationVariables,
    DeleteTodoMutation,
    DeleteTodoMutationVariables,
    UpdateTodoMutation,
    UpdateTodoMutationVariables,
    GetAllTodoQuery,
    GetAllTodoQueryVariables,
    GetAllTodoForOneUserQuery,
    GetAllTodoForOneUserQueryVariables,
    GetTodoDetailsQuery,
    GetTodoDetailsQueryVariables,
} from "."