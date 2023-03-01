import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import VideoGameTracker from '../VideoGameTracker/VideoGameTracker';

const VideoGamePage = ({games}) => {
    const [videoGames, setVideoGames] = useState([]);
     
     const[filteredVideoGames, setFilteredVideoGames] = useState(games)

     useEffect(()=> {
        setFilteredVideoGames(videoGames)
     },[games])

    


    return ( 
    <div>

        <Header/>

       
      </div> 
      );
};
 
export default VideoGamePage;