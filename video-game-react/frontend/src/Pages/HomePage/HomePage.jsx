import { useEffect, useState } from "react";


import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoGameTracker from "./Components/VideoGameTracker/VideoGameTracker";
import axios from "axios";
import SearchResults from "./Components/SearchResults/SearchResults";
import StatsTracker from "./Components/StatsTracker/StatsTracker";

function HomePage() {
  const [videoGames, setVideoGames] = useState([]);
  const [filteredVideoGames, setFilteredVideoGames] = useState([]);

  useEffect(() => {
    getVideogames();
  }, []);

  async function getVideogames() {
    try {
      const response = await axios.get("http://localhost:8080/all");
      setVideoGames(response.data);
    } catch (exception) {
      console.log(`EROR in getVideoGames EXCEPTION: ${exception}`);
    }
  }

  const handleSearch = (searchKeyword) => {
    const newFilteredGames = videoGames.filter((game) =>
      game.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredVideoGames(newFilteredGames);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">

        </div>
      </div>
      <Header />
      <VideoGameTracker videoGames={videoGames} />
      <StatsTracker filteredVideoGames={filteredVideoGames}/>
      <SearchBar onSubmit={handleSearch} /> 
      <SearchResults filteredVideoGames={filteredVideoGames}/>


    </div>
  );
}

export default HomePage;