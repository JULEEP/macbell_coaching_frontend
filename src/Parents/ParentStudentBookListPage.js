import React from "react";
import ParentSidebar from "./ParentSidebar";

const ParentStudentBookListPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Book List Title */}
        <h1 className="text-xl font-semibold text-blue-500 mb-6">Book List</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xs font-medium text-blue-500 mb-4">All Books</h2>

          {/* Book List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Book Title</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Book No</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">ISBN No</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Category</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Subject</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Publisher Name</th>
                  <th className="px-4 py-2 text-left text-xs font-normal text-gray-700">Author Name</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center text-xs text-gray-600">
                    No Data Available In Table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 text-xs text-gray-600 text-center">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentStudentBookListPage;
