import './App.css';
import Header from './Header/Header.js'
import countryData from './countryData';
import { fetchTopArtists } from './apiCalls'
import { useEffect, useState, useRef } from 'react';
import CardDisplay from './CardDisplay/CardDisplay.js'
import ArtistDisplay from './ArtistDisplay/ArtistDisplay';
const { getCode, getName } = require('country-list')
const WorldMap = require('react-svg-worldmap').WorldMap;
const { CountryDropdown, RegionDropdown, CountryRegionData } = require('react-country-region-selector') 

function App() {

    const [artists, setTopArtists] = useState()
    const [currentCountry, setCurrentCountry] = useState()
    const [currentArtistID, setCurrentArtistID] = useState()
    const [favoriteArtists, setFavoriteArtists] = useState([])
    const nationData = countryData
    // const inputRef = useRef()

    // useEffect(() => {
    //   inputRef.current.focus()
    // },[])

    const mapCountrySet = (event, countryName, isoCode, value, prefix, suffix) => {
      setCurrentCountry(countryName)
      fetchTopArtists(isoCode)
      .then(data => setTopArtists(data))
      .then(() => setCurrentArtistID())
  };

    const dropDownCountrySet = (countryName) => {
      setCurrentCountry(countryName)
      fetchTopArtists(getCode(countryName))
      .then(data => setTopArtists(data))
      .then(() => setCurrentArtistID())
    }
  
      
  return (
  
    <div className="App">
       <Header/>
       <p className='help-tag'>Select a country by typing or by using the drop down list or click on the map</p>
       <CountryDropdown
        type='drop-down'
        className='drop-down'
        value={currentCountry}
        onChange={(val) => dropDownCountrySet(val)}
        // ref={inputRef}
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
        {artists && currentCountry && !currentArtistID && 
        <CardDisplay  
        country={currentCountry} 
        artists={artists}
        setTopArtists={setTopArtists}
        setCurrentArtistID={setCurrentArtistID}
        setCurrentCountry={setCurrentCountry}
        />}
        { !artists  && currentArtistID && !currentCountry &&
        <ArtistDisplay 
         artistID={currentArtistID}
         setFavoriteArtists={setFavoriteArtists}
         favoriteArtists={favoriteArtists}
        />}
      </p>
    </div>
  );
}

export default App;
