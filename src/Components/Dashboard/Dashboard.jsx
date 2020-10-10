import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import chartData from './chartsData'

class Dashboard extends Component {
  
  state = { }
  
  render() { 

    const chart1_data = {
      labels: ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Messages sent',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: chartData.messages_sent
        },
        {
          label: 'Amount Recivied',
          backgroundColor: 'rgba(152, 235, 175)',
          borderColor: 'rgba(167, 219, 181)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(169, 235, 187)',
          hoverBorderColor: 'rgba(167, 219, 181)',
          data: chartData.messages_received
        },
        {
          label: 'Amount Failed',
          backgroundColor: 'rgba(143, 171, 242)',
          borderColor: 'rgba(159, 178, 224)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(135, 165, 237)',
          hoverBorderColor: 'rgba(159, 178, 224)',
          data: chartData.messages_failed
        }
      ]
    };

    const chart2_data = {
      labels: ['Monday', 'Tuesday', 'Wensday'],
      datasets: [
        {
          label: 'Messages sent',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: chartData.calls_sent
        },
        {
          label: 'Amount Recivied',
          backgroundColor: 'rgba(152, 235, 175)',
          borderColor: 'rgba(167, 219, 181)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(169, 235, 187)',
          hoverBorderColor: 'rgba(167, 219, 181)',
          data: chartData.calls_received
        },
      ]
    };

    return ( 
      <div className="dashboard-container">
        <h2 className="mt-4 ml-2">Chart 1</h2>
          <Bar
            data={chart1_data}
            width={100}
            height={30}
            
          />
          
          <h2 className="mt-4 ml-2">Chart 2</h2>
          <Bar
            data={chart2_data}
            width={100}
            height={30}
          />
      </div>
     );
  }
}
 
export default Dashboard;