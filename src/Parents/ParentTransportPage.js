import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";

const ParentTransportPage = () => {
  const [studentDetails, setStudentDetails] = useState({});
  const [transportDetails, setTransportDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchTransportDetails = async () => {
      const parentId = "676f98625b442721a56ee770"; // Replace with dynamic parentId
      const studentId = "676bb21bd06928a8432c676a"; // Replace with dynamic studentId

      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-transport/${parentId}/${studentId}`
        );
        const { transport, student } = response.data;

        setStudentDetails(student || {});
        setTransportDetails(transport || []);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch transport details");
        setLoading(false);
      }
    };

    fetchTransportDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
      <div className="flex-grow lg:ml-64 overflow-y-auto">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Transport</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Transport Title */}

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Student Details Card */}
          <div className="bg-white shadow-xl rounded-3xl p-6 w-full lg:w-64 mb-6 lg:mb-0">
            <div className="border-2 border-gray-300 rounded-3xl p-6">
              {/* Profile Photo */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
              </div>

              {/* Student ID Card Details */}
              <h3 className="text-xs font-semibold text-blue-500 mb-4 text-center">ID Card</h3>
              <div className="space-y-2">
                {loading ? (
                  <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : (
                  <>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Student Name:</span>
                      <span>{studentDetails.firstName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Roll No:</span>
                      <span>{studentDetails.roll || "N/A"}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Class:</span>
                      <span>{studentDetails.class || "N/A"}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Section:</span>
                      <span>{studentDetails.section || "N/A"}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Gender:</span>
                      <span>{studentDetails.gender || "N/A"}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Transport Details */}
          <div className="bg-white shadow-md rounded-lg p-6 flex-1">
            <h3 className="text-xs font-semibold text-blue-500 mb-4">Transport Details</h3>
            <div className="overflow-x-auto">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : transportDetails.length > 0 ? (
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left text-xs font-normal text-gray-600">Route</th>
                      <th className="px-4 py-2 text-left text-xs font-normal text-gray-600">Vehicle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportDetails.map((detail, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-xs text-gray-600">{detail.route}</td>
                        <td className="px-4 py-2 text-xs text-gray-600">{detail.vehicle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-500">No Data Available In Table</p>
              )}

              {/* Pagination */}
              <div className="mt-4 text-xs text-gray-600 text-center">
                Showing {transportDetails.length} of {transportDetails.length} entries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentTransportPage;
