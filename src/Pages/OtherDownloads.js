import React from 'react';

const OtherDownloadsList = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Other Downloads List</h1>

      {/* Quick Search */}
      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="search" className="text-gray-600 text-sm">Quick Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Search by title or type..."
          className="border border-gray-300 rounded-md p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">SI</th>
              <th className="text-left px-4 py-2">Content Title</th>
              <th className="text-left px-4 py-2">Type</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Available for</th>
              <th className="text-left px-4 py-2">Class (Section)</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* No Data Row */}
            <tr>
              <td className="px-4 py-2 text-center text-gray-500" colSpan="7">
                No Data Available In Table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="p-4 text-gray-600 text-sm">
          <p>Showing 0 to 0 of 0 entries</p>
        </div>
      </div>
    </div>
  );
};

export default OtherDownloadsList;
