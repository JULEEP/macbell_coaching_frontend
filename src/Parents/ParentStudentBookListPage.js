import React, { useState } from "react";
import ParentSidebar from "./ParentSidebar";
import { FaBars, FaTimes } from 'react-icons/fa';

const ParentStudentBookListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <ParentSidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Book List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Book List Title */}

        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-xs font-medium text-blue-500 mb-4">All Books</h2>

          {/* Book List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Book Title</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Book No</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">ISBN No</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Category</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Subject</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Publisher Name</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Author Name</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center text-xs text-gray-600">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 text-xs text-gray-600 text-center">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentStudentBookListPage;
