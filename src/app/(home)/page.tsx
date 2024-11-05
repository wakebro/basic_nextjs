// 'use client'

import Movie from "@/components/movie";
import { Metadata } from "next";

import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home"
}

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}
export default async function HomePage() {
  // const res = await fetch(`https://...`)
  // const data = await res.json()

  // if (!res.ok) {
  //   return 'There was an error.'
  // }
  
  // return <Link href="/dashboard">Dashboard</Link> // Recomandation
  // const router = useRouter()
  // return <button type="button" onClick={() => router.push('/dashboard')}>Dashboard</button>

  // const [movies, setMovies] = useState()

  const movies = await getMovies()
  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
          <Movie key={movie.id} id={movie.id} 
            title={movie.title} 
            poster_path={movie.poster_path}/>
      ))}
    </div>
  )
}