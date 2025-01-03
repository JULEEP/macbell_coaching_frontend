import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";
import { FaBars, FaTimes } from 'react-icons/fa';

const MyChildLessonPlan = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch lessons data from API
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-lesson/${parentId}/${studentId}`
        );

        const data = await response.json();

        if (data.message === "Lessons retrieved successfully") {
          setLessons(data.lessons);
        } else {
          setError(data.message || "Failed to fetch lessons");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
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
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Lesson Plan</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">My Child Lesson Plan</h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Nine (A)</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Week Section */}
          <p className="text-lg font-semibold text-gray-600">Week 51 | 2024</p>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Loading, Error, and Lesson Plan Table */}
          {loading ? (
            <div className="flex justify-center">
              <span>Loading...</span>
            </div>
          ) : error ? (
            <div className="flex justify-center text-red-500">
              <span>{error}</span>
            </div>
          ) : lessons.length === 0 ? (
            <div className="flex justify-center text-gray-500">
              <span>No lessons available</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                      <th key={idx} className="px-4 py-2 text-left text-gray-400">
                        {day} 16-Dec-24
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Loop through lessons for each day */}
                  {lessons.map((lesson, index) => (
                    <tr key={index}>
                      {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                        <td key={idx} className="px-4 py-2 text-center text-gray-400">
                          <div>
                            <strong>{lesson.subject} ({lesson.lessonName})</strong>
                            <br />
                            Title: {lesson.title}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChildLessonPlan;
