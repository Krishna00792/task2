import React from 'react';
import { Bar } from 'react-chartjs-2';
const WHOneLBChart = ({barChart,lineChart}) => {
    const data = {
        labels: ['', '', '', '', '','', '', '', ''],
        datasets: [
          {
            label: 'Bar Chart',
            data: barChart,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Line Chart',
            data: lineChart,
            fill: false,
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 1,
            type: 'line',
          },
        ],
      };
    
      const options = {
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //     max: 35,
        //   },
        // },
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false, // Adjusts the chart height based on container size
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            min: 0, // Adjust the minimum value of the y-axis
            max: 30, // Adjust the maximum value of the y-axis
          },
        },
      };
    
      return <Bar data={data} options={options} />;
}

export default WHOneLBChart


