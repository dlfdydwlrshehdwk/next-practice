import Movie from "@/components/movie";
import styles from "@/styles/home.module.css"

export const API_URL = "https://nomad-movies-2.nomadcoders.workers.dev/movies";

export const metadata = {
  title : "Home",
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}