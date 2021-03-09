import { useEffect, useState } from 'react'
import './ArtistDisplay.css'
import { fetchSingleArtist, fetchSingleArtistAlbums } from "../apiCalls"
import PropTypes from 'prop-types';



function ArtistDisplay ({artistID, setFavoriteArtists }) {
  
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
        <button onClick={() => setFavoriteArtists(favoriteArtists => [...favoriteArtists, artist])}>Favorite This Artist</button>
     </>
    )

}

export default ArtistDisplay

ArtistDisplay.propTypes = {
  artistID: PropTypes.string.isRequired,
  setFavoriteArtists: PropTypes.func.isRequired,
  // kim: PropTypes.arrayOf(object)
}