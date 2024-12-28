import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildLessonPlan = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with the actual parent and student IDs
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

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Title Section */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">
          My Child Lesson Plan
        </h1>
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
                    <th className="px-4 py-2 text-left text-gray-400">
                      Saturday 16-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Sunday 17-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Monday 18-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Tuesday 19-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Wednesday 20-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Thursday 21-Dec-24
                    </th>
                    <th className="px-4 py-2 text-left text-gray-400">
                      Friday 22-Dec-24
                    </th>
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
