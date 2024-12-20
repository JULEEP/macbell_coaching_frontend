import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar";

const MyChildPendingLeaveRequest = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      // Replace with your API call
      const data = [
        // Sample data
        {
          id: 1,
          name: "Anissa Harris",
          type: "Sick Leave",
          from: "12/15/2024",
          to: "12/18/2024",
          applyDate: "12/10/2024",
          status: "Pending",
        },
      ];
      setPendingRequests(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-xl font-semibold text-blue-500 mb-4">
          Pending Leave Request
        </h1>

        {/* Pending Leave Request List */}
        <div className="bg-white shadow-md rounded-lg p-4">
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
                {pendingRequests.length === 0 ? (
                  <tr>
                    <td
                      className="py-2 px-4 text-center text-gray-500 font-medium"
                      colSpan="6"
                    >
                      No Data Available In Table
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
