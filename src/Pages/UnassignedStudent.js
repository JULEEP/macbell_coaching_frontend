import React from "react";
import Sidebar from "./Sidebar";

const UnassignedStudentList = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Unassigned Student List</h1>

      {/* Table Section */}
      <div className="bg-white p-6 shadow-md rounded space-y-6">
        <h2 className="text-lg text-gray-700 mb-4">Unassigned Student Records</h2>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Admission No</th>
              <th className="px-4 py-2 text-left border-b">Roll No</th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Father Name</th>
              <th className="px-4 py-2 text-left border-b">Date Of Birth</th>
              <th className="px-4 py-2 text-left border-b">Gender</th>
              <th className="px-4 py-2 text-left border-b">Type</th>
              <th className="px-4 py-2 text-left border-b">Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* When there's no data, show this */}
            <tr>
              <td colSpan="8" className="px-4 py-2 text-center text-gray-500 border-b">
                No Data Available In Table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination Info */}
        <div className="text-sm text-gray-500 mt-4">
          Showing 0 to 0 of 0 entries
        </div>
      </div>
    </div>
    </div>
  );
};

export default UnassignedStudentList;
