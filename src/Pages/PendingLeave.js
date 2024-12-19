import React, { useState } from 'react';
import Sidebar from './Sidebar';

const PendingLeaveRequestPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Placeholder data (You can replace this with actual data)
  const leaveRequests = [
    {
      id: 1,
      name: 'John Doe',
      type: 'Sick Leave',
      from: '12/12/2024',
      to: '12/14/2024',
      applyDate: '12/10/2024',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Jane Smith',
      type: 'Annual Leave',
      from: '12/20/2024',
      to: '12/25/2024',
      applyDate: '12/15/2024',
      status: 'Approved',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      type: 'Casual Leave',
      from: '12/17/2024',
      to: '12/18/2024',
      applyDate: '12/12/2024',
      status: 'Pending',
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLeaveRequests = leaveRequests.filter(
    (request) =>
      request.status === 'Pending' &&
      (request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Pending Leave Request</h1>

      {/* Quick Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Quick Search</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by Name or Type"
            className="w-1/3 border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      {/* Leave Request List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Pending Leave Request List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Si No</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Type</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">From</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">To</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Apply Date</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaveRequests.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-gray-500 py-4">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                filteredLeaveRequests.map((request, index) => (
                  <tr key={request.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.type}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.from}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.to}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.applyDate}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{request.status}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {/* Action buttons */}
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="mt-4 text-sm text-gray-500">
          Showing {filteredLeaveRequests.length} to {filteredLeaveRequests.length} of{' '}
          {filteredLeaveRequests.length} entries
        </div>
      </div>
    </div>
    </div>
  );
};

export default PendingLeaveRequestPage;
