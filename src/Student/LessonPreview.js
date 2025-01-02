import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const LessonPlanOverviewStudent = () => {
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

        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Lesson Plan Overview</h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Nine (A)</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Lesson</th>
                  <th className="px-4 py-2 text-left text-gray-400">Topic</th>
                  <th className="px-4 py-2 text-left text-gray-400">Sub Topic</th>
                  <th className="px-4 py-2 text-left text-gray-400">Completed Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Upcoming Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* No data row */}
                <tr>
                  <td className="px-4 py-2 text-center text-gray-600" colSpan="6">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing 0 to 0 of 0 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanOverviewStudent;
