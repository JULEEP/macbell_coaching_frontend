import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ParentSidebar from './ParentSidebar'; // Assuming you have this component

const ParentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Component */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <ParentSidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Parent Dashboard</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          <div className="font-sans">
            <h1 className="text-center text-2xl font-bold mb-6">Parent Dashboard</h1>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Subject Card */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Subject</h2>
                <p className="text-sm mt-1">Total Subject</p>
                <p className="text-sm mt-1">10</p>
              </div>

              {/* Notice Card */}
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Notice</h2>
                <p className="text-sm mt-1">Total Notice</p>
                <p className="text-sm mt-1">0</p>
              </div>

              {/* Exam Card */}
              <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Exam</h2>
                <p className="text-sm mt-1">Total Exam</p>
                <p className="text-sm mt-1">30</p>
              </div>

              {/* Online Exam Card */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Online Exam</h2>
                <p className="text-sm mt-1">Total Online Exam</p>
                <p className="text-sm mt-1">10</p>
              </div>

              {/* Teachers Card */}
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Teachers</h2>
                <p className="text-sm mt-1">Total Teachers</p>
                <p className="text-sm mt-1">10</p>
              </div>

              {/* Issued Books Card */}
              <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Issued Books</h2>
                <p className="text-sm mt-1">Total Issued Books</p>
                <p className="text-sm mt-1">0</p>
              </div>

              {/* Pending Homework Card */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Pending Homework</h2>
                <p className="text-sm mt-1">Total Pending Homework</p>
                <p className="text-sm mt-1">10</p>
              </div>

              {/* Attendance Card */}
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Attendance</h2>
                <p className="text-sm mt-1">Total Attendance in Current Month</p>
                <p className="text-sm mt-1">8</p>
              </div>

              {/* Fees Card */}
              <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Fees</h2>
                <p className="text-sm mt-1">Total Due Fees</p>
                <p className="text-sm mt-1">$1017</p>
              </div>

              {/* Behaviour Points Card */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Behaviour Points</h2>
                <p className="text-sm mt-1">Student Behaviour Point</p>
                <p className="text-sm mt-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
