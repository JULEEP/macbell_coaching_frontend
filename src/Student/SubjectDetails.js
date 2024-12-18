import React from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const SubjectDetails = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Subject Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Subject Title</h1>

        {/* Nine (A) Subtitle */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Subject, Teacher, Subject Type Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject Details</h3>

          {/* Subject Details */}
          <div className="grid grid-cols-3 gap-6">
            {/* Subject Column */}
            <div className="flex flex-col items-start">
              <span className="font-medium text-gray-700">Subject:</span>
              <div className="border-b border-gray-300 w-full mt-1 mb-4"></div>
              <p className="text-gray-600">Mathematics</p>
            </div>

            {/* Teacher Column */}
            <div className="flex flex-col items-start">
              <span className="font-medium text-gray-700">Teacher:</span>
              <div className="border-b border-gray-300 w-full mt-1 mb-4"></div>
              <p className="text-gray-600">Mr. John Doe</p>
            </div>

            {/* Subject Type Column */}
            <div className="flex flex-col items-start">
              <span className="font-medium text-gray-700">Subject Type:</span>
              <div className="border-b border-gray-300 w-full mt-1 mb-4"></div>
              <p className="text-gray-600">Core Subject</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
