import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const LessonPlanPage = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Use static studentId
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-lesson/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setLessons(data.lessons);
        } else {
          setError(data.message || "Error fetching lessons");
        }
      } catch (err) {
        setError("An error occurred while fetching lessons");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar and Menu Icon */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-purple-500 bg-white rounded-md shadow-md focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Mobile View: Menu Icon, Divider, and Content */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 text-purple-500 focus:outline-none mb-4"
          >
          </button>
          <div className="border-t-2 border-gray-200 mb-4"></div> {/* Divider for mobile view */}
        </div>

        {/* Heading (Now below the divider on mobile) */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 lg:mb-8">Lesson Plan</h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Class Routine - {lessons.class} ({lessons.section})
          </h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Week Section */}
          <p className="text-lg font-semibold text-gray-600">Week 51 | 2024</p>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Lesson Plan Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Saturday 16-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Sunday 17-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Monday 18-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Tuesday 19-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Wednesday 20-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Thursday 21-Dec-24</th>
                  <th className="px-4 py-2 text-left text-gray-400">Friday 22-Dec-24</th>
                </tr>
              </thead>
              <tbody>
                {/* Render each lesson dynamically */}
                {lessons.length > 0 ? (
                  lessons.map((lesson, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                      <td className="px-4 py-2 text-center text-gray-400">
                        Time: 09:00 AM - 09:45 AM
                        <br />
                        {lesson.subject}
                        <br />
                        {lesson.lessonName} - {lesson.title}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-gray-400">
                      No lessons available for this week.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanPage;
