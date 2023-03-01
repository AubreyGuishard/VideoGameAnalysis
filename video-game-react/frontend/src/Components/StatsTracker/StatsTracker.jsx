import React, { useState } from 'react';
import { Chart } from "react-google-charts";


//WHAT GAMES SELL THE MOST GLOBALLY

// WHAT DO WE WANT TO DO: we want to get the sales for each country and then display them on the pie chart



// our question : we are having trouble trying to access specific regional sales for our chart

// we know we have to filter through the sales and then probably map through them we are having trouble connecting that logic 
const StatsTracker= ({filteredVideoGames}) => {

function generateSalesForm (){
    let northAmericaSales= filteredVideoGames.filter(game => game.northamericasales)
    console.log('NA SALES', northAmericaSales)

  

    
}

    const data = [
        ["Task", "Hours per Day"],
        ["North America Sales", 11],
        ["European Sales", 2],
        ["Japanese Sales", 2],
        ["Other Sales", 2],
      ];
      
       const options = {
        title: "GLOBAL SALES FOR EACH COUNTRY",
        is3D: true,
      };
      return( 
        <Chart
      chartType="PieChart"
      data={generateSalesForm()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      );
      
}
 
export default StatsTracker ;