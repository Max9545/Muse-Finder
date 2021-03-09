import './App.css';
import Header from './Header/Header.js'
import countryData from './countryData';
import { fetchTopArtists } from './apiCalls'
import { useEffect, useState, useRef } from 'react';
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CardDisplay from './CardDisplay/CardDisplay.js'
import ArtistDisplay from './ArtistDisplay/ArtistDisplay';
import { getCode, getName } from 'country-list'
import { WorldMap } from 'react-svg-worldmap'
import { CountryDropdown } from'react-country-region-selector'

function App() {

    const [topArtists, setTopArtists] = useState()
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
       <label className='help-tag'>Select a country by typing or by using the drop down list or click on the map
       <CountryDropdown
        type='drop-down'
        className='drop-down'
        value={currentCountry}
        onChange={(val) => dropDownCountrySet(val)}
        defaultOptionLabel='Country'
        // ref={inputRef}
       />
       </label>
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
        {topArtists && currentCountry && !currentArtistID && 
        <CardDisplay  
          country={currentCountry} 
          topArtists={topArtists}
          setTopArtists={setTopArtists}
          setCurrentArtistID={setCurrentArtistID}
          setCurrentCountry={setCurrentCountry}
        />}
        { !topArtists  && !currentCountry && currentArtistID && 
        <Route
          path='/:currentArtistID'
          render={({ match }) => {
          console.log(match)
          return <ArtistDisplay 
                    artistID={match.params.currentArtistID}
                    setFavoriteArtists={setFavoriteArtists}
                    favoriteArtists={favoriteArtists}
        />
          }}
        />}
      </p>
    </div>
  );
}

export default App;

// { !topArtists  && !currentCountry && currentArtistID &&
//   <ArtistDisplay 
//     artistID={currentArtistID}
//     setFavoriteArtists={setFavoriteArtists}
//     favoriteArtists={favoriteArtists}
//   />}

