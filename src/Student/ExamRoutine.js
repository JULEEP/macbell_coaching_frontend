import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import StudentSidebar from "../Sidebar";

const ExamRoutinePage = () => {
  const [examScheduleData, setExamScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentId = "676cf56dfd1eb1caa8426205";

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        // Fetch Exam Schedule Data
        const examScheduleResponse = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-exam-schedule/${studentId}`
        );
        const examScheduleResult = await examScheduleResponse.json();
        if (examScheduleResponse.ok) {
          setExamScheduleData(examScheduleResult.examSchedules);
        } else {
          throw new Error(examScheduleResult.message || "Error fetching exam schedule data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [studentId]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <StudentSidebar />
      </div>

      <div
        className={`flex-grow overflow-y-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Exam Routine</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Exam Schedule Section */}
        {examScheduleData.length > 0 && (
          <div className="bg-white shadow-md rounded-xl p-8 my-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Exam Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border rounded-lg bg-gray-50 text-sm">
                <thead>
                  <tr className="text-left bg-purple-700 text-white">
                    <th className="py-3 px-4">Exam Title</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Section</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Start Time</th>
                    <th className="py-3 px-4">End Time</th>
                    <th className="py-3 px-4">Exam Type</th>
                  </tr>
                </thead>
                <tbody>
                  {examScheduleData.map((exam, index) => (
                    <tr
                      key={exam._id}
                      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                    >
                      <td className="py-3 px-4">{exam.examTitle || "N/A"}</td>
                      <td className="py-3 px-4">{exam.subject || "N/A"}</td>
                      <td className="py-3 px-4">{exam.class || "N/A"}</td>
                      <td className="py-3 px-4">{exam.section || "N/A"}</td>
                      <td className="py-3 px-4">{new Date(exam.examDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{exam.startTime || "N/A"}</td>
                      <td className="py-3 px-4">{exam.endTime || "N/A"}</td>
                      <td className="py-3 px-4">{exam.examType || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamRoutinePage;
