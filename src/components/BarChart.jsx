import React from 'react'
import ReactECharts from 'echarts-for-react';


function BarChart({data}) {
    const xData = data.map(item => item.x)
    const yData = data.map(item => item.y)
    console.log(data);        

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: xData,
          name: "Alcohol",
          nameLocation: "middle"
        },
        yAxis: {
          type: 'value',
          name: "Malic Acid",
          nameLocation: "middle"
        },
        series: [
          {
            data: yData,
            type: 'bar',
            // smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
    }
  return (
    <div>
        <ReactECharts option={options} style={{height: "400px", marginBottom: "20px", marginTop: "40px", width: "300px"}}/>

    </div>
  )
}

export default BarChart