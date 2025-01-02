import React, { useState } from "react";
import StudentSidebar from "../Sidebar";
import { FaBars } from "react-icons/fa";

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64 z-50 md:translate-x-0`}
      >
        <StudentSidebar />
      </div>

      {/* Overlay for Sidebar on Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Icon */}
        <div className="p-4 bg-white shadow-md flex items-center justify-between md:hidden">
          <h1 className="text-lg font-bold text-gray-800">
            Student Dashboard
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-purple-800 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* Page Title */}
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Welcome To Student Dashboard
          </h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Subject Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Subject
              </h2>
              <p className="text-sm text-gray-500">Total Subject</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Notice Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Notice
              </h2>
              <p className="text-sm text-gray-500">Total Notice</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Exam Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Exam
              </h2>
              <p className="text-sm text-gray-500">Total Exam</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Online Exam Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Online Exam
              </h2>
              <p className="text-sm text-gray-500">Total Online Exam</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Teachers Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Teachers
              </h2>
              <p className="text-sm text-gray-500">Total Teachers</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Issued Books Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Issued Book
              </h2>
              <p className="text-sm text-gray-500">Total Issued Book</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Pending Homework Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Pending Homework
              </h2>
              <p className="text-sm text-gray-500">Total Pending Homework</p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>

            {/* Attendance Block */}
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                Attendance In Current Month
              </h2>
              <p className="text-sm text-gray-500">
                Total Attendance In Current Month
              </p>
              <p className="text-lg sm:text-xl font-bold text-purple-500">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
