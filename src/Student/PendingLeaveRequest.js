import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const PendingLeaveRequest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Pending Leave Request</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title */}

        {/* Pending Leave Request List */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Pending Leave Request List</h2>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">From</th>
                  <th className="py-3 px-4">To</th>
                  <th className="py-3 px-4">Apply Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* No Data Row */}
                <tr>
                  <td className="py-3 px-4 text-center text-gray-600 font-medium" colSpan="6">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer Section */}
            <div className="mt-4 text-sm text-gray-600">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingLeaveRequest;
