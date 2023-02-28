import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import VideoGameTracker from '../VideoGameTracker/VideoGameTracker';

const VideoGamePage = ({}) => {
    const [videoGames, setVideoGames] = useState([]);

  async function fetchVideoGames(query){
    try{
      let response = await axios.get(`http://localhost:8080/all`);
      console.log(response.data)
      setVideoGames(response.data);
    } catch(error){
      console.log(error.response.data)
    }

  }
    return ( 
    <div>

        <Header/>
        <VideoGameTracker videoGames={videoGames}/>
       
      </div> 
      );
};
 
export default VideoGamePage;