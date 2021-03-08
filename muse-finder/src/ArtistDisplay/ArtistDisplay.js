import { useEffect, useState } from 'react'
import { fetchSingleArtist, fetchSingleArtistAlbums } from "../apiCalls"

function ArtistDisplay ({artistID}) {
  
  const [albums, setAlbums] = useState()
  const [artist, setArtist] = useState()
  useEffect(() => {
    fetchSingleArtist(artistID)
    .then(data => setArtist(data))
    .then(data => console.log(data))
  }, [])



  useEffect(() => {
    fetchSingleArtistAlbums(artistID)
    .then(data => setAlbums(data.message.body.album_list))
  }, [])



   return(
     <>
      {albums && artist &&
      <h3>{`${artist.message.body.artist.artist_name}`} Albums: <br></br>{albums.map(album => album.album.album_name)}</h3>}
      {/* <button onClick={() => saveArtist()}></button> */}
     </>
    )

}
export default ArtistDisplay