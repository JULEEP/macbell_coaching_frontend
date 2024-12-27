import React, { useEffect, useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]); // State to store the notices
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch notices from API
  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      setError(""); // Reset error
      try {
        // Fetch notices from API
        const response = await fetch(`http://localhost:4000/api/students/notices/${studentId}`);
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

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Notice Board</h1>

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
