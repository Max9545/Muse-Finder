
import './App.css';

import Header from './Header/Header.js'
import countryData from './countryData';
import { fetchTopArtists } from './apiCalls'
import { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
const { getCode, getName } = require('country-list')
// import { WorldMap } from "react-svg-worldmap"

const WorldMap = require('react-svg-worldmap').WorldMap;
const { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 


function App() {

    const [artists, setArtists] = useState()
    const [currentCountry, setCurrentCountry] = useState()
    const nationData = countryData

    const mapCountrySet = (event, countryName, isoCode, value, prefix, suffix) => {
      setCurrentCountry(countryName)
      fetchTopArtists(isoCode)
      .then(data => setArtists(data))
  };

  const dropDownCountrySet = (countryName) => {
    console.log(getCode(countryName))
    setCurrentCountry(countryName)
    fetchTopArtists(getCode(countryName))
    .then(data => setArtists(data))
  }
  
      
  return (
  
    <div className="App">
       <Header/>
       <p className='help-tag'>Select a country by typing in or by using the drop down list or click on the map</p>
       <CountryDropdown
        type='drop-down'
        className='drop-down'
        value={currentCountry}
        onChange={(val) => dropDownCountrySet(val)}
       />
       <br/>
       <WorldMap 
        color="#1AFF1A" 
        backgroundColor='#BD9DDC'
        tooltipBgColor='#4B0092'
        tooltipTextColor='#1AFF1A'
        strokeOpacity='3'
        // title="Music Of The World" 
        size="responsive" 
        data={nationData}
        onClickFunction={mapCountrySet} 
       />
      <p>
        {artists && currentCountry && <CardDisplay  country={currentCountry}artists={artists}/>}
      </p>
    </div>
  );
}

export default App;
