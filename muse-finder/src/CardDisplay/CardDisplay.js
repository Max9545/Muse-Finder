import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'
// import './CardDisplay.scss'


function CardDisplay({ artists, country }) {

  

  return (  
    <>
      <h2>Top 5 Artists from {country}</h2>
      <article>
        {artists.message.body.artist_list.map(artist => 
          <Card artist={artist}/>
        )}
      </article>
    </>
  )
}

export default CardDisplay