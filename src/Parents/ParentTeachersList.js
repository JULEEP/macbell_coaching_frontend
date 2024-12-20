import React from "react";
import ParentSidebar from "./ParentSidebar";

const ParentTeachersList = () => {
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
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Teachers List Title */}
        <h1 className="text-xl font-semibold text-blue-500 mb-4">Teachers List</h1>

        {/* Nine (A) Subtitle */}
        <h2 className="text-xs font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Teacher Names List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-500 mb-4">Teacher Names</h3>

          {/* List of Teacher Names */}
          <ul className="space-y-4">
            {teachers.map((teacher, index) => (
              <li key={index} className="border-b border-gray-300 pb-2">
                <span className="text-xs text-gray-700">{teacher}</span>
              </li>
            ))}
          </ul>

          {/* If No Teachers */}
          {teachers.length === 0 && (
            <p className="text-xs text-gray-600 text-center mt-4">No Teachers Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentTeachersList;
