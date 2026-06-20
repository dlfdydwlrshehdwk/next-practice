import Link from "next/link";

export const API_URL = "https://nomad-movies-2.nomadcoders.workers.dev/movies";

export const metadata = {
  title : "Home",
}

interface Movie {
  id: number;
  title: string;
}

async function getMovies(): Promise<Movie[]> {
  // 비동기 n초간 막음
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  console.log('movies',movies[0])
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
      ))}
    </>
  );
}