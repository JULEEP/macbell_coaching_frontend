import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ExamRoutinePage = () => {
  const [examSchedule, setExamSchedule] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch exam schedule when component mounts
  useEffect(() => {
    const fetchExamSchedule = async () => {
      setLoading(true);
      setError(""); // Reset error message
      try {
        // Fetch the exam schedule for the student
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-exam-schedule/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setExamSchedule(data.examSchedules || []); // Ensure it's an empty array if not set
        } else {
          setError(data.message || "Error fetching exam schedule");
        }
      } catch (err) {
        setError("An error occurred while fetching the exam schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchExamSchedule();
  }, []);

  // Handle Admit Card download
  const handleDownload = async () => {
    try {
      const response = await fetch(
        `https://school-backend-1-2xki.onrender.com/api/students/get-admit-card/${studentId}`
      );

      if (!response.ok) {
        const result = await response.json();
        setError(result.message || "Failed to download admit card");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Admit_Card_${studentId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError("Error downloading admit card");
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

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Download Button */}
        {examSchedule.length > 0 && (
          <button
            className="mb-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleDownload}
          >
            Download Admit Card
          </button>
        )}

        {/* Exam Schedule Table */}
        {examSchedule.length > 0 ? (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Exam Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-50 rounded-lg">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 px-4">Exam Title</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Section</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Exam Date</th>
                    <th className="py-3 px-4">Start Time</th>
                    <th className="py-3 px-4">End Time</th>
                    <th className="py-3 px-4">Exam Type</th>
                    <th className="py-3 px-4">Admit Card Generated</th>
                  </tr>
                </thead>
                <tbody>
                  {examSchedule.map((exam) => (
                    <tr key={exam._id}>
                      <td className="py-3 px-4 text-gray-700">{exam.examTitle}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.class}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.section}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.subject}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {new Date(exam.examDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{exam.startTime}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.endTime}</td>
                      <td className="py-3 px-4 text-gray-700">{exam.examType}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {exam.isAdmitCardGenerated ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          !loading && <p className="text-gray-500">No exam schedule found.</p>
        )}

        {/* Loading Message */}
        {loading && <p className="text-gray-500">Loading exam schedule...</p>}
      </div>
    </div>
  );
};

export default ExamRoutinePage;
