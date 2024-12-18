import React, { useState } from "react";

const IssueBooks = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-xl text-gray-700 mb-4">Issue Books</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded p-2 w-1/3 focus:outline-none focus:border-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Member ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Full Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Member Type</th>
              <th className="px-4 py-2 text-left text-gray-600">Phone</th>
              <th className="px-4 py-2 text-left text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No Data Available In Table
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-gray-500 text-sm">
        Showing 0 to 0 of 0 entries
      </div>
    </div>
  );
};

export default IssueBooks;
