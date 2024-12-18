import React, { useState } from "react";

const ChartOfAccountPage = () => {
  const [formData, setFormData] = useState({
    head: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Chart of Account Added: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Chart Of Account
      </h1>

      <div className="flex gap-8">
        {/* Left Side: Add Chart of Account Form */}
        <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Add Chart Of Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Head */}
            <div>
              <label className="block text-gray-700">Head *</label>
              <input
                type="text"
                name="head"
                value={formData.head}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-gray-700">Type *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              >
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            {/* Save Head Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
            >
              Save Head
            </button>
          </form>
        </div>

        {/* Right Side: Chart Of Account List */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              Chart Of Account List
            </h2>
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border rounded-md w-1/3"
            />
          </div>
          <table className="min-w-full border border-gray-200 text-sm">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
                <th className="py-2 px-4 text-left border-b">Name</th>
                <th className="py-2 px-4 text-left border-b">Type</th>
                <th className="py-2 px-4 text-left border-b">Action</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Fees Collection</td>
                <td className="py-2 px-4 border-b">Income</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              {/* Placeholder row */}
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-8">
                  Showing 1 to 1 of 1 entries
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccountPage;
