import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from 'react-icons/fa';

const ParentSubjectDetails = () => {
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch subject details data from API
  useEffect(() => {
    const fetchSubjectDetails = async () => {
      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-subjects/${parentId}/${studentId}`
        );
        setSubjectDetails(response.data.subjects);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch subject details");
        setLoading(false);
      }
    };

    fetchSubjectDetails();
  }, [parentId, studentId]);

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
      <div className="flex-grow p-6 overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Subject Details</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Subject Details</h1>

        <h2 className="text-xs font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Subject Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-500 mb-4">Subject Details</h3>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : subjectDetails.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {subjectDetails.map((subject, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span className="text-xs font-medium text-gray-700">Subject:</span>
                  <div className="border-b border-gray-300 w-full mt-1 mb-2"></div>
                  <p className="text-xs text-gray-600">{subject.name}</p>

                  <span className="text-xs font-medium text-gray-700 mt-4">Teacher:</span>
                  <div className="border-b border-gray-300 w-full mt-1 mb-2"></div>
                  <p className="text-xs text-gray-600">{subject.teacherName}</p>

                  <span className="text-xs font-medium text-gray-700 mt-4">Subject Type:</span>
                  <div className="border-b border-gray-300 w-full mt-1 mb-2"></div>
                  <p className="text-xs text-gray-600">{subject.type}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No subject details available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentSubjectDetails;
