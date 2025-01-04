import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from 'react-icons/fa';

const ParentNoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch notices data from API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-notice/${parentId}/${studentId}`
        );
        setNotices(response.data.notices);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch notices");
        setLoading(false);
      }
    };

    fetchNotices();
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
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Notice Board</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}

        {/* Notices Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-700 mb-3">All Notices</h2>

          {/* Notice Cards */}
          <div className="space-y-3">
            {loading ? (
              <p className="text-center text-gray-500">Loading notices...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : notices.length > 0 ? (
              notices.map((notice, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 hover:shadow-md flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">{notice.title}</h3>
                    <p className="text-xs text-gray-700 mt-1">{notice.description}</p>
                  </div>
                  <div className="text-xs text-gray-500 ml-4 flex flex-col items-end">
                    <span className="font-medium">Publish Date:</span>
                    <span>{notice.publishDate}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No notices available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentNoticeBoard;
