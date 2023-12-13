import type { todoResponse } from "../../../graphql/types/todo";  

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
} from "../../../graphql/types/todo"

export type Todo = todoResponse;
