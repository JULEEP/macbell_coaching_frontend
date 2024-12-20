import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const MyChildLessonPlanOverviewStudent = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-xl font-medium text-blue-500 mb-6">
          My Child Lesson Plan Overview
        </h1>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-medium text-gray-800">Nine (A)</h2>
          <div className="my-3 border-t border-gray-300"></div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Lesson
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Topic
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Sub Topic
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Completed Date
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Upcoming Date
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* No data row */}
                <tr>
                  <td
                    className="px-2 py-1 text-center text-sm text-gray-500"
                    colSpan="6"
                  >
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-3 text-gray-500 text-sm">
            Showing 0 to 0 of 0 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildLessonPlanOverviewStudent;
