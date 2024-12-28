import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";

const ParentNoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      const parentId = "676f98625b442721a56ee770";
      const studentId = "676bb21bd06928a8432c676a";

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
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 overflow-y-auto mt-6">
        {/* Title */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Notice Board</h1>

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
