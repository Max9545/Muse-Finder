import {useEffect, useState} from 'react'
import './Card.css'
import { fetchSingleArtist, fetchSingleArtistAlbums } from '../apiCalls'

function Card({ artist, setCurrentArtistID, setTopArtists, setCurrentCountry }) {

 const getArtist = (id) => {
  //  fetchSingleArtist(id)
  //  .then(data => setCurrentArtist(data))
  //  .then()
  //  .then(data => console.log(data))
   
    setCurrentArtistID(id)
  //  fetchSingleArtistAlbums(id)
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
