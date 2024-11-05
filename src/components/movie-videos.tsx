

import { API_URL } from "@/app/constants"
import styles from "../styles/movie-videos.module.css"

async function getVideos(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // throw new Error("something broke...")
  const res = await fetch(`${API_URL}/${id}/videos`)
  return res.json()
}

export default async function MovieVideos({id}: {id:string}) {
  const videos = await getVideos(id)
  // return<h6>{JSON.stringify(videos)}</h6>
  return (
    <div className={styles.container}>
      {videos.map((video: any) => (
        <iframe 
          key={video.id} 
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}/>
      ))}
    </div>
  )
}