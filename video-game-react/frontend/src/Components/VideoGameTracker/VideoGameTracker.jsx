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

    let platformArrays = distinctPlatforms.map(platform =>{ 
      let allGamesforPlatform = filteredGames.filter(game => game.platform == platform)
      let totalSales = 0
      allGamesforPlatform.map(game => {
        totalSales += game.globalsales
      })
        console.log('global' ,totalSales);
      //now we need to loop through allGamesforPlatform and sum games global sales
      //once we have the sum of all those games global sales use variable created instead of hard coded '10'
      return [platform, totalSales,'silver']
    });
    console.log('Platform Arrays', platformArrays)

    console.log(videoGames);


     const data = [
      ["Platform", "Sales", { role: "style" }],
      ...platformArrays
    ];
    console.log(data)
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

