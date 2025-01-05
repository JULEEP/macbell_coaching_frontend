import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar";
import axios from "axios";

const MyChildPendingLeaveRequest = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch leave data from the API
    const fetchLeaveRequests = async () => {
      const parentId = "676f98625b442721a56ee770"; // Replace with actual parent ID
      const studentId = "676bb21bd06928a8432c676a"; // Replace with actual student ID

      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-leaves/${parentId}/${studentId}`
        );
        const leaves = response.data.leaves || [];
        // Filter pending requests based on the status
        const pending = leaves.filter((leave) => leave.status === "Pending");
        setPendingRequests(pending);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch leave requests");
        setLoading(false);
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-xl font-semibold text-blue-500 mb-4 mr-6">
          Pending Leave Request
        </h1>

        {/* Pending Leave Request List */}
        <div className="bg-white shadow-md rounded-lg p-4 mr-20">
          <h2 className="text-sm font-medium text-gray-700 mb-4">
            Pending Leave Request List
          </h2>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg text-sm">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Type</th>
                  <th className="py-2 px-4">From</th>
                  <th className="py-2 px-4">To</th>
                  <th className="py-2 px-4">Apply Date</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="py-2 px-4 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="6" className="py-2 px-4 text-center text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : pendingRequests.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-2 px-4 text-center text-gray-500">
                      No Pending Requests Available
                    </td>
                  </tr>
                ) : (
                  pendingRequests.map((request) => (
                    <tr key={request.id} className="border-b">
                      <td className="py-2 px-4 text-gray-600">{request.name}</td>
                      <td className="py-2 px-4 text-gray-600">{request.type}</td>
                      <td className="py-2 px-4 text-gray-600">{request.from}</td>
                      <td className="py-2 px-4 text-gray-600">{request.to}</td>
                      <td className="py-2 px-4 text-gray-600">{request.applyDate}</td>
                      <td className="py-2 px-4 text-gray-600">{request.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Footer Section */}
            <div className="mt-2 text-xs text-gray-600">
              {pendingRequests.length === 0
                ? "Showing 0 to 0 of 0 entries"
                : `Showing 1 to ${pendingRequests.length} of ${pendingRequests.length} entries`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildPendingLeaveRequest;
