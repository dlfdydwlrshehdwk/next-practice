import Movie from "@/components/movie";
import { API_URL } from "@/constants";
import styles from "@/styles/home.module.css"

export const metadata = {
  title : "Home",
}

interface IMovie {
  id: string;
  title: string;
  poster_path: string;
}

async function getMovies(): Promise<IMovie[]> {
  // 비동기 n초간 막음
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(API_URL, { next: { revalidate: 3600 } });
  if (!response.ok) throw new Error(`Failed to fetch videos: ${response.status}`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}