import React from "react";

const BookList = () => {
  return (
    <div className="p-6 shadow-lg bg-white rounded-lg space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Book List</h1>

      {/* Book List Table */}
      <div className="p-4 bg-gray-100 rounded shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">SL</th>
                <th className="px-4 py-2 text-left text-gray-600">Book Title</th>
                <th className="px-4 py-2 text-left text-gray-600">Book No</th>
                <th className="px-4 py-2 text-left text-gray-600">ISBN No</th>
                <th className="px-4 py-2 text-left text-gray-600">Category</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Publisher Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Author Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
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
    </div>
  );
};

export default BookList;
