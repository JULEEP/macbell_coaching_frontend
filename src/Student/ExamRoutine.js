import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ExamRoutinePage = () => {
  const [selectedExam, setSelectedExam] = useState("");  // Selected exam type
  const [examSchedule, setExamSchedule] = useState([]); // Store fetched exam schedule
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Handle change in exam selection
  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  // Handle search logic
  const handleSearch = async () => {
    if (!selectedExam) {
      setError("Please select an exam type");
      return;
    }
    setLoading(true);
    setError(""); // Reset error message
    try {
      // Fetch the exam schedule for the selected exam type
      const response = await fetch(
        `https://school-backend-1-2xki.onrender.com/api/students/exam-schedule/${studentId}`
      );
      const data = await response.json();

      if (response.ok) {
        setExamSchedule(data.examSchedule.filter(exam => exam.examType === selectedExam)); // Filter by selected exam type
      } else {
        setError(data.message || "Error fetching exam schedule");
      }
    } catch (err) {
      setError("An error occurred while fetching the exam schedule");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Exam Routine</h1>

        {/* Select Criteria Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Select Exam Criteria</h2>

          {/* Exam Field and Button Row */}
          <div className="flex items-center gap-4">
            {/* Dropdown */}
            <select
              id="exam"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
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
          <div className="bg-white shadow-md rounded-xl p-6 mt-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Exam Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-50 rounded-lg">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Exam Date</th>
                    <th className="py-3 px-4">Exam Time</th>
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
                      <td className="py-3 px-4 text-gray-700">{exam.examTime}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.examType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Loading Message */}
        {loading && <p className="text-gray-500">Loading exam schedule...</p>}
      </div>
    </div>
  );
};

export default ExamRoutinePage;
