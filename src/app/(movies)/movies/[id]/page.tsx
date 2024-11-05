import MovieInfo, { getMovie } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string }
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title
  }
}
export default async function MovieDetail({ params: { id } }: IParams) {
  
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]) // contents 모두 다운 될 때까지 대기 후 동시 출력
  
  return (
    <div>
      {/* fetcg 되는대로 출력 */}
      <Suspense fallback={<h1>Loading movie Info...</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading movie Videos...</h1>}>
        <MovieVideos id={id}/>
      </Suspense>
    </div>
  )
}