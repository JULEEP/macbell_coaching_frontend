import React from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildAttendance = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Title */}
        <h1 className="text-xl font-medium text-blue-500 mb-6">Attendance</h1>

        {/* Student Info Section */}
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          {/* Student Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Name</span>
              <span className="text-base text-gray-800">Anissa Harris</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Mobile</span>
              <span className="text-base text-gray-800">+88012345671</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Admission No</span>
              <span className="text-base text-gray-800">25083</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Category</span>
              <span className="text-base text-gray-800">Normal</span>
            </div>
          </div>
        </div>

        {/* Criteria Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <h2 className="text-sm font-medium text-gray-800 mb-4">Select Criteria</h2>

          {/* Dropdowns and Button */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Month</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500">
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">December</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Year</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500">
                <option value="">2024</option>
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-purple-500 text-white text-xs font-medium rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-400">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildAttendance;
