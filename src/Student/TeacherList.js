import React, { useEffect, useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]); // State to store teacher names
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
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

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Teachers List Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Teachers List</h1>

        {/* Nine (A) Subtitle */}
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
