import {useEffect, useState} from 'react'
import './Card.css'
import { fetchSingleArtist, fetchSingleArtistAlbums } from '../apiCalls'

function Card({ artist }) {

 const getArtist = (id) => {
   console.log('id space',id)
   fetchSingleArtist(id)
   .then(data => console.log(data))
   fetchSingleArtistAlbums(id)
   .then(data => console.log(data))
 }

  return(
    <section id={artist.artist.artist}  onClick={() => getArtist(artist.artist.artist_id)} >
      <p >{artist.artist.artist_name} </p> 
    </section>
  )

}

export default Card
