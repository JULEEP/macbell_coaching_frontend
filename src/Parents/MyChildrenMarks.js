import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const MyChildMarksPage = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  // Replace with the actual parent and student IDs
  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch marks data from API
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-marks/${parentId}/${studentId}`
        );

        const data = await response.json();

        if (data.message === "Marks retrieved successfully") {
          setMarks(data.marks);
        } else {
          setError(data.message || "Failed to fetch marks");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
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
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
          <h1 className="text-lg font-bold">Marks</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Result List</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Loading, Error, and Result Table */}
          {loading ? (
            <div className="flex justify-center">
              <span>Loading...</span>
            </div>
          ) : error ? (
            <div className="flex justify-center text-red-500">
              <span>{error}</span>
            </div>
          ) : marks.length === 0 ? (
            <div className="flex justify-center text-gray-500">
              <span>No marks available</span>
            </div>
          ) : (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-400">Subject</th>
                      <th className="px-4 py-2 text-left text-gray-400">Exam Date</th>
                      <th className="px-4 py-2 text-left text-gray-400">Total Marks</th>
                      <th className="px-4 py-2 text-left text-gray-400">Marks Obtained</th>
                      <th className="px-4 py-2 text-left text-gray-400">Result</th>
                      <th className="px-4 py-2 text-left text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marks.map((mark, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-center text-gray-400">{mark.subject}</td>
                        <td className="px-4 py-2 text-center text-gray-400">{mark.examDate}</td>
                        <td className="px-4 py-2 text-center text-gray-400">{mark.totalMarks}</td>
                        <td className="px-4 py-2 text-center text-gray-400">{mark.marksObtained}</td>
                        <td className="px-4 py-2 text-center text-gray-400">
                          {mark.marksObtained >= mark.totalMarks * 0.33 ? "Pass" : "Fail"}
                        </td>
                        <td className="px-4 py-2 text-center text-gray-400">
                          {mark.marksObtained >= mark.totalMarks * 0.33 ? "Passed" : "Failed"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination (Optional) */}
              <div className="flex justify-between mt-4">
                <span>Showing 1 to {marks.length} of {marks.length} entries</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChildMarksPage;
