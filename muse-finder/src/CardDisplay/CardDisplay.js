import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'
import './CardDisplay.css'
import PropTypes, { object } from 'prop-types';



function CardDisplay({ topArtists, country, setTopArtists, setCurrentArtistID, setCurrentCountry}) {

  

  return (  
    <>
      <h2>Top 5 Artists Right Now in {country}</h2>
      <article>
        {topArtists.message.body.artist_list.map(artist => 
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

Card.PropTypes = {
  topArtists:  PropTypes.arrayOf(object),
  country: PropTypes.string.isRequired,
  setCurrentArtistID:PropTypes.func.isRequired, 
  setTopArtists:PropTypes.func.isRequired,
  setCurrentCountry: PropTypes.func.isRequired
}
