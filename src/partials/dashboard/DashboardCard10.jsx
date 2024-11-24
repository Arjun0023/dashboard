import React, { useState } from 'react';

function DashboardCard10() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Generate more dummy data using the same 5 images cyclically
  const customers = Array.from({ length: 25 }, (_, index) => ({
    id: index.toString(),
    image: `Image0${(index % 5) + 1}`,
    name: [
      'Alex Shatov',
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
    email: [
      'alexshatov@gmail.com',
      'philip.h@gmail.com',
      'mirkofisuk@gmail.com',
      'olga.s@cool.design',
      'longburak@gmail.com',
      'sarah.c@company.co',
      'mike.j@email.com',
      'anna.k@design.pl',
      'james.s@mail.com',
      'maria.g@email.es',
      'david.k@mail.kr',
      'emma.b@company.uk',
      'lucas.s@email.br',
      'sophie.m@design.fr',
      'tom.w@mail.com',
      'lisa.a@company.ca',
      'ryan.m@email.ie',
      'julia.l@design.kr',
      'carlos.r@mail.mx',
      'nina.p@company.in',
      'marco.r@email.it',
      'yuki.t@mail.jp',
      'hans.w@company.de',
      'zoe.t@design.au',
      'ali.h@mail.ae'
    ][index],
    location: [
      '🇺🇸', '🇩🇪', '🇫🇷', '🇮🇹', '🇬🇧',
      '🇨🇳', '🇨🇦', '🇵🇱', '🇺🇸', '🇪🇸',
      '🇰🇷', '🇬🇧', '🇧🇷', '🇫🇷', '🇺🇸',
      '🇨🇦', '🇮🇪', '🇰🇷', '🇲🇽', '🇮🇳',
      '🇮🇹', '🇯🇵', '🇩🇪', '🇦🇺', '🇦🇪'
    ][index],
    spent: [
      '$2,890.66', '$2,767.04', '$2,996.00', '$1,220.66', '$1,890.66',
      '$3,120.50', '$2,340.80', '$1,950.25', '$2,780.40', '$3,450.90',
      '$2,670.30', '$1,890.75', '$2,340.60', '$3,120.80', '$2,450.30',
      '$1,780.90', '$2,890.40', '$3,240.50', '$2,670.80', '$1,990.25',
      '$2,450.60', '$3,120.90', '$2,780.30', '$1,890.40', '$2,670.50'
    ][index],
  }));

  // Calculate pagination
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Customers</h2>
      </header>      
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Country</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {currentItems.map(customer => (
                <tr key={customer.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img 
                          className="rounded-full" 
                          src={`/api/placeholder/40/40`}
                          width="40" 
                          height="40" 
                          alt={customer.name} 
                        />
                      </div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">{customer.name}</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{customer.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">{customer.spent}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">{customer.location}</div>
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