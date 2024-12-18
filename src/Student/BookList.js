import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentBookListPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Book List Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Book List</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">All Books</h2>

          {/* Book List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Book Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Book No</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ISBN No</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Subject</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Publisher Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Author Name</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-center text-sm text-gray-600">
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
  );
};

export default StudentBookListPage;
