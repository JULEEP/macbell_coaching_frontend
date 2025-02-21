import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API calls
import TeacherSidebar from "./TeacherSidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const TeacherClassRoutinePage = () => {
  const [selectedClass, setSelectedClass] = useState(""); // Selected class
  const [selectedSection, setSelectedSection] = useState(""); // Selected section
  const [classRoutine, setClassRoutine] = useState([]); // Store class routine
  const [error, setError] = useState(""); // Error state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  // Fetch class routine data from API
  const fetchRoutine = async () => {
    try {
      const response = await axios.get("https://school-backend-1-2xki.onrender.com/api/teacher/classroutine");
      const data = response.data;
      // Filter based on the class and section
      const filteredRoutine = data.find(
        (item) => item.class === selectedClass && item.section === selectedSection
      );
      if (filteredRoutine) {
        setClassRoutine(filteredRoutine.routine);
      } else {
        setClassRoutine([]); // No routine found
      }
    } catch (err) {
      setError("Error fetching routine data");
      console.error(err);
    }
  };

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
    fetchRoutine(); // Fetch the routine for the selected class and section
  };

  // Toggle sidebar visibility
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
          <h1 className="text-lg font-bold">Class Routine</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          {/* Page Title */}
          <h1 className="text-xl font-bold text-purple-700 mb-6 hidden lg:block">
            Class Routine
          </h1>

          {/* Select Criteria Section */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Select Class and Section</h2>

            {/* Class and Section Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:gap-6">
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
            <div className="bg-white shadow-md rounded-xl p-6">
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
    </div>
  );
};

export default TeacherClassRoutinePage;
