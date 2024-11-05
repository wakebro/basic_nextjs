
import { API_URL } from "@/app/constants"
import styles from "../styles/movie-info.module.css"

export async function getMovie(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const res = await fetch(`${API_URL}/${id}`)
  return res.json()
}

export default async function MovieInfo({id}: {id:string}) {
  const movie = await getMovie(id)
  // return<h6>{JSON.stringify(info)}</h6>
  return(
    <div className={styles.container}>
      <img className={styles.poster} alt={movie.title} src={movie.poster_path}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  )
}