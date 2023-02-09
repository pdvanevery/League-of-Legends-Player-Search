import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("")
  const [playerData, setPlayerData] = useState("")
  const API_KEY = "RGAPI-365eabee-02ad-4981-a441-98b701be3fee"
 
  function searchForPlayer(event) {
    //set up the correct API call
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ searchText + "?api_key=" + API_KEY

    //handle the API call
    axios.get(APICallString).then(function (response) {
      //Success
      setPlayerData(response.data)
    }).catch(function (error) {
      //Error
      console.log(error)
    })
  }

  console.log(playerData)

  return (
    <div className="App">
      <div className="container">
        <h2> League of Legends Player Search</h2>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search for Player</button>
      </div>
      {JSON.stringify(playerData) !== '{}' ? 
      <>
      <p>{playerData.name}</p>
      <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/" + playerData.profileIconId + ".png"} alt="summoner profile pic"></img>
      <p>Summoner Level {playerData.summonerLevel}</p>
      </> 
      :
      <><p>No PLAYER DATA</p></>
      }
    </div>
  );
}

export default App;
