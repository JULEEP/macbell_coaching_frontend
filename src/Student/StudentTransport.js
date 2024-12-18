import React from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const TransportPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Transport Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Transport</h1>

        <div className="flex items-start justify-between">
          {/* ID Card */}
          <div className="bg-white shadow-xl rounded-3xl p-6 w-64">
            <div className="border-2 border-gray-300 rounded-3xl p-6">
              {/* Profile Photo */}
              <div className="flex justify-center mb-4">
                <img
                src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png" // Replace with your logo
                alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
              </div>

              {/* Student ID Card Details */}
              <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">ID Card</h3>
              <div className="space-y-2">
                {/* Flex container to align key-value pairs */}
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Student Name:</span>
                  <span>Carter Bahringer</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Admission No:</span>
                  <span>29238</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Class:</span>
                  <span>Nine</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Section:</span>
                  <span>A</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Gender:</span>
                  <span>Male</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Details */}
          <div className="ml-6 flex-1 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Transport Details</h3>
            {/* Route and Vehicle Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Route</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty data message */}
                  <tr>
                    <td colSpan="2" className="px-4 py-2 text-center text-sm text-gray-600">
                      No Data Available In Table
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Pagination */}
              <div className="mt-4 text-sm text-gray-600 text-center">
                Showing 0 to 0 of 0 entries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;
