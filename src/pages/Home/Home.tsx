import { useGetMoviesQuery } from "../../graphql/generated"

const Home = () => {
  const { data, loading, error } = useGetMoviesQuery()

  return <h2>Home {data?.get_movies[0]?.title}</h2>
}

export default Home
