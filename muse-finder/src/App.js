
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [artists, setArtists] = useState('')

    useEffect(() => {
      fetchInfo()
      .then(data => data.json())
      .then(data => setArtists(data))
      .then(data => console.log(data))
    },[])

    const fetchInfo = ()  => {
      return fetch('https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=2&page_size=3&country=it&apikey=0f9be22f858591d254989feff9a29844')
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi
        </p>
      </header>
    </div>
  );
}

export default App;
