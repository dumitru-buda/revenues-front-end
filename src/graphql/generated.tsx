import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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
  DateTime: { input: Date; output: Date; }
};

export type Balance = {
  readonly __typename: 'Balance';
  readonly currency: Currency;
  readonly value: Scalars['String']['output'];
};

export enum Currency {
  Eur = 'EUR'
}

export type Movie = {
  readonly __typename: 'Movie';
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type Mutation = {
  readonly __typename: 'Mutation';
  readonly create_movie: Maybe<Success>;
  readonly create_shareholder: Maybe<Success>;
  readonly create_transfer: Maybe<Success>;
};


export type MutationCreate_MovieArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreate_ShareholderArgs = {
  data: ShareholderInput;
};


export type MutationCreate_TransferArgs = {
  amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  movie_id: Scalars['String']['input'];
};

export type Query = {
  readonly __typename: 'Query';
  readonly get_movies: ReadonlyArray<Maybe<Movie>>;
  readonly get_shareholder: Shareholder;
  readonly get_shareholders: ReadonlyArray<Maybe<Shareholder>>;
  readonly get_transfers: Transfers;
};


export type QueryGet_ShareholderArgs = {
  shareholder_id: Scalars['String']['input'];
};


export type QueryGet_TransfersArgs = {
  shareholder_id: Scalars['String']['input'];
};

export type Shareholder = {
  readonly __typename: 'Shareholder';
  readonly address: Scalars['String']['output'];
  readonly first_name: Scalars['String']['output'];
  readonly iban: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly last_name: Scalars['String']['output'];
  readonly movie: Movie;
  readonly movie_id: Scalars['String']['output'];
};

export type ShareholderInput = {
  readonly address: Scalars['String']['input'];
  readonly first_name: Scalars['String']['input'];
  readonly iban: Scalars['String']['input'];
  readonly last_name: Scalars['String']['input'];
  readonly movie_id: Scalars['String']['input'];
};

export type Success = {
  readonly __typename: 'Success';
  readonly error_message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type Transfer = {
  readonly __typename: 'Transfer';
  readonly amount: Scalars['Float']['output'];
  readonly currency: Currency;
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly movie: Movie;
  readonly movie_id: Scalars['String']['output'];
};

export type Transfers = {
  readonly __typename: 'Transfers';
  readonly balance: Balance;
  readonly transfers: ReadonlyArray<Maybe<Transfer>>;
};

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateMovieMutation = { readonly __typename: 'Mutation', readonly create_movie: { readonly __typename: 'Success', readonly success: boolean, readonly error_message: string | undefined } | undefined };

export type CreateShareholderMutationVariables = Exact<{
  data: ShareholderInput;
}>;


export type CreateShareholderMutation = { readonly __typename: 'Mutation', readonly create_shareholder: { readonly __typename: 'Success', readonly success: boolean, readonly error_message: string | undefined } | undefined };

export type CreateTransferMutationVariables = Exact<{
  amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  movie_id: Scalars['String']['input'];
}>;


export type CreateTransferMutation = { readonly __typename: 'Mutation', readonly create_transfer: { readonly __typename: 'Success', readonly success: boolean, readonly error_message: string | undefined } | undefined };

export type GetShareholderQueryVariables = Exact<{
  shareholder_id: Scalars['String']['input'];
}>;


export type GetShareholderQuery = { readonly __typename: 'Query', readonly get_shareholder: { readonly __typename: 'Shareholder', readonly id: string, readonly first_name: string, readonly last_name: string, readonly movie: { readonly __typename: 'Movie', readonly title: string } } };

export type GetShareholdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShareholdersQuery = { readonly __typename: 'Query', readonly get_shareholders: ReadonlyArray<{ readonly __typename: 'Shareholder', readonly id: string, readonly first_name: string, readonly last_name: string } | undefined> };

export type GetTransfersQueryVariables = Exact<{
  shareholder_id: Scalars['String']['input'];
}>;


export type GetTransfersQuery = { readonly __typename: 'Query', readonly get_transfers: { readonly __typename: 'Transfers', readonly balance: { readonly __typename: 'Balance', readonly value: string, readonly currency: Currency }, readonly transfers: ReadonlyArray<{ readonly __typename: 'Transfer', readonly movie_id: string, readonly amount: number, readonly currency: Currency, readonly description: string, readonly movie: { readonly __typename: 'Movie', readonly title: string } } | undefined> } };

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { readonly __typename: 'Query', readonly get_movies: ReadonlyArray<{ readonly __typename: 'Movie', readonly id: string, readonly title: string } | undefined> };


export const CreateMovieDocument = /*#__PURE__*/ gql`
    mutation CreateMovie($title: String!) {
  create_movie(title: $title) {
    success
    error_message
  }
}
    `;
export type CreateMovieMutationFn = ApolloReactCommon.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = ApolloReactCommon.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const CreateShareholderDocument = /*#__PURE__*/ gql`
    mutation CreateShareholder($data: ShareholderInput!) {
  create_shareholder(data: $data) {
    success
    error_message
  }
}
    `;
export type CreateShareholderMutationFn = ApolloReactCommon.MutationFunction<CreateShareholderMutation, CreateShareholderMutationVariables>;

/**
 * __useCreateShareholderMutation__
 *
 * To run a mutation, you first call `useCreateShareholderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShareholderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShareholderMutation, { data, loading, error }] = useCreateShareholderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateShareholderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateShareholderMutation, CreateShareholderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateShareholderMutation, CreateShareholderMutationVariables>(CreateShareholderDocument, options);
      }
export type CreateShareholderMutationHookResult = ReturnType<typeof useCreateShareholderMutation>;
export type CreateShareholderMutationResult = ApolloReactCommon.MutationResult<CreateShareholderMutation>;
export type CreateShareholderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateShareholderMutation, CreateShareholderMutationVariables>;
export const CreateTransferDocument = /*#__PURE__*/ gql`
    mutation CreateTransfer($amount: Float!, $description: String!, $movie_id: String!) {
  create_transfer(amount: $amount, description: $description, movie_id: $movie_id) {
    success
    error_message
  }
}
    `;
export type CreateTransferMutationFn = ApolloReactCommon.MutationFunction<CreateTransferMutation, CreateTransferMutationVariables>;

/**
 * __useCreateTransferMutation__
 *
 * To run a mutation, you first call `useCreateTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransferMutation, { data, loading, error }] = useCreateTransferMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      description: // value for 'description'
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useCreateTransferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTransferMutation, CreateTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTransferMutation, CreateTransferMutationVariables>(CreateTransferDocument, options);
      }
export type CreateTransferMutationHookResult = ReturnType<typeof useCreateTransferMutation>;
export type CreateTransferMutationResult = ApolloReactCommon.MutationResult<CreateTransferMutation>;
export type CreateTransferMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTransferMutation, CreateTransferMutationVariables>;
export const GetShareholderDocument = /*#__PURE__*/ gql`
    query GetShareholder($shareholder_id: String!) {
  get_shareholder(shareholder_id: $shareholder_id) {
    id
    first_name
    last_name
    movie {
      title
    }
  }
}
    `;

/**
 * __useGetShareholderQuery__
 *
 * To run a query within a React component, call `useGetShareholderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShareholderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShareholderQuery({
 *   variables: {
 *      shareholder_id: // value for 'shareholder_id'
 *   },
 * });
 */
export function useGetShareholderQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetShareholderQuery, GetShareholderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShareholderQuery, GetShareholderQueryVariables>(GetShareholderDocument, options);
      }
export function useGetShareholderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShareholderQuery, GetShareholderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShareholderQuery, GetShareholderQueryVariables>(GetShareholderDocument, options);
        }
