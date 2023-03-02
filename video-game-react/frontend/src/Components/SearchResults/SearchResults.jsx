import React, { useState } from "react";
// import './SearchResults.css';
import Table from 'react-bootstrap/Table'
const SearchResults = ({ filteredVideoGames }) => {
//   const [example, setExample] = useState(false)
  let gameRows = filteredVideoGames.map((game) => (
    <tr>
      <td>{game.name}</td>
      <td>{game.game_rank}</td>
      <td>{game.platform}</td>
      <td>{game.year}</td>
      <td>{game.genre}</td>
      <td>{game.publisher}</td>
      {/* <button>button</button> */}
    </tr>
  ));
  return (
    <div>

      {/*Ternary operator {example ? <div>this is true</div> : <div>this is false</div>}
      <button onClick={()=>setExample(!example)}>clcick to flip</button> */}
      {filteredVideoGames.length > 0  ?
      <Table variant="dark" hover>
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
      </Table>
      : null
      }
    </div>
  );
};

export default SearchResults;
