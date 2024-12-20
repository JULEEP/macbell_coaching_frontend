import React from 'react';
import ParentSidebar from './ParentSidebar'; // Assuming you have this component

const ParentDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar Component without padding and background */}
      <div className="w-1/3">
        <ParentSidebar />
      </div>

      {/* Dashboard Content */}
      <div className="w-2/1 mr-6 mt-4">
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Parent Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Subject Card (Dark Blue) */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Subject</h2>
            <p className="text-sm mt-1">Total Subject</p>
            <p className="text-sm mt-1">10</p>
          </div>

          {/* Notice Card (Dark Purple) */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Notice</h2>
            <p className="text-sm mt-1">Total Notice</p>
            <p className="text-sm mt-1">0</p>
          </div>

          {/* Exam Card (Dark Pink) */}
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Exam</h2>
            <p className="text-sm mt-1">Total Exam</p>
            <p className="text-sm mt-1">30</p>
          </div>

          {/* Online Exam Card (Dark Blue) */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Online Exam</h2>
            <p className="text-sm mt-1">Total Online Exam</p>
            <p className="text-sm mt-1">10</p>
          </div>

          {/* Teachers Card (Dark Purple) */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Teachers</h2>
            <p className="text-sm mt-1">Total Teachers</p>
            <p className="text-sm mt-1">10</p>
          </div>

          {/* Issued Books Card (Dark Pink) */}
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Issued Books</h2>
            <p className="text-sm mt-1">Total Issued Books</p>
            <p className="text-sm mt-1">0</p>
          </div>

          {/* Pending Homework Card (Dark Blue) */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Pending Homework</h2>
            <p className="text-sm mt-1">Total Pending Homework</p>
            <p className="text-sm mt-1">10</p>
          </div>

          {/* Attendance Card (Dark Purple) */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Attendance</h2>
            <p className="text-sm mt-1">Total Attendance in Current Month</p>
            <p className="text-sm mt-1">8</p>
          </div>

          {/* Fees Card (Dark Pink) */}
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Fees</h2>
            <p className="text-sm mt-1">Total Due Fees</p>
            <p className="text-sm mt-1">$1017</p>
          </div>

          {/* Behaviour Points Card (Dark Blue) */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Behaviour Points</h2>
            <p className="text-sm mt-1">Student Behaviour Point</p>
            <p className="text-sm mt-1">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
