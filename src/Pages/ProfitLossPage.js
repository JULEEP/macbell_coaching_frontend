import React from 'react';
import Sidebar from './Sidebar';

const ProfitLossPage = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profit & Loss</h1>

      {/* Select Criteria Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Select Criteria</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value="12/10/2024 - 12/17/2024"
            className="w-64 px-3 py-2 border rounded-md text-gray-700"
            readOnly
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>

      {/* Profit & Loss Table Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Profit & Loss</h2>
        <table className="min-w-full border border-gray-200 text-sm">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
              <th className="py-2 px-4 text-left border-b">Time</th>
              <th className="py-2 px-4 text-left border-b">Income</th>
              <th className="py-2 px-4 text-left border-b">Expense</th>
              <th className="py-2 px-4 text-left border-b">Profit/Loss</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="text-gray-700">
              <td className="py-2 px-4 border-b">All</td>
              <td className="py-2 px-4 border-b">$ 619,309.00</td>
              <td className="py-2 px-4 border-b">$ 599,449.00</td>
              <td className="py-2 px-4 border-b">$ 19,860.00</td>
            </tr>
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="mt-4 text-gray-600 text-sm">
          Showing 1 to 1 of 1 entries
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfitLossPage;
