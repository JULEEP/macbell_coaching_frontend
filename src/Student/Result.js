import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ResultPage = () => {
  const [marks, setMarks] = useState(null); // Adjusted to handle nested API response
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar toggle

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch the marks when the component is mounted
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/marks/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setMarks(data.marks); // Set marks data to state
        } else {
          setError(data.message || "Error fetching marks");
        }
      } catch (err) {
        setError("An error occurred while fetching marks");
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
  }, [studentId]);

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <h1 className="text-lg font-bold">Result</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Student Details */}
        {marks && (
          <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Student Details</h2>
            <p className="text-gray-600">
              <strong>Name:</strong> {marks.student.firstName} {marks.student.lastName}
            </p>
            <p className="text-gray-600">
              <strong>Class:</strong> {marks.student.class} {marks.student.section}
            </p>
            <p className="text-gray-600">
              <strong>Roll:</strong> {marks.student.roll}
            </p>
            <p className="text-gray-600">
              <strong>Father's Name:</strong> {marks.student.fatherName}
            </p>
            <p className="text-gray-600">
              <strong>Mother's Name:</strong> {marks.student.motherName}
            </p>
            <p className="text-gray-600">
              <strong>Overall Percentage:</strong> {marks.overallPercentage}%
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> {marks.overallStatus}
            </p>
          </div>
        )}

        {/* Result Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Subject Results</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Marks Obtained</th>
                  <th className="py-3 px-4">Total Marks</th>
                  <th className="py-3 px-4">Percentage</th>
                  <th className="py-3 px-4">Grade</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {marks && marks.subjects.length > 0 ? (
                  marks.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-gray-700">{subject.subject}</td>
                      <td className="py-3 px-4 text-gray-700">{subject.marksObtained}</td>
                      <td className="py-3 px-4 text-gray-700">{subject.totalMarks}</td>
                      <td className="py-3 px-4 text-gray-700">{subject.percentage}%</td>
                      <td className="py-3 px-4 text-gray-700">{subject.grade}</td>
                      <td className="py-3 px-4 text-gray-700">
                        <span className={subject.status === "Pass" ? "text-green-500" : "text-red-500"}>
                          {subject.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-3 px-4 text-center text-gray-600" colSpan="6">
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ResultPage;
