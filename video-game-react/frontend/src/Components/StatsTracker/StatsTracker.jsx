import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

//WHAT GAMES SELL THE MOST GLOBALLY

// WHAT DO WE WANT TO DO: we want to get the sales for each country and then display them on the pie chart

// our question : we are having trouble trying to access specific regional sales for our chart

const StatsTracker = ({ filteredVideoGames }) => {










  function generateSalesForm() {
    let northAmericaSales = 0;
    let europeSales = 0;
    let japanSales = 0;
    let otherSales = 0;



    filteredVideoGames.forEach((game) => {
      northAmericaSales += game.northamericasales;
      europeSales += game.europesales;
      japanSales += game.japansales;
      otherSales += game.othersales;
    });


    const data = [
        ["Task", "Hours per Day"],
        ["North America Sales", northAmericaSales],
        ["European Sales", europeSales],
        ["Japanese Sales", japanSales],
        ["Other Sales", otherSales],
      ];
      return data;
  }









  useEffect(()=> {
    generateSalesForm()
  },[filteredVideoGames])

  

  const options = {
    title: "SALES FOR EACH COUNTRY",
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={generateSalesForm()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default StatsTracker;
