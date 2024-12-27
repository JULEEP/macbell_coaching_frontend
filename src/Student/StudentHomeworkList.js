import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentHomeworkList = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch homework data from API
  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/students/get-homework/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setHomework(data);
        } else {
          setError(data.message || "Error fetching homework");
        }
      } catch (err) {
        setError("An error occurred while fetching homework");
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Homework List</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Nine (A)</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Subject</th>
                  <th className="px-4 py-2 text-left text-gray-400">Marks</th>
                  <th className="px-4 py-2 text-left text-gray-400">Homework Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Submission Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Evaluation Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Obtained Marks</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically Render Homework Data */}
                {homework.length > 0 ? (
                  homework.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-gray-600">{item.subject}</td>
                      <td className="px-4 py-2 text-gray-600">{item.marks}</td>
                      <td className="px-4 py-2 text-gray-600">
                        {new Date(item.homeworkDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {new Date(item.submissionDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-gray-600">
                        {item.updatedAt
                          ? new Date(item.updatedAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td className="px-4 py-2 text-gray-600">N/A</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-2 text-center text-gray-600">
                      No Homework Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing {homework.length} entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHomeworkList;
