import React from 'react';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import DoughnutChart from '../components/DoughnutChart';

const Home: React.FC = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [15000, 20000, 30000, 50000, 25000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 15000, 20000, 30000, 40000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Color Distribution',
        data: [300, 50, 100, 200, 400],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Doughnut Distribution',
        data: [100, 200, 300, 400, 500],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Data Visualization with Chart.js</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <BarChart data={barData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <LineChart data={lineData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <PieChart data={pieData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <DoughnutChart data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
