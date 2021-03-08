import {useEffect, useState} from 'react'
import './Card.css'
import { fetchSingleArtist, fetchSingleArtistAlbums } from '../apiCalls'

function Card({ artist, setCurrentArtistID, setTopArtists, setCurrentCountry }) {

 const getArtist = (id) => {
  setCurrentArtistID(id)
  setTopArtists()
  setCurrentCountry()
 }

  return(
    <section id={artist.artist.artist}  onClick={() => getArtist(artist.artist.artist_id)} >
      <p >{artist.artist.artist_name} </p> 
    </section>
  )

}

export default Card
