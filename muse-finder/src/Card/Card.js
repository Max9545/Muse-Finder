import {useEffect, useState} from 'react'
// import './Card.scss'

function Card({ artist }) {
 console.log(artist)
  return(
    <div id={artist.artist.artist}>
      <p>{artist.artist.artist_name}</p> 
    </div>
  )

}

export default Card
