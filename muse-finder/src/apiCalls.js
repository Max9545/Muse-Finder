export const fetchArtists = (country)  => {
    return fetch(`https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=3&page_size=5&country=${country}&apikey=0f9be22f858591d254989feff9a29844`)
    .then(data => data.json())
  }


