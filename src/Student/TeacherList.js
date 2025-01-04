import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]); // State to store teacher names
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch teachers from API
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      setError(""); // Reset error
      try {
        // Fetch teachers from the API
        const response = await fetch(`https://school-backend-1-2xki.onrender.com/api/students/teachers/${studentId}`);
        const data = await response.json();

        if (response.ok) {
          // Extract teacher names from the response and set them in the state
          const teacherNames = data.student.subjects.map((subject) => subject.teacher);
          setTeachers(teacherNames);
        } else {
          setError(data.message || "Error fetching teachers");
        }
      } catch (err) {
        setError("An error occurred while fetching teachers");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers(); // Call the function to fetch teachers
  }, [studentId]); // This effect runs once when the component mounts

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Teachers List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title */}

        {/* Class and Section */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Class: 5 (A)</h2>

        {/* Teacher Names List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Teacher Names</h3>

          {/* Display error if there is any */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Display loading state */}
          {loading && <p className="text-gray-500">Loading teachers...</p>}

          {/* List of Teacher Names */}
          <ul className="space-y-4">
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <li key={index} className="border-b border-gray-300 pb-4">
                  <span className="text-gray-700 text-lg">{teacher}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center mt-4">No teachers available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeachersList;
