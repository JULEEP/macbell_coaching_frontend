import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]); // State to store the notices
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch notices from API
  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      setError(""); // Reset error
      try {
        // Fetch notices from API
        const response = await fetch(`https://school-backend-1-2xki.onrender.com/api/students/notices/${studentId}`);
        const data = await response.json();

        if (response.ok) {
          setNotices(data.notices); // Set notices data in state
        } else {
          setError(data.message || "Error fetching notices");
        }
      } catch (err) {
        setError("An error occurred while fetching notices");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices(); // Call the function to fetch notices
  }, [studentId]); // This effect runs once when the component mounts

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

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
      <div
        className={`flex-grow p-6 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
      >
        {/* Mobile View: Menu Icon, Divider, and Content */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 text-purple-500 focus:outline-none mb-4"
          >
          </button>
          <div className="border-t-2 border-gray-200 mb-4"></div> {/* Divider for mobile view */}
        </div>

        {/* Heading (Now below the divider on mobile) */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 lg:mb-8">Notice Board</h1>

        {/* Notices Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">All Notices</h2>

          {/* Display error if there is any */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Display loading state */}
          {loading && <p className="text-gray-500">Loading notices...</p>}

          {/* Notice Cards */}
          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map((notice) => (
                <div
                  key={notice._id}
                  className="border border-gray-300 rounded-lg p-4 bg-gray-50 hover:shadow-md flex justify-between items-start h-30"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{notice.title}</h3>
                    <p className="text-gray-700 mt-2">{notice.description}</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4 ml-4 flex flex-col items-end">
                    <span className="font-medium">Publish Date:</span>
                    <span>{new Date(notice.date).toLocaleDateString()}</span>

                    {/* Show the postedBy field */}
                    <span className="mt-2 text-gray-600">
                      <strong>Posted By:</strong> {notice.postedBy}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No notices available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
