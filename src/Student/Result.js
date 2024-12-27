import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ResultPage = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Result</h1>

        {/* Result Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Result List</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Exam Date</th>
                  <th className="py-3 px-4">Total Marks</th>
                  <th className="py-3 px-4">Marks Obtained</th>
                  <th className="py-3 px-4">Result</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {marks.length > 0 ? (
                  marks.map((mark) => (
                    <tr key={mark._id}>
                      <td className="py-3 px-4 text-gray-700">{mark.subject}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {new Date(mark.examDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{mark.totalMarks}</td>
                      <td className="py-3 px-4 text-gray-700">{mark.marksObtained}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {mark.marksObtained >= mark.totalMarks / 2 ? "Pass" : "Fail"}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {mark.marksObtained >= mark.totalMarks / 2 ? (
                          <span className="text-green-500">Passed</span>
                        ) : (
                          <span className="text-red-500">Failed</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-3 px-4 text-center text-gray-600" colSpan="6">
                      No Data Available In Table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Footer */}
            <div className="mt-4 text-sm text-gray-600">
              {marks.length > 0
                ? `Showing 1 to ${marks.length} of ${marks.length} entries`
                : "No data to show"}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ResultPage;
