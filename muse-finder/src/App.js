
import './App.css';
import { fetchArtists } from './apiCalls'
import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
// const { getCode, getName } = require('country-list')
// { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 
// import { WorldMap } from "react-svg-worldmap"
import countryData from './countryData';
const WorldMap = require('react-svg-worldmap').WorldMap;
// import Header from './Header/Header.scss'
// import countryData from './countryData';
// import countryData from './countryData.js'



function App() {

    const [artists, setArtists] = useState()
    const [currentCountry, setCurrentCountry] = useState()
    const nationData = countryData

    // useEffect(() => {
    //   // console.log(getName('It'))
    //    fetchInfo()
    //   .then(data => data.json())
    //   .then(data => setArtists(data))
    //   .then(() => console.log(nationData))
    // },[])

    // const fetchInfo = (country)  => {
     
    //   return fetch(`https://pure-hollows-05817.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=3&page_size=5&country=${country}&apikey=0f9be22f858591d254989feff9a29844`)
    //   .then(data => data.json())
    //   .then(data => setArtists(data))

    // }
    // const getCountryCode = (event) => {
    //   // console.log(event)
    
    //   console.log(event.target.countryName)
    // }
    var clickAction = function (event, countryName, isoCode, value, prefix, suffix) {
      // fetchInfo(isoCode)
      fetchArtists(isoCode)
      .then(data => setArtists(data))
      .then(() => setCurrentCountry(countryName))
      console.log(currentCountry)

  };
  
      
  return (
  
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       {/* <Header/> */}
       <WorldMap 
       color="green" 
       title="World Map" 
       size="lg" 
       data={nationData}
       onClickFunction={clickAction} 
       />
        <p>
          {artists && <CardDisplay  artists={artists}/>}
        </p>
    
    </div>
  );
}

export default App;
