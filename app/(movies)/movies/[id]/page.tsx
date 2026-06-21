import MovieInfo, { getMovie } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface IParams {
    params: Promise<{id: string}>;
}

export async function generateMetadata({params} : IParams){
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MovieDetail({params}: IParams) {
    const { id } = await params;

    // 병렬적 fetch(Parallel Requests) Promise.all([]);
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <>
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