import React from 'react'
import { Bar } from 'react-chartjs-2';
const BuySellChart = ({buy,sell}) => {
    const data = {
        labels: ['', '', ''],
        datasets: [
          {
            label: 'Qty|Orders    Buy',
            data: buy,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Sell       Qty|Orders',
            data: sell, // Negative values for "Sell" to display on the left side of the chart
            backgroundColor: 'rgba(192, 75, 75, 0.2)',
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      };
    
      return <Bar data={data} options={options} />;
}

export default BuySellChart