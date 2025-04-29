import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Customer Disputes</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Dispute Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Volume</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Impact Score</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Avg Resolution Time</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Resolution Rate</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#DC2626" cx="18" cy="18" r="18" />
                      <path
                        d="M25 12L11 26M11 12L25 26"
                        stroke="#FFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100">Delivery Delays</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">428</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">High</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.4 days</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-amber-500">76%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#F59E0B" cx="18" cy="18" r="18" />
                      <path
                        d="M18 10v10M18 24v2"
                        stroke="#FFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100">Billing Issues</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">365</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">High</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.7 days</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">89%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#8B5CF6" cx="18" cy="18" r="18" />
                      <path
                        d="M12 18L16 22L24 14"
                        stroke="#FFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100">Product Quality</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">302</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-amber-500">Medium</div>
                </td>
                <td className="p-2">
                  <div className="text-center">4.2 days</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-amber-500">72%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#10B981" cx="18" cy="18" r="18" />
                      <path
                        d="M12 18.5C12 15.46 14.46 13 17.5 13C20.54 13 23 15.46 23 18.5C23 21.54 20.54 24 17.5 24H12V18.5Z"
                        fill="#FFF"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100">Customer Service</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-amber-500">Medium</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.8 days</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">92%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#3B82F6" cx="18" cy="18" r="18" />
                      <path
                        d="M18 10V18L23 23"
                        stroke="#FFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100">Return Process</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">189</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Low</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.4 days</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">95%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
