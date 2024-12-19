import React from 'react';
import Sidebar from './Sidebar';

const AssignmentList = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      <h1 className="text-2xl font-bold text-gray-800 mb-6">Assignment List</h1>

      {/* Quick Search */}
      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="search" className="text-gray-600 text-sm">Quick Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Search by title or type..."
          className="border border-gray-300 rounded-md p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Content Title</th>
              <th className="text-left px-4 py-2">Type</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Available for</th>
              <th className="text-left px-4 py-2">Class (Section)</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2">Math Homework</td>
              <td className="px-4 py-2">Document</td>
              <td className="px-4 py-2">2024-12-15</td>
              <td className="px-4 py-2">Student</td>
              <td className="px-4 py-2">Class A (Section B)</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">View</td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AssignmentList;
