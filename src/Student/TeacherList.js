import React from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const TeachersList = () => {
  const teachers = [
    "Mr. John Doe",
    "Ms. Jane Smith",
    "Dr. Emily Clark",
    "Prof. James Turner",
    "Mr. Alan Johnson",
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Teachers List Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Teachers List</h1>

        {/* Nine (A) Subtitle */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Teacher Names List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Teacher Names</h3>

          {/* List of Teacher Names */}
          <ul className="space-y-4">
            {teachers.map((teacher, index) => (
              <li key={index} className="border-b border-gray-300 pb-4">
                <span className="text-gray-700 text-lg">{teacher}</span>
              </li>
            ))}
          </ul>

          {/* If No Teachers */}
          {teachers.length === 0 && (
            <p className="text-gray-600 text-center mt-4">No Teachers Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachersList;
