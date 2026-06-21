"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/movie.module.css"
import { useRouter } from "next/navigation";

interface MovieProps {
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({id, title, poster_path}: MovieProps){
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
          <Image src={poster_path} alt={title} width={100} height={100} onClick={onClick}/>
          <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}