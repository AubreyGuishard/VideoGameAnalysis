import React from 'react';

import { Chart } from "react-google-charts";





const VideoGameTracker = ({videoGames}) => {
  function generateDataFormChart(){

    let filteredGames = videoGames.filter(game => game.year > 2013);
    console.log('Filtered Games by Year' , filteredGames);

    let platforms = filteredGames.map(game => game.platform)

    console.log('Mapped Platforms', platforms);

    let distinctPlatforms = [...new Set(platforms)]
    console.log('Distinct Platforms', distinctPlatforms)

    console.log(videoGames);


     const data = [
      ["Platform", "Sales", { role: "style" }],
      ["Copper", 8.94, "silver"], 
      ["Silver", 10.49, "silver"], 
      ["Gold", 19.3, "silver"],
      ["Platinum", 21.45, "silver"], 
    ];
    return data;
  }
    return ( <Chart
        chartType="ColumnChart"
        data={generateDataFormChart()}
        width="100%"
        height="400px"
      /> );
}
 
export default VideoGameTracker;

