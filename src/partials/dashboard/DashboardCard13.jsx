import React from 'react';

function DashboardCard13() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Service & Sales Dispute Summary</h2>
      </header>
      <div className="p-3">

        <div>
          <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Today’s Highlights
          </header>
          <ul className="my-1">

            {/* Heating Issue */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3 flex items-center justify-center text-white font-bold">H</div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Overheating complaints from SUV owners</div>
                  <div className="shrink-0 self-start ml-2 text-red-600 font-medium">+12 cases</div>
                </div>
              </div>
            </li>

            {/* Charging Issue */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-yellow-500 my-2 mr-3 flex items-center justify-center text-white font-bold">C</div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Slow charging reported in EV models</div>
                  <div className="shrink-0 self-start ml-2 text-yellow-600 font-medium">+8 cases</div>
                </div>
              </div>
            </li>

            {/* Braking Issue */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-orange-500 my-2 mr-3 flex items-center justify-center text-white font-bold">B</div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Brake pad failure in recent deliveries</div>
                  <div className="shrink-0 self-start ml-2 text-orange-600 font-medium">+5 cases</div>
                </div>
              </div>
            </li>

            {/* Loan Issue */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-blue-500 my-2 mr-3 flex items-center justify-center text-white font-bold">L</div>
              <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Loan approval delays with partner banks</div>
                  <div className="shrink-0 self-start ml-2 text-blue-600 font-medium">+6 issues</div>
                </div>
              </div>
            </li>

            {/* Warranty Issue */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-gray-500 my-2 mr-3 flex items-center justify-center text-white font-bold">W</div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">Unfulfilled warranty claims from last week</div>
                  <div className="shrink-0 self-start ml-2 text-gray-800 dark:text-gray-100 font-medium">+10 pending</div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
