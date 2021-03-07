
import './App.css';
import { fetchTopArtists } from './apiCalls'
import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
// const { getCode, getName } = require('country-list')
// { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 
// import { WorldMap } from "react-svg-worldmap"
import countryData from './countryData';
const WorldMap = require('react-svg-worldmap').WorldMap;
// import Header from './Header/Header.scss'

function App() {

    const [artists, setArtists] = useState()
    const [currentCountry, setCurrentCountry] = useState()
    const nationData = countryData

    var clickAction = function (event, countryName, isoCode, value, prefix, suffix) {
      fetchTopArtists(isoCode)
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
