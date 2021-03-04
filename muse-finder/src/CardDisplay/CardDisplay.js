import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'

function CardDisplay({ artists }) {
  console.log(artists)
  console.log(artists.message.body.artist_list[0].artist.artist_name)
  // console.log(artists.message.body.artist_list.map(c => c.artist_name))

  return (  
    <>
    <p>Artists</p>
    <p>{artists.message.body.artist_list[0].artist.artist_name}</p>
    <p>
      {/* {artists.message.body.artist_list.map(artist => {
        <Card
        id={artist.artist_id}
        name={artist.artist_name} 
        country={artist.artist_country}
        />
      })} */}
    </p>
    </>
  )
}

export default CardDisplay