import Image from "next/image";
import styles from "../styles/movie-info.module.css"
import { API_URL } from "@/constants";

export async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`Failed to fetch movie: ${response.status}`);
    return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <Image className={styles.poster} src={movie.poster_path} alt={movie.title} width={100} height={100}/>
            <div className={styles.info}>
                <h2 className={styles.title}>{movie.title}</h2>
                <h3>{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"} rel="noopener noreferrer">Homepage &rarr;</a>
            </div>
        </div>
    )
}