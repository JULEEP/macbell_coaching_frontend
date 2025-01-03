import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from 'react-icons/fa';

const ParentTeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch teachers data from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-teacher/${parentId}/${studentId}`
        );
        const teacherNames = response.data.subjects.map((subject) => subject.teacher);
        setTeachers(teacherNames);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch teachers");
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [parentId, studentId]);

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
      <div className="flex-grow p-6 overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Teachers List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Teachers List</h1>
        <h2 className="text-xs font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Teachers List Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-500 mb-4">Teacher Names</h3>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : teachers.length > 0 ? (
            <ul className="space-y-4">
              {teachers.map((teacher, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <span className="text-xs text-gray-700">{teacher}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-gray-600 text-center mt-4">No Teachers Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentTeachersList;
