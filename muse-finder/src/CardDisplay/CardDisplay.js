import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'
// import './CardDisplay.scss'


function CardDisplay({ artists, country }) {

  

  return (  
    <>
      <p>Top 5 Artists from {country}</p>
      {/* <p>{artists.message.body.artist_list[0].artist.artist_name}</p> */}
      <p>
        {artists.message.body.artist_list.map(artist => 
          <Card artist={artist}/>
        )}
      </p>
    </>
  )
}

export default CardDisplay