export type GetShareholderQueryHookResult = ReturnType<typeof useGetShareholderQuery>;
export type GetShareholderLazyQueryHookResult = ReturnType<typeof useGetShareholderLazyQuery>;
export type GetShareholderQueryResult = ApolloReactCommon.QueryResult<GetShareholderQuery, GetShareholderQueryVariables>;
export const GetShareholdersDocument = /*#__PURE__*/ gql`
    query GetShareholders {
  get_shareholders {
    id
    first_name
    last_name
  }
}
    `;

/**
 * __useGetShareholdersQuery__
 *
 * To run a query within a React component, call `useGetShareholdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShareholdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShareholdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShareholdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShareholdersQuery, GetShareholdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShareholdersQuery, GetShareholdersQueryVariables>(GetShareholdersDocument, options);
      }
export function useGetShareholdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShareholdersQuery, GetShareholdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShareholdersQuery, GetShareholdersQueryVariables>(GetShareholdersDocument, options);
        }
export type GetShareholdersQueryHookResult = ReturnType<typeof useGetShareholdersQuery>;
export type GetShareholdersLazyQueryHookResult = ReturnType<typeof useGetShareholdersLazyQuery>;
export type GetShareholdersQueryResult = ApolloReactCommon.QueryResult<GetShareholdersQuery, GetShareholdersQueryVariables>;
export const GetTransfersDocument = /*#__PURE__*/ gql`
    query GetTransfers($shareholder_id: String!) {
  get_transfers(shareholder_id: $shareholder_id) {
    balance {
      value
      currency
    }
    transfers {
      movie_id
      amount
      currency
      description
      movie {
        title
      }
    }
  }
}
    `;

/**
 * __useGetTransfersQuery__
 *
 * To run a query within a React component, call `useGetTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransfersQuery({
 *   variables: {
 *      shareholder_id: // value for 'shareholder_id'
 *   },
 * });
 */
export function useGetTransfersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTransfersQuery, GetTransfersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTransfersQuery, GetTransfersQueryVariables>(GetTransfersDocument, options);
      }
export function useGetTransfersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTransfersQuery, GetTransfersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTransfersQuery, GetTransfersQueryVariables>(GetTransfersDocument, options);
        }
export type GetTransfersQueryHookResult = ReturnType<typeof useGetTransfersQuery>;
export type GetTransfersLazyQueryHookResult = ReturnType<typeof useGetTransfersLazyQuery>;
export type GetTransfersQueryResult = ApolloReactCommon.QueryResult<GetTransfersQuery, GetTransfersQueryVariables>;
export const GetMoviesDocument = /*#__PURE__*/ gql`
    query GetMovies {
  get_movies {
    id
    title
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesQueryResult = ApolloReactCommon.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;