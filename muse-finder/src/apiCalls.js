

export const fetchTopArtists = (country)  => {
    return fetch(`https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=3&page_size=5&country=${country}&apikey=0f9be22f858591d254989feff9a29844`)
    .then(data => data.json())
  }


  export const fetchSingleArtist = (artistID) => {
    return fetch(`https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.get?artist_id=${artistID}&apikey=0f9be22f858591d254989feff9a29844`)
    .then(data => data.json())
  }

  export const fetchSingleArtistAlbums = (artistID) => {
    return fetch(`https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistID}&s_release_date=desc&g_album_name=1&apikey=0f9be22f858591d254989feff9a29844`)
    .then(data => data.json())
  }



  //artist.albums.get?artist_id=${artistID}&s_release_date=desc&g_album_name=1

