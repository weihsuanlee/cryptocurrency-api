import React, { useEffect, useRef, useState } from 'react'
import Chartjs from 'chart.js'
import './Sparkline.scss'

function Sparkline(props) {
  const { data } = props
  const [sparklineData, setSparkLineData] = useState([])
  const chartRef = useRef()
  const labelItem = (num) => {
    let label = []
    for (let i = 1; i < num + 1; i++) {
      label.push('' + i)
    }
    return label
  }
  const upward = data[data.length - 1] - data[0] > 0

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          labels: labelItem(data.length),
          datasets: [{ data: data }],
        },
        options: {
          responsive: false,
          legend: {
            display: false,
          },
          elements: {
            line: {
              borderColor: upward ? '#e15241' : '#23AF7D',
              backgroundColor: 'transparent',
              borderWidth: 1,
            },
            point: {
              radius: 0,
            },
          },
          tooltips: {
            enabled: false,
          },
          scales: {
            yAxes: [
              {
                display: false,
              },
            ],
            xAxes: [
              {
                display: false,
              },
            ],
          },
        },
      })
    }
    setSparkLineData(data)
  }, [])
  return (
    <div className="sparkline">
      <canvas ref={chartRef} width="135" height="50"></canvas>
    </div>
  )
}

export default Sparkline
