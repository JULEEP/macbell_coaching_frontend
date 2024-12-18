import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ExamRoutinePage = () => {
  const [selectedExam, setSelectedExam] = useState("");

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for Exam Routine: ${selectedExam}`);
    // Add search logic here
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Exam Routine</h1>

        {/* Select Criteria Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Select Criteria</h2>

          {/* Exam Field and Button Row */}
          <div className="flex items-center gap-4">
            {/* Dropdown */}
            <select
              id="exam"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
              value={selectedExam}
              onChange={handleExamChange}
            >
              <option value="">Select Exam</option>
              <option value="Midterm">Midterm</option>
              <option value="Final">Final</option>
              <option value="Class Test">Class Test</option>
            </select>

            {/* Search Button */}
            <button
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamRoutinePage;
