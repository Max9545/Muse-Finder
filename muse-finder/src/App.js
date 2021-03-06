
import './App.css';
import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
// const { getCode, getName } = require('country-list')
// { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 
// import { WorldMap } from "react-svg-worldmap"
import countryData from './countryData';
const WorldMap = require('react-svg-worldmap').WorldMap;
// import countryData from './countryData';
// import countryData from './countryData.js'



function App() {

    const [artists, setArtists] = useState()
    // const [nationData, setCountries] = useState()
    const nationData = countryData

    useEffect(() => {
      // console.log(getName('It'))
       fetchInfo()
      .then(data => data.json())
      .then(data => setArtists(data))
      .then(() => console.log(nationData))
    },[])

    const fetchInfo = ()  => {
     
      return  fetch('https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=3&page_size=3&country=it&apikey=0f9be22f858591d254989feff9a29844')

    }

  return (
  
    <div className="App">
      <header className="App-header">
       <WorldMap color="green" title="World Map" size="lg" data={nationData} />
        <p>
          {artists && <CardDisplay  artists={artists}/>}
        </p>
      </header>
    </div>
  );
}

export default App;
