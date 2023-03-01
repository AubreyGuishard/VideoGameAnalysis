import React, { useState } from "react";

const SearchResults = ({ filteredVideoGames }) => {
  let gameRows = filteredVideoGames.map((game) => (
    <tr>
      <td>{game.name}</td>
      <td>{game.game_rank}</td>
      <td>{game.platform}</td>
      <td>{game.year}</td>
      <td>{game.genre}</td>
      <td>{game.publisher}</td>
      <button>button</button>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Platform</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>{gameRows}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
