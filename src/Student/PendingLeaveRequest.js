import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const PendingLeaveRequest = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Pending Leave Request</h1>

        {/* Pending Leave Request List */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Pending Leave Request List</h2>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">From</th>
                  <th className="py-3 px-4">To</th>
                  <th className="py-3 px-4">Apply Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* No Data Row */}
                <tr>
                  <td
                    className="py-3 px-4 text-center text-gray-600 font-medium"
                    colSpan="6"
                  >
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Footer Section */}
            <div className="mt-4 text-sm text-gray-600">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingLeaveRequest;
