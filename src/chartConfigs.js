const chartConfigs = {
  options: {
    responsive: false,
    legend: {
      display: false,
    },
    elements: {
      line: {
        borderColor: '#fff',
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
}
export default chartConfigs
