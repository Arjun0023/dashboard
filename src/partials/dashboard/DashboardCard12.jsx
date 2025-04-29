import React from 'react';

function DashboardCard12() {
  const disputesData = [
    {
      agent: 'Priya Sharma',
      customer: 'John Doe',
      keywords: 'Late delivery, wrong item',
      location: 'Mumbai',
    },
    {
      agent: 'Arjun Verma',
      customer: 'Jane Smith',
      keywords: 'Poor packaging, missing items',
      location: 'Bangalore',
    },
    {
      agent: 'Kriti Mehta',
      customer: 'Carlos Diaz',
      keywords: 'Rude behavior, late response',
      location: 'Delhi',
    },
    {
      agent: 'Rahul Nair',
      customer: 'Emily Chen',
      keywords: 'Overcharged, delay in refund',
      location: 'Hyderabad',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales Service Top Disputes</h2>
      </header>
      <div className="p-5 overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs font-semibold border-b dark:border-gray-600">
            <tr>
              <th className="p-3 text-left">Agent</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Key Words</th>
              <th className="p-3 text-left">Location</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-200">
            {disputesData.map((dispute, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                <td className="p-3">{dispute.agent}</td>
                <td className="p-3">{dispute.customer}</td>
                <td className="p-3">{dispute.keywords}</td>
                <td className="p-3">{dispute.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardCard12;
