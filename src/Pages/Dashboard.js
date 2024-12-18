import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        {/* Navbar */}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Student Section (Light Blue) */}
          <div className="bg-blue-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Students</h2>
            <p className="text-gray-500">Total Students</p>
            <p className="text-2xl font-bold">0</p>
          </div>

          {/* Teacher Section (Black) */}
          <div className="bg-black text-white p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Teachers</h2>
            <p className="text-gray-300">Total Teachers</p>
            <p className="text-2xl font-bold">50</p>
          </div>

          {/* Parent Section (Light Red) */}
          <div className="bg-red-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Parents</h2>
            <p className="text-gray-500">Total Parents</p>
            <p className="text-2xl font-bold">0</p>
          </div>

          {/* Staff Section (Light Green) */}
          <div className="bg-green-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Staffs</h2>
            <p className="text-gray-500">Total Staffs</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Income, Expenses, and Graph */}
        <div className="bg-white p-6 shadow-md rounded-md mb-6">
          <h2 className="text-xl text-gray-500">Income and Expenses for Dec 2024</h2>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Total Income</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold">-0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Total Profit</p>
              <p className="text-2xl font-bold">$0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Wallet Balance</p>
              <p className="text-2xl font-bold">$0</p>
            </div>
          </div>

          {/* Income Graph */}
          {/* Placeholder for graph */}
          <div className="h-64 bg-gray-300 mt-4"></div>
        </div>

        {/* Notice Board Section */}
        <div className="bg-white p-6 shadow-md mt-28 rounded-md mb-6">
          <h2 className="text-xl text-gray-500">Notice Board</h2>

          {/* Button for adding new item */}
          <div className="flex justify-end mb-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              + ADD
            </button>
          </div>

          {/* Table with gray borders */}
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Date</th>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Title</th>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows with borders */}
              <tr>
                <td className="py-2 px-4 border border-gray-300">01-12-2024</td>
                <td className="py-2 px-4 border border-gray-300">Holiday Announcement</td>
                <td className="py-2 px-4 border border-gray-300">
                  <button className="text-blue-600">View</button>
                </td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
