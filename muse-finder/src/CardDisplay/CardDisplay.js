import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'
import './CardDisplay.css'


function CardDisplay({ artists, country, setTopArtists, setCurrentArtistID, setCurrentCountry }) {

  

  return (  
    <>
      <h2>Top 5 Artists from {country}</h2>
      <article>
        {artists.message.body.artist_list.map(artist => 
          <Card 
            artist={artist}
            setTopArtists={setTopArtists}
            setCurrentArtistID={setCurrentArtistID}
            setCurrentCountry={setCurrentCountry}
          />
        )}
      </article>
    </>
  )
}

export default CardDisplay