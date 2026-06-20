import { API_URL } from "@/app/(home)/page";
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({
    params,
    // searchParams,
}: {
    params: Promise<{ id: string }>;
    // searchParams: Promise<{ region: string }>;
}) {
    const { id } = await params;
    // const { region } = await searchParams;

    // 병렬적 fetch(Parallel Requests) Promise.all([]);
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <>
            <h3>Movie Detail Page</h3>
            {/* <h1>{movie.title}</h1> */}

            {/* Suspense 를 이용한 병렬 fetch */}
            {/* fallback으로 로딩중 UI 구현 */}
            <Suspense fallback={<h3>Loading movie info</h3>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h3>Loading movie videos</h3>}>
                <MovieVideos id={id}/>
            </Suspense>
        </>
    )
}