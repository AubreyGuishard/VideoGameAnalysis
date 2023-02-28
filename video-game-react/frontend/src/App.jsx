import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import VideoGameTracker from './Components/VideoGameTracker/VideoGameTracker';
import axios from "axios";

function App() {

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideogames();
  }, []);

  async function getVideogames(){
    try{
      const response = await axios.get('http://localhost:8080/all');
      setVideoGames(response.data);
    } catch(exception){
      console.log(`EROR in getVideoGames EXCEPTION: ${exception}`)
    }

  }
  return (
    <div >

      <Header/>
      <SearchBar/>
      <VideoGameTracker videoGames={videoGames}/>
    </div>
  
  );
}

export default App;
