import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";

const MyChildAttendance = () => {
  const [attendance, setAttendance] = useState(null); // Store attendance data
  const [error, setError] = useState(""); // Store error message
  const [loading, setLoading] = useState(false); // Loading state
  const [studentDetails, setStudentDetails] = useState(null); // Store student details
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  // Parent and student IDs (replace these with dynamic values or props)
  const parentId = "676f98625b442721a56ee770";
  const studentId = "676bb21bd06928a8432c676a";

  // Fetch student details on mount
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-attendance/${parentId}/${studentId}`
        );
        setStudentDetails(response.data.studentDetails);
      } catch (err) {
        setError("Failed to fetch student details. Please try again.");
      }
    };
    fetchStudentDetails();
  }, [parentId, studentId]);

  const fetchAttendance = async () => {
    setLoading(true);
    setError("");
    setAttendance(null);

    try {
      const response = await axios.get(
        `https://school-backend-1-2xki.onrender.com/api/parent/my-child-attendance/${parentId}/${studentId}`
      );
      setAttendance(response.data.studentDetails.attendance); // Update attendance state
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message); // Display server error message
      } else {
        setError("Failed to fetch attendance. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <ParentSidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Attendance</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title */}

        {/* Student Info Section */}
        {studentDetails && (
          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Name</span>
                <span className="text-base text-gray-800">{studentDetails.firstName}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Class</span>
                <span className="text-base text-gray-800">{studentDetails.class}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Section</span>
                <span className="text-base text-gray-800">{studentDetails.section}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Roll</span>
                <span className="text-base text-gray-800">{studentDetails.roll}</span>
              </div>
            </div>
          </div>
        )}

        {/* Criteria Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <h2 className="text-sm font-medium text-gray-800 mb-4">Select Criteria</h2>

          {/* Dropdowns and Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Month</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500">
                <option value="January">January</option>
                <option value="February">February</option>
                {/* Add other months */}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Year</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                {/* Add other years */}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={fetchAttendance}
              className="px-4 py-2 bg-purple-500 text-white text-xs font-medium rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>

        {/* Attendance Details Section */}
        <div className="mt-6">
          {error && (
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md">
              {error}
            </div>
          )}
          {attendance && (
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Attendance Details</h2>
              <ul className="space-y-2">
                {attendance.length > 0 ? (
                  attendance.map((entry, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      <span className="font-medium">{entry.date}:</span> {entry.status}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-700">No attendance data available.</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChildAttendance;
