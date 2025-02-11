// SubjectListPage.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing the toast styles

const SubjectListPage = () => {
  const [subjects, setSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [subjectsPerPage] = useState(5); // Show 5 subjects per page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          'https://school-backend-1-2xki.onrender.com/api/admin/get-subjects'
        );
        const data = await response.json();
        if (response.ok) {
          setSubjects(data.subjects);
        } else {
          toast.error('Failed to fetch subjects: ' + data.message); // Toast error
        }
      } catch (error) {
        toast.error('Error fetching subjects: ' + error.message); // Toast error
      }
    };

    fetchSubjects();
  }, []);

  // Pagination logic
  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Subjects</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Subject List */}
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto mt-8 text-white">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="px-4 py-2 text-white">SL</th>
                <th className="px-4 py-2 text-white">Subject</th>
                <th className="px-4 py-2 text-white">Subject Type</th>
                <th className="px-4 py-2 text-white">Subject Code</th>
              </tr>
            </thead>
            <tbody>
              {currentSubjects.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                currentSubjects.map((subject, index) => (
                  <tr key={subject._id || index} className="border-t border-gray-300">
                    <td className="px-4 py-2 text-gray-600 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-600 text-center">{subject.subjectName}</td>
                    <td className="px-4 py-2 text-gray-600 text-center">{subject.subjectType}</td>
                    <td className="px-4 py-2 text-gray-600 text-center">{subject.subjectCode}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-600 text-white rounded-md mr-2"
            >
              Prev
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage * subjectsPerPage >= subjects.length}
              className="px-4 py-2 bg-purple-600 text-white rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default SubjectListPage;
