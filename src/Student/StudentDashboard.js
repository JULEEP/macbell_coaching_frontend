import React from "react";
import StudentSidebar from '../Sidebar';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Page Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Welcome To Student Dashboard
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Subject Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Subject</h2>
            <p className="text-sm text-gray-500">Total Subject</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Notice Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Notice</h2>
            <p className="text-sm text-gray-500">Total Notice</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Exam Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Exam</h2>
            <p className="text-sm text-gray-500">Total Exam</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Online Exam Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Online Exam</h2>
            <p className="text-sm text-gray-500">Total Online Exam</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Teachers Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Teachers</h2>
            <p className="text-sm text-gray-500">Total Teachers</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Issued Books Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Issued Book</h2>
            <p className="text-sm text-gray-500">Total Issued Book</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Pending Homework Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Pending Homework</h2>
            <p className="text-sm text-gray-500">Total Pending Homework</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>

          {/* Attendance Block */}
          <div className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Attendance In Current Month</h2>
            <p className="text-sm text-gray-500">Total Attendance In Current Month</p>
            <p className="text-xl font-bold text-purple-500">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
