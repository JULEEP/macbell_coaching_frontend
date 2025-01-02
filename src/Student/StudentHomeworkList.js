import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentHomeworkList = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Fetch homework data from API
  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-homework/${studentId}`
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

        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 lg:mb-8">Homework List</h1>

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
