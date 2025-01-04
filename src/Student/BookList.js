import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const StudentBookListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

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
          <h1 className="text-lg font-bold">Book List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title */}

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">All Books</h2>

          {/* Book List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Book Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Book No</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ISBN No</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Subject</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Publisher Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Author Name</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center text-sm text-gray-600">
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

export default StudentBookListPage;
