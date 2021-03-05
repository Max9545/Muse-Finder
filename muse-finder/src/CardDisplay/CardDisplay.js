import {useEffect, useState} from 'react'
import Card from '../Card/Card.js'

function CardDisplay({ artists }) {

  

  return (  
    <>
      <p>Artists</p>
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