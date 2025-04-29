import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Escalation Reasons'],
    datasets: [
      {
        label: 'Delivery Delays & Shipping Issues',
        data: [131],
        backgroundColor: 'rgb(220, 38, 38)', // red-600
        hoverBackgroundColor: 'rgb(185, 28, 28)', // red-700
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Billing Errors & Payment Disputes',
        data: [115],
        backgroundColor: 'rgb(245, 158, 11)', // amber-500
        hoverBackgroundColor: 'rgb(217, 119, 6)', // amber-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Product Quality & Defects',
        data: [92],
        backgroundColor: 'rgb(139, 92, 246)', // violet-500
        hoverBackgroundColor: 'rgb(124, 58, 237)', // violet-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Customer Service Experience',
        data: [78],
        backgroundColor: 'rgb(16, 185, 129)', // green-500
        hoverBackgroundColor: 'rgb(5, 150, 105)', // green-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Return & Refund Process',
        data: [64],
        backgroundColor: 'rgb(59, 130, 246)', // blue-500
        hoverBackgroundColor: 'rgb(37, 99, 235)', // blue-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Website & App Technical Issues',
        data: [89],
        backgroundColor: 'rgb(236, 72, 153)', // pink-500
        hoverBackgroundColor: 'rgb(219, 39, 119)', // pink-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Product Information Discrepancies',
        data: [57],
        backgroundColor: 'rgb(168, 85, 247)', // purple-500
        hoverBackgroundColor: 'rgb(147, 51, 234)', // purple-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Account Access & Security',
        data: [83],
        backgroundColor: 'rgb(234, 88, 12)', // orange-500
        hoverBackgroundColor: 'rgb(194, 65, 12)', // orange-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Warranty & After-Sales Support',
        data: [72],
        backgroundColor: 'rgb(14, 165, 233)', // sky-500
        hoverBackgroundColor: 'rgb(2, 132, 199)', // sky-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Pricing & Promotion Disputes',
        data: [68],
        backgroundColor: 'rgb(20, 184, 166)', // teal-500
        hoverBackgroundColor: 'rgb(13, 148, 136)', // teal-600
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Communication Issues',
        data: [61],
        backgroundColor: 'rgb(101, 163, 13)', // lime-600
        hoverBackgroundColor: 'rgb(77, 124, 15)', // lime-700
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other Issues',
        data: [43],
        backgroundColor: 'rgb(156, 163, 175)', // gray-400
        hoverBackgroundColor: 'rgb(107, 114, 128)', // gray-500
        barPercentage: 1,
        categoryPercentage: 1,
      }
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Escalated Issues</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">449</div>
          <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-22%</div>
        </div>
      </div>      
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard11;
