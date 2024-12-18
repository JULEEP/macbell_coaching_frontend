import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentHomeworkList = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Homework List</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Nine (A)</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Subject</th>
                  <th className="px-4 py-2 text-left text-gray-400">Marks</th>
                  <th className="px-4 py-2 text-left text-gray-400">Homework Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Submission Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Evaluation Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Obtained Marks</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Row */}
                <tr>
                  <td className="px-4 py-2 text-gray-600">Bangla</td>
                  <td className="px-4 py-2 text-gray-600">50</td>
                  <td className="px-4 py-2 text-gray-600">10-Dec-24</td>
                  <td className="px-4 py-2 text-gray-600">12-Dec-24</td>
                  <td className="px-4 py-2 text-gray-600">15-Dec-24</td>
                  <td className="px-4 py-2 text-gray-600">45</td>
                </tr>
                {/* No data row */}
                <tr>
                  <td className="px-4 py-2 text-center text-gray-600" colSpan="6">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing 1 to 1 of 1 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHomeworkList;
