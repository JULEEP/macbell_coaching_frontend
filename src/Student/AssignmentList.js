import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentAssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Fetch assignment data from API
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-assignment/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAssignments(data);
        } else {
          setError(data.message || "Error fetching assignments");
        }
      } catch (err) {
        setError("An error occurred while fetching assignments");
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Check if we have assignments data to avoid errors
  const classSection = assignments.length > 0 ? `${assignments[0].class} (${assignments[0].section})` : "";

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
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Assignment List</h1>

        {/* Display Class and Section Dynamically */}
        <h2 className="text-xl font-semibold text-gray-800">{classSection}</h2>
        
        <div className="my-4 border-t border-gray-300"></div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-400">Content Title</th>
                <th className="px-4 py-2 text-left text-gray-400">Type</th>
                <th className="px-4 py-2 text-left text-gray-400">Date</th>
                <th className="px-4 py-2 text-left text-gray-400">Available For</th>
                <th className="px-4 py-2 text-left text-gray-400">Description</th>
                <th className="px-4 py-2 text-left text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically Render Assignment Data */}
              {assignments.length > 0 ? (
                assignments.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-gray-600">{item.assignmentTitle}</td>
                    <td className="px-4 py-2 text-gray-600">Homework</td> {/* Static Type */}
                    <td className="px-4 py-2 text-gray-600">
                      {new Date(item.dueDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{item.availableFor}</td>
                    <td className="px-4 py-2 text-gray-600">{item.description}</td>
                    <td className="px-4 py-2 text-gray-600">
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center text-gray-600">
                    No Assignments Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination/Entries Section */}
        <div className="mt-4 text-gray-500 text-sm">
          Showing {assignments.length} entries
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentList;
