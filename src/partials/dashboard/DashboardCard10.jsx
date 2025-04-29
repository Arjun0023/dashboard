import React, { useState } from 'react';

function DashboardCard10() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    // Generate escalated calls data
    const escalatedCalls = Array.from({ length: 25 }, (_, index) => ({
      id: index.toString(),
      agent: [
        'Sarah Miller',
        'James Rodriguez',
        'Emma Chen',
        'Michael Davis',
        'Priya Patel',
        'David Kim',
        'Rebecca Smith',
        'Carlos Gomez',
        'Lisa Johnson',
        'Raj Sharma',
        'Olivia Williams',
        'Thomas Brown',
        'Sophia Martinez',
        'Aiden Taylor',
        'Hannah Wilson',
        'Noah Garcia',
        'Ava Thompson',
        'Ethan Lee',
        'Isabella Wright',
        'Jacob Hall',
        'Mia Clark',
        'William Lewis',
        'Charlotte Young',
        'Benjamin Evans',
        'Amelia Adams'
      ][index],
      agentRating: [
        '3.2', '4.5', '2.8', '3.7', '4.2',
        '3.5', '2.6', '4.1', '3.9', '4.7',
        '3.4', '4.0', '2.9', '3.8', '4.4',
        '3.6', '2.7', '4.3', '3.0', '4.6',
        '3.3', '4.2', '2.5', '3.9', '4.8'
      ][index],
      customer: [
        'Anand Shatov',
        'Philip Harbach',
        'Mirko Fisuk',
        'Olga Semklo',
        'Burak Long',
        'Sarah Chen',
        'Mike Johnson',
        'Anna Kowalski',
        'James Smith',
        'Maria Garcia',
        'David Kim',
        'Emma Brown',
        'Lucas Silva',
        'Sophie Martin',
        'Tom Wilson',
        'Lisa Anderson',
        'Ryan Murphy',
        'Julia Lee',
        'Carlos Rodriguez',
        'Nina Patel',
        'Marco Rossi',
        'Yuki Tanaka',
        'Hans Weber',
        'Zoe Taylor',
        'Ali Hassan'
      ][index],
      location: [
        '🇺🇸 New York', '🇩🇪 Berlin', '🇫🇷 Paris', '🇮🇹 Rome', '🇬🇧 London',
        '🇨🇳 Beijing', '🇨🇦 Toronto', '🇵🇱 Warsaw', '🇺🇸 Chicago', '🇪🇸 Madrid',
        '🇰🇷 Seoul', '🇬🇧 Manchester', '🇧🇷 São Paulo', '🇫🇷 Lyon', '🇺🇸 Dallas',
        '🇨🇦 Vancouver', '🇮🇪 Dublin', '🇰🇷 Busan', '🇲🇽 Mexico City', '🇮🇳 Mumbai',
        '🇮🇹 Milan', '🇯🇵 Tokyo', '🇩🇪 Munich', '🇦🇺 Sydney', '🇦🇪 Dubai'
      ][index],
      keywords: [
        'refund delay, manager, frustrated',
        'broken product, warranty, angry',
        'rude service, compensation, escalate',
        'delivery issues, lost package, deadline',
        'billing error, double charge, urgent',
        'account blocked, verification, help',
        'wrong item, exchange, disappointed',
        'subscription issue, cancellation fee, unfair',
        'technical error, repeated problem, unresolved',
        'missing parts, incomplete, misleading',
        'long wait time, disconnected, callbacks',
        'policy violation, review, appeal',
        'website errors, checkout failed, assistance',
        'faulty product, safety concern, dangerous',
        'price discrepancy, advertised price, misleading',
        'promotional offer, not honored, discount',
        'shipping delay, notification, compensation',
        'login issues, reset password, locked out',
        'mobile app crash, data loss, fix',
        'premium member, special treatment, priority',
        'installation problems, technician, reschedule',
        'language barrier, translator, miscommunication',
        'account migration, data transfer, error',
        'gift card issue, balance, expiration',
        'return process, reimbursement, complicated'
      ][index],
      duration: [
        '24:32', '17:45', '36:18', '22:05', '19:47',
        '28:33', '15:22', '31:49', '26:11', '18:40',
        '33:27', '21:54', '16:38', '29:15', '23:42',
        '20:19', '34:56', '25:03', '17:30', '27:57',
        '22:24', '18:51', '30:08', '24:45', '21:12'
      ][index],
      severity: [
        'High', 'Medium', 'Critical', 'High', 'Medium',
        'Critical', 'Medium', 'High', 'Medium', 'Low',
        'Critical', 'Medium', 'High', 'Low', 'Medium',
        'High', 'Critical', 'Medium', 'High', 'Low',
        'Medium', 'High', 'Critical', 'Medium', 'Low'
      ][index],
    }));
  
    // Calculate pagination
    const totalPages = Math.ceil(escalatedCalls.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = escalatedCalls.slice(indexOfFirstItem, indexOfLastItem);
  
    // Handle page changes
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Function to get severity color
    const getSeverityColor = (severity) => {
      switch (severity) {
        case 'Critical':
          return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
        case 'High':
          return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
        case 'Medium':
          return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
        case 'Low':
          return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
        default:
          return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
      }
    };
  
    return (
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex justify-between items-center">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">Escalated Calls</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-medium text-red-500 dark:text-red-400">{escalatedCalls.length}</span> total escalations
          </div>
        </header>      
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Agent</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Customer</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Location</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Key Words</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Severity</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                {currentItems.map(call => (
                  <tr key={call.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
                          <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                            {call.agent.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                          <div>{call.agent}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Rating: {call.agentRating}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-gray-800 dark:text-gray-100">{call.customer}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{call.duration} call duration</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{call.location}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left text-gray-600 dark:text-gray-300 text-sm">
                        {call.keywords.split(', ').map((keyword, i) => (
                          <span key={i} className="inline-block px-2 py-1 m-1 rounded-full bg-gray-100 dark:bg-gray-700">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">
                        <span className={`inline-block px-2 py-1 rounded-full ${getSeverityColor(call.severity)}`}>
                          {call.severity}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === pageNumber
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                {pageNumber}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

export default DashboardCard10;