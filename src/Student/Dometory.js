import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const DormitoryPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Dormitory Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dormitory</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Dormitory Rooms List</h2>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Dormitory Rooms List Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Dormitory</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Room Number</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Room Type</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">No. of Beds</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Cost Per Bed</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty data message */}
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center text-sm text-gray-600">
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

export default DormitoryPage;
