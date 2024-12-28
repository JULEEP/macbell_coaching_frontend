import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
const TeacherClassRoutinePage = () => {
  const [selectedClass, setSelectedClass] = useState(""); // Selected class
  const [selectedSection, setSelectedSection] = useState(""); // Selected section
  const [classRoutine, setClassRoutine] = useState([]); // Store class routine
  const [error, setError] = useState(""); // Error state

  // Dummy data for class routines (for teacher)
  const allRoutines = [
    { day: "Monday", time: "09:00 AM - 09:45 AM", subject: "Bangla (ENG-123)", class: "5", section: "A" },
    { day: "Tuesday", time: "09:00 AM - 09:45 AM", subject: "Bangla (ENG-123)", class: "5", section: "A" },
    { day: "Wednesday", time: "10:00 AM - 10:45 AM", subject: "Math (MTH-101)", class: "5", section: "A" },
    { day: "Monday", time: "10:00 AM - 10:45 AM", subject: "Science (SCI-102)", class: "6", section: "B" },
    { day: "Tuesday", time: "11:00 AM - 11:45 AM", subject: "History (HIS-105)", class: "5", section: "B" },
    { day: "Wednesday", time: "09:00 AM - 09:45 AM", subject: "Geography (GEO-107)", class: "5", section: "B" },
  ];

  // Handle class change
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  // Handle section change
  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  // Handle search logic for class routine
  const handleSearch = () => {
    if (!selectedClass || !selectedSection) {
      setError("Please select both class and section");
      return;
    }
    setError(""); // Reset error message
    // Filter class routine based on selected class and section
    const filteredRoutine = allRoutines.filter(
      (routine) => routine.class === selectedClass && routine.section === selectedSection
    );
    setClassRoutine(filteredRoutine); // Update the routine list
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        {/* Title */}
        <h1 className="text-xl text-purple-800 mb-8">Class Routine</h1>

        {/* Select Criteria Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Select Class and Section</h2>

          {/* Class and Section Dropdowns */}
          <div className="flex items-center gap-4">
            {/* Class Dropdown */}
            <select
              id="class"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
              value={selectedClass}
              onChange={handleClassChange}
            >
              <option value="">Select Class</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
            </select>

            {/* Section Dropdown */}
            <select
              id="section"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
              value={selectedSection}
              onChange={handleSectionChange}
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
            </select>

            {/* Search Button */}
            <button
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Class Routine Table */}
        {classRoutine.length > 0 && (
          <div className="bg-white shadow-md rounded-xl p-6 mt-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Class Routine</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-50 rounded-lg">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {classRoutine.map((routine, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-gray-700">{routine.day}</td>
                      <td className="py-3 px-4 text-gray-700">{routine.time}</td>
                      <td className="py-3 px-4 text-gray-700">{routine.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No Routines Available Message */}
        {classRoutine.length === 0 && !error && (
          <p className="text-gray-600 mt-4">No routine found for the selected class and section.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherClassRoutinePage;
