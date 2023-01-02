import React from 'react'
import BarChart from '../components/BarChart'
import ScatterPlot from '../components/ScatterPlot'
import WineData from "../constants/Wine-Data.json"
import { findAverage } from '../helper/utility'

function HomePage() {
    // Getting X and Y axis data for both charts
    const scatterPlotData = WineData.map((data) => ({'x': data['Color intensity'], 'y': data['Hue']}))
    const alcoholData = WineData.map((data) => ({'x': data['Alcohol'], 'y': data['Malic Acid']}))
    const alcoholAvgData = findAverage(alcoholData, 'y', 'x');
    const barChartData = Object.entries(alcoholAvgData).map(data => ({'x': data[0], 'y': data[1]}))
  return (
    <div>
        <h1>Plots using ECharts</h1>
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        <ScatterPlot data={scatterPlotData}/>
        <BarChart data={barChartData}/>
        </div>
    </div>
  )
}

export default HomePage