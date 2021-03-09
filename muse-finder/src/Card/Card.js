import {useEffect, useState} from 'react'
import './Card.css'
import { fetchSingleArtist, fetchSingleArtistAlbums } from '../apiCalls'
import { Link } from 'react-router-dom'


function Card({ artist, setCurrentArtistID, setTopArtists, setCurrentCountry }) {

 const getArtist = (id) => {
  setCurrentArtistID(id)
  setTopArtists()
  setCurrentCountry()
 }

  return(

    
    <Link to={`/${artist.artist.artist_id}`} style={{ textDecoration: 'none'}}>
      <section id={artist.artist.artist}  onClick={() => getArtist(artist.artist.artist_id)} >
      <p>{artist.artist.artist_name} </p> 
  </section>
  </Link>
  )

}

export default Card
