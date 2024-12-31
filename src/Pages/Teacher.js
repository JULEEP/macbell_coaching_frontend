import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Teacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Fetch data from the API
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("https://school-backend-1-2xki.onrender.com/api/admin/get-teacher");
      setTeacherList(response.data.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      alert("Error fetching teachers. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teacherList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teacherList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Teacher List</h2>
        <div className="bg-white rounded-md shadow-md p-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">SL</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Teacher Name</th>
              </tr>
            </thead>
            <tbody>
              {currentTeachers.length > 0 ? (
                currentTeachers.map((teacher, index) => (
                  <tr key={teacher._id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      {teacher.teacher || "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center text-gray-700 py-4">
                    No teachers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              className={`px-4 py-2 bg-purple-700 rounded-md text-white-600 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="text-white-600">
              Page {currentPage} of {totalPages}
            </div>
            <button
              className={`px-4 py-2 bg-purple-700 rounded-md text-white-600 ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
