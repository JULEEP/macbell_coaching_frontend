import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentAssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch assignment data from API
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/students/get-assignment/${studentId}`
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
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
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
