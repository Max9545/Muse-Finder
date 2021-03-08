
import './App.css';

import Header from './Header/Header.js'

import { fetchTopArtists } from './apiCalls'
import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
// const { getCode, getName } = require('country-list')
// import { WorldMap } from "react-svg-worldmap"
import countryData from './countryData';
const WorldMap = require('react-svg-worldmap').WorldMap;
const { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 


function App() {

    const [artists, setArtists] = useState()
    const [currentCountry, setCurrentCountry] = useState()
    const nationData = countryData

    var countrySet = (event, countryName, isoCode, value, prefix, suffix) => {
      setCurrentCountry(countryName)
      fetchTopArtists(isoCode)
      .then(data => setArtists(data))
      // .then(() => setCurrentCountry(countryName))
      .then(() => console.log(currentCountry))

  };
  
      
  return (
  
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Header/>
       {/* <CountryDropdown
        value={currentCountry}
        onChange={(val) => setCurrentCountry(val)} */}
       {/* /> */}
       <WorldMap 
        color="#1AFF1A" 
        backgroundColor='#BD9DDC'
        tooltipBgColor='#4B0092'
        tooltipTextColor='#1AFF1A'
        strokeOpacity='3'
        title="Music Of The World" 
        size="responsive" 
        data={nationData}
        onClickFunction={countrySet} 
       />
      <p>
        {artists && currentCountry && <CardDisplay  country={currentCountry}artists={artists}/>}
      </p>
    </div>
  );
}

export default App;
