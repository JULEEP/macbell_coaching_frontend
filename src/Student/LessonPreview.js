import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const LessonPlanOverviewStudent = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Lesson Plan Overview</h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Nine (A)</h2>
          <div className="my-4 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Lesson</th>
                  <th className="px-4 py-2 text-left text-gray-400">Topic</th>
                  <th className="px-4 py-2 text-left text-gray-400">Sub Topic</th>
                  <th className="px-4 py-2 text-left text-gray-400">Completed Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Upcoming Date</th>
                  <th className="px-4 py-2 text-left text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
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
            Showing 0 to 0 of 0 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanOverviewStudent;
