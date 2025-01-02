import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const DormitoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar and Menu Icon on Right Side */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-purple-500 bg-white rounded-md shadow-md focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div
        className={`flex-grow p-6 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
      >
        {/* Mobile View: Menu Icon, Divider, and Content */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 text-purple-500 focus:outline-none mb-4"
          >
          </button>
          <div className="border-t-2 border-gray-200 mb-4"></div> {/* Divider for mobile view */}
        </div>

        {/* Dormitory Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dormitory</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Dormitory Rooms List</h2>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Dormitory Rooms List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Dormitory</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Room Number</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Room Type</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">No. of Beds</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Cost Per Bed</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center text-sm text-gray-600">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 text-sm text-gray-600 text-center">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DormitoryPage;
