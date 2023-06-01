import React from 'react'
import { Line } from 'react-chartjs-2';
const LineChartOne = ({company}) => {
 const data = {
        labels: ['', '', '', ''],
        datasets: [
          {
            label: company,
            data: [1,3 ,10 ,10],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
          },
        },
      };
    
    
      return <Line data={data} options={options} />;
}

export default LineChartOne