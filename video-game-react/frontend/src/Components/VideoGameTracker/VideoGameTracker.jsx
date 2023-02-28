import React from 'react';

import { Chart } from "react-google-charts";

const VideoGameTracker = () => {
    return ( <Chart
        chartType="ColumnChart"
        data={[["XBOX", "PS", "PC"], [4, 5.5], [8, 12]]}
        width="100%"
        height="400px"
        legendToggle
      /> );
}
 
export default VideoGameTracker;

