import React, { useState } from "react";

const BookCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 shadow-lg bg-white rounded-lg space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Book Categories</h1>

      <div className="flex gap-6">
        {/* Left Side: Add Book Category Form */}
        <div className="w-1/3 p-4 bg-gray-100 shadow rounded">
          <h2 className="text-lg text-gray-600 mb-4">Add Book Categories</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category Name *
              </label>
              <input
                type="text"
                placeholder="Enter category name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded"
            >
              Save Category
            </button>
          </form>
        </div>

        {/* Right Side: Book Category List */}
        <div className="w-2/3 p-4 bg-gray-100 shadow rounded">
          <h2 className="text-lg text-gray-600 mb-4">Category List</h2>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded p-2 w-1/2 focus:outline-none focus:border-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">SL</th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Category Title
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
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
    </div>
  );
};

export default BookCategories;
