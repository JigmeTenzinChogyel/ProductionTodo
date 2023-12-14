import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteTodo?: Maybe<Scalars['String']['output']>;
  deleteUser?: Maybe<Scalars['String']['output']>;
  signInUser?: Maybe<SignInUserResponse>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTodoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSignInUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTodoArgs = {
  completion?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  getAllTodo?: Maybe<Array<Maybe<Todo>>>;
  getAllTodoForOneUser?: Maybe<Array<Maybe<Todo>>>;
  getAllUser?: Maybe<Array<Maybe<User>>>;
  getTodoDetails?: Maybe<Todo>;
  verifyToken?: Maybe<User>;
};


export type RootQueryTypeGetAllTodoForOneUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeGetTodoDetailsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type RootQueryTypeVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type SignInUserResponse = {
  __typename?: 'SignInUserResponse';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Todo = {
  __typename?: 'Todo';
  completion: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user_id: Scalars['ID']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type TodoFragmentFragment = { __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string };

export type UserFragmentFragment = { __typename?: 'User', id: string, name?: string | null, email: string, todos?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null };

export type CreateTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: string | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  completion: Scalars['Boolean']['input'];
  user_id: Scalars['ID']['input'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null };

export type SignUpMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name?: string | null, email: string, todos?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null } | null };

export type SignInUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser?: { __typename?: 'SignInUserResponse', token?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, email: string, todos?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null } | null } | null };

export type GetAllTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodoQuery = { __typename?: 'RootQueryType', getAllTodo?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null };

export type GetAllTodoForOneUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAllTodoForOneUserQuery = { __typename?: 'RootQueryType', getAllTodoForOneUser?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null };

export type GetTodoDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTodoDetailsQuery = { __typename?: 'RootQueryType', getTodoDetails?: { __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'RootQueryType', getAllUser?: Array<{ __typename?: 'User', id: string, name?: string | null, email: string, todos?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null } | null> | null };

export type VerifyTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyTokenQuery = { __typename?: 'RootQueryType', verifyToken?: { __typename?: 'User', id: string, name?: string | null, email: string, todos?: Array<{ __typename?: 'Todo', id: string, description: string, completion: boolean, user_id: string } | null> | null } | null };

export const TodoFragmentFragmentDoc = gql`
    fragment TodoFragment on Todo {
  id
  description
  completion
  user_id
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  todos {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const CreateTodoDocument = gql`
    mutation CreateTodo($id: ID!, $description: String!, $user_id: ID!) {
  createTodo(id: $id, description: $description, user_id: $user_id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $description: String!, $completion: Boolean!, $user_id: ID!) {
  updateTodo(
    id: $id
    description: $description
    completion: $completion
    user_id: $user_id
  ) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      completion: // value for 'completion'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInUserDocument = gql`
    mutation SignInUser($email: String!, $password: String!) {
  signInUser(email: $email, password: $password) {
    user {
      ...UserFragment
    }
    token
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const GetAllTodoDocument = gql`
    query GetAllTodo {
  getAllTodo {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;

/**
 * __useGetAllTodoQuery__
 *
 * To run a query within a React component, call `useGetAllTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
      }
export function useGetAllTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export function useGetAllTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(GetAllTodoDocument, options);
        }
export type GetAllTodoQueryHookResult = ReturnType<typeof useGetAllTodoQuery>;
export type GetAllTodoLazyQueryHookResult = ReturnType<typeof useGetAllTodoLazyQuery>;
export type GetAllTodoSuspenseQueryHookResult = ReturnType<typeof useGetAllTodoSuspenseQuery>;
export type GetAllTodoQueryResult = Apollo.QueryResult<GetAllTodoQuery, GetAllTodoQueryVariables>;
export const GetAllTodoForOneUserDocument = gql`
    query GetAllTodoForOneUser($id: ID!) {
  getAllTodoForOneUser(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;

/**
 * __useGetAllTodoForOneUserQuery__
 *
 * To run a query within a React component, call `useGetAllTodoForOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoForOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoForOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllTodoForOneUserQuery(baseOptions: Apollo.QueryHookOptions<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>(GetAllTodoForOneUserDocument, options);
      }
export function useGetAllTodoForOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>(GetAllTodoForOneUserDocument, options);
        }
export function useGetAllTodoForOneUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>(GetAllTodoForOneUserDocument, options);
        }
export type GetAllTodoForOneUserQueryHookResult = ReturnType<typeof useGetAllTodoForOneUserQuery>;
export type GetAllTodoForOneUserLazyQueryHookResult = ReturnType<typeof useGetAllTodoForOneUserLazyQuery>;
export type GetAllTodoForOneUserSuspenseQueryHookResult = ReturnType<typeof useGetAllTodoForOneUserSuspenseQuery>;
export type GetAllTodoForOneUserQueryResult = Apollo.QueryResult<GetAllTodoForOneUserQuery, GetAllTodoForOneUserQueryVariables>;
export const GetTodoDetailsDocument = gql`
    query GetTodoDetails($id: ID!) {
  getTodoDetails(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;

/**
 * __useGetTodoDetailsQuery__
 *
 * To run a query within a React component, call `useGetTodoDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTodoDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>(GetTodoDetailsDocument, options);
      }
export function useGetTodoDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>(GetTodoDetailsDocument, options);
        }
export function useGetTodoDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>(GetTodoDetailsDocument, options);
        }
export type GetTodoDetailsQueryHookResult = ReturnType<typeof useGetTodoDetailsQuery>;
export type GetTodoDetailsLazyQueryHookResult = ReturnType<typeof useGetTodoDetailsLazyQuery>;
export type GetTodoDetailsSuspenseQueryHookResult = ReturnType<typeof useGetTodoDetailsSuspenseQuery>;
export type GetTodoDetailsQueryResult = Apollo.QueryResult<GetTodoDetailsQuery, GetTodoDetailsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUser {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const VerifyTokenDocument = gql`
    query VerifyToken($token: String!) {
  verifyToken(token: $token) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useVerifyTokenQuery__
 *
 * To run a query within a React component, call `useVerifyTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenQuery(baseOptions: Apollo.QueryHookOptions<VerifyTokenQuery, VerifyTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(VerifyTokenDocument, options);
      }
export function useVerifyTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyTokenQuery, VerifyTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(VerifyTokenDocument, options);
        }
export function useVerifyTokenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VerifyTokenQuery, VerifyTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VerifyTokenQuery, VerifyTokenQueryVariables>(VerifyTokenDocument, options);
        }
export type VerifyTokenQueryHookResult = ReturnType<typeof useVerifyTokenQuery>;
export type VerifyTokenLazyQueryHookResult = ReturnType<typeof useVerifyTokenLazyQuery>;
export type VerifyTokenSuspenseQueryHookResult = ReturnType<typeof useVerifyTokenSuspenseQuery>;
export type VerifyTokenQueryResult = Apollo.QueryResult<VerifyTokenQuery, VerifyTokenQueryVariables>;