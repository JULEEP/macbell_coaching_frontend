import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ResultPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Result</h1>

        {/* Result Section */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Result List</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Total Marks</th>
                  <th className="py-3 px-4">Obtained Marks</th>
                  <th className="py-3 px-4">Result</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
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
            {/* Footer */}
            <div className="mt-4 text-sm text-gray-600">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
