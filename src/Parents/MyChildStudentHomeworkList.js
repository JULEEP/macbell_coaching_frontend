import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";

const MyChildStudentHomeworkList = () => {
  const [homeworkData, setHomeworkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchHomework = async () => {
      const parentId = "676f98625b442721a56ee770";
      const studentId = "676bb21bd06928a8432c676a";

      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-homework/${parentId}/${studentId}`
        );
        setHomeworkData(response.data.homework);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch homework data");
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

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
          <h1 className="text-lg font-bold">Homework List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        <h1 className="text-xl font-medium text-blue-500 mb-6">
          My Child Homework List
        </h1>

        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-medium text-gray-800">Nine (A)</h2>
          <div className="my-3 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center text-gray-500">Loading homework data...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : homeworkData.length > 0 ? (
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Subject</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Marks</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Homework Date</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Submission Date</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Evaluation Date</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Obtained Marks</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Status</th>
                    <th className="px-2 py-1 text-left text-sm text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {homeworkData.map((hw, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.subject}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.marks}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.homeworkDate}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.submissionDate}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.evaluationDate}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.obtainedMarks}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">{hw.status}</td>
                      <td className="px-2 py-1 text-sm text-gray-600">
                        <button className="text-blue-500 hover:underline">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No homework data available</p>
            )}
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-3 text-gray-500 text-sm">
            {homeworkData.length > 0
              ? `Showing ${homeworkData.length} entries`
              : "No entries to display"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildStudentHomeworkList;
