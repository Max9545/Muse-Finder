import { useEffect, useState } from 'react'
import { fetchSingleArtist, fetchSingleArtistAlbums } from "../apiCalls"

function ArtistDisplay ({artistID}) {
  
  const [albums, setAlbums] = useState()

  useEffect(() => {
    fetchSingleArtistAlbums(artistID)
    .then(data => setAlbums(data.message.body.album_list))
  })

   return(
     <>
      {albums && <h3>{albums.map(album => album.album.album_name)}</h3>}
     </>
    )

}
export default ArtistDisplay