import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TeacherSidebar from "./TeacherSidebar";

const TeacherExamSchedulePage = () => {
  const [selectedExam, setSelectedExam] = useState(""); // Selected exam type
  const [examSchedule, setExamSchedule] = useState([]); // Store exam schedule
  const [error, setError] = useState(""); // Error state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch exam schedule from API
  useEffect(() => {
    const fetchExamSchedule = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/admin/get-exam-schedule");
        const data = await response.json();
        if (data.message === "Exam schedules fetched successfully") {
          setExamSchedule(data.examSchedules); // Set fetched exam schedules
        } else {
          setError("Failed to fetch exam schedules");
        }
      } catch (error) {
        setError("Error fetching exam schedules");
      }
    };

    fetchExamSchedule();
  }, []);

  // Handle change in exam selection
  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  // Handle search logic for exam schedule
  const handleSearch = () => {
    if (!selectedExam) {
      setError("Please select an exam type");
      return;
    }
    setError(""); // Reset error message
    const filteredExams = examSchedule.filter((exam) => exam.examType === selectedExam);
    setExamSchedule(filteredExams); // Update the schedule list
  };

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
          <h1 className="text-lg font-bold">Exam Schedule</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          <div className="font-sans">
            <h1 className="text-center text-2xl font-bold mb-6">Exam Schedule Management</h1>

            {/* Select Criteria Section */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-6">
              <h2 className="text-xl font-medium text-gray-700 mb-4">Select Exam Criteria</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Dropdown */}
                <select
                  id="exam"
                  className="flex-1 px-4 py-2 border rounded-md text-gray-700"
                  value={selectedExam}
                  onChange={handleExamChange}
                >
                  <option value="">Select Exam</option>
                  <option value="Mid-Term">Mid-Term</option>
                  <option value="Final">Final</option>
                  <option value="Class Test">Class Test</option>
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

            {/* Exam Schedule Table */}
            {examSchedule.length > 0 && (
              <div className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-medium text-gray-700 mb-4">Exam Schedule</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 rounded-lg">
                    <thead>
                      <tr className="text-left text-gray-600 border-b">
                        <th className="py-3 px-4">Subject</th>
                        <th className="py-3 px-4">Exam Date</th>
                        <th className="py-3 px-4">Start Time</th>
                        <th className="py-3 px-4">End Time</th>
                        <th className="py-3 px-4">Exam Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examSchedule.map((exam) => (
                        <tr key={exam._id}>
                          <td className="py-3 px-4 text-gray-700">{exam.subject}</td>
                          <td className="py-3 px-4 text-gray-700">
                            {new Date(exam.examDate).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-gray-700">{exam.startTime}</td>
                          <td className="py-3 px-4 text-gray-700">{exam.endTime}</td>
                          <td className="py-3 px-4 text-gray-700">{exam.examType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* No Exams Available Message */}
            {examSchedule.length === 0 && !error && (
              <p className="text-gray-600 mt-4">No exams found for the selected type.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherExamSchedulePage;
