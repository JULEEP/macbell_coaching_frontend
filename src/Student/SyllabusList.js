import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const StudentSyllabusList = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch syllabus data from API
  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-syllabus/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setSyllabus(data);
        } else {
          setError(data.message || "Error fetching syllabus");
        }
      } catch (err) {
        setError("An error occurred while fetching syllabus");
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabus();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Check if we have syllabus data to avoid errors
  const classSection = syllabus.length > 0 ? `${syllabus[0].class} (${syllabus[0].section})` : "";

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Syllabus List</h1>

        {/* Class and Section Subtitle */}
        <h2 className="text-xl font-semibold text-gray-800">{classSection}</h2>
        <div className="my-4 border-t border-gray-300"></div>

        {/* Syllabus Table Section */}
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
              {/* Dynamically Render Syllabus Data */}
              {syllabus.length > 0 ? (
                syllabus.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-gray-600">{item.syllabusTitle}</td>
                    <td className="px-4 py-2 text-gray-600">{item.syllabusType}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {new Date(item.date).toLocaleDateString()}
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
                    No Syllabus Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination/Entries Section */}
        <div className="mt-4 text-gray-500 text-sm">
          Showing {syllabus.length} entries
        </div>
      </div>
    </div>
  );
};

export default StudentSyllabusList;
