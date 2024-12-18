import React from 'react';

const RejectDepositTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Reject Deposit</h1>

      {/* Table Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left border-b">SL</th>
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Method</th>
              <th className="py-3 px-4 text-left border-b">Amount</th>
              <th className="py-3 px-4 text-left border-b">Status</th>
              <th className="py-3 px-4 text-left border-b">Note</th>
              <th className="py-3 px-4 text-left border-b">Reject Note</th>
              <th className="py-3 px-4 text-left border-b">File</th>
              <th className="py-3 px-4 text-left border-b">Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td colSpan="9" className="text-center text-gray-500 py-8">
                No Data Available In Table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
          Result: Showing 0 to 0 of 0 entries
        </div>
      </div>
    </div>
  );
};

export default RejectDepositTable;
