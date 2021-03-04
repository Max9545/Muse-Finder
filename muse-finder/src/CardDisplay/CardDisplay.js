import {useEffect, useState} from 'react'


function CardDisplay({ artists }) {
  
  return(
    <>
    <p>Artists</p>
    <p>
      {artists.message.body.artist_list.map(artist => {
        <Card
        id={artist.artist_id}
        name={artist.artist_name} 
        />
      })}
    </p>
    </>
  )
}

export default CardDisplay