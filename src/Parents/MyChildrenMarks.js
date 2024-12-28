import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildMarksPage = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Title Section */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Result</h1>
        
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
