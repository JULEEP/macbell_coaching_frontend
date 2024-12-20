import React from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildStudentHomeworkList = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
    {/* Sidebar */}
    <div className="w-64 sticky top-0 h-screen">
      <ParentSidebar />
    </div>

    {/* Main Content */}
    <div className="flex-grow p-6 overflow-y-auto">
        {/* Title Section */}
        <h1 className="text-xl font-medium text-blue-500 mb-6">
          My Child Homework List
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
                    Subject
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Marks
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Homework Date
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Submission Date
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Evaluation Date
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Obtained Marks
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Status
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Row */}
                <tr>
                  <td className="px-2 py-1 text-sm text-gray-600">Bangla</td>
                  <td className="px-2 py-1 text-sm text-gray-600">50</td>
                  <td className="px-2 py-1 text-sm text-gray-600">10-Dec-24</td>
                  <td className="px-2 py-1 text-sm text-gray-600">12-Dec-24</td>
                  <td className="px-2 py-1 text-sm text-gray-600">15-Dec-24</td>
                  <td className="px-2 py-1 text-sm text-gray-600">45</td>
                  <td className="px-2 py-1 text-sm text-gray-600">Completed</td>
                  <td className="px-2 py-1 text-sm text-gray-600">
                    <button className="text-blue-500 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
                {/* No Data Row */}
                <tr>
                  <td
                    className="px-2 py-1 text-center text-sm text-gray-500"
                    colSpan="8"
                  >
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination/Entries Section */}
          <div className="mt-3 text-gray-500 text-sm">
            Showing 1 to 1 of 1 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildStudentHomeworkList;
