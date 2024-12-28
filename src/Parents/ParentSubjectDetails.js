import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";

const ParentSubjectDetails = () => {
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubjectDetails = async () => {
      const parentId = "676f98625b442721a56ee770";
      const studentId = "676bb21bd06928a8432c676a";

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
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-xl font-semibold text-blue-500 mb-4">Subject Details</h1>

        <h2 className="text-xs font-medium text-gray-700 mb-6">Nine (A)</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-500 mb-4">Subject Details</h3>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : subjectDetails.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
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
