import React from 'react'
import ReactECharts from 'echarts-for-react';

function ScatterPlot({data}) {
    const xData = data.map(item => item.x)
    const yData = data.map(item => item.y)

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'value',
          data: xData,
          name: "Color Intensity",
          nameLocation: "middle"
        },
        yAxis: {
          type: 'value',
          name: "Hue",
          nameLocation: "middle"
        },
        series: [
          {
            data: yData,
            type: 'scatter',
            // smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
    }
  return (
    <div>
        <ReactECharts option={options} style={{height: "400px", marginBottom: "20px", width: "300px", marginTop: "40px"}}/>
    </div>
  )
}

export default ScatterPlot