import type { GetMoviesQuery } from './graphql/generated'

export type Movie = GetMoviesQuery["movies"][0]