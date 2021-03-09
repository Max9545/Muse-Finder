import './Card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Card({ artist, setCurrentArtistID, setTopArtists, setCurrentCountry }) {

 const getArtist = (id) => {
  setCurrentArtistID(id)
  setTopArtists()
  setCurrentCountry()
 }

  return (
    <Link to={`/${artist.artist.artist_id}`} style={{ textDecoration: 'none'}}>
      <section id={artist.artist.artist}  onClick={() => getArtist(artist.artist.artist_id)} >
        <p>{artist.artist.artist_name} </p> 
      </section>
    </Link>
  )

}

export default Card

Card.propTypes = {
  artist: PropTypes.string.isRequired,
  setCurrentArtistID:PropTypes.func.isRequired, 
  setTopArtists:PropTypes.func.isRequired,
  setCurrentCountry: PropTypes.func.isRequired
}
