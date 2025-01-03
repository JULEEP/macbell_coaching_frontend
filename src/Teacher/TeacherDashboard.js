import React, { useState } from "react";
import {
  FaUserGraduate,
  FaTasks,
  FaClipboardList,
  FaPlaneDeparture,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import TeacherSidebar from "./TeacherSidebar";

const TeacherDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <TeacherSidebar />
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
          <h1 className="text-lg font-bold">Teacher Dashboard</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          {/* Page Title */}
          <h1 className="text-xl font-bold text-purple-700 mb-6 hidden lg:block">
            Teacher Dashboard
          </h1>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Total Students */}
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 max-w-[90%] mx-auto">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaUserGraduate className="text-3xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
                <p className="text-2xl font-bold text-gray-800">120</p>
              </div>
            </div>

            {/* Total Homework */}
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 max-w-[90%] mx-auto">
              <div className="bg-green-100 text-green-500 p-3 rounded-full">
                <FaTasks className="text-3xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Homework</h2>
                <p className="text-2xl font-bold text-gray-800">45</p>
              </div>
            </div>

            {/* Total Attendance */}
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 max-w-[90%] mx-auto">
              <div className="bg-yellow-100 text-yellow-500 p-3 rounded-full">
                <FaClipboardList className="text-3xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Attendance</h2>
                <p className="text-2xl font-bold text-gray-800">98%</p>
              </div>
            </div>

            {/* Total Leave */}
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 max-w-[90%] mx-auto">
              <div className="bg-red-100 text-red-500 p-3 rounded-full">
                <FaPlaneDeparture className="text-3xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Total Leave</h2>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
