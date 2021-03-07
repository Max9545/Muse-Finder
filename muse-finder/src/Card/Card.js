import {useEffect, useState} from 'react'

function Card({ artist }) {
 console.log(artist)
  return(
    <div id={artist.artist.artist}>
      <p></p>
      <p>{artist.artist.artist_name}</p> 
    </div>
  )

}

export default Card
