import React, { useState } from "react";

const AddExpensePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    accountHead: "",
    paymentMethod: "",
    date: "",
    amount: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add Expense</h1>

      <div className="flex gap-8">
        {/* Left Side: Add Expense Form */}
        <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Add Expense</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* A/C Head */}
            <div>
              <label className="block text-gray-700">A/C Head *</label>
              <select
                name="accountHead"
                value={formData.accountHead}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              >
                <option value="">Select A/C Head</option>
                <option value="Office Expenses">Office Expenses</option>
                <option value="Travel">Travel</option>
                <option value="Utilities">Utilities</option>
              </select>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-gray-700">Payment Method *</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              >
                <option value="">Select Method</option>
                <option value="Cash">Cash</option>
                <option value="Bank">Bank</option>
                <option value="Card">Card</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-gray-700">Amount *</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700">File</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                onChange={handleFileChange}
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                (PDF, DOC, DOCX, JPG, JPEG, PNG, TXT are allowed for upload)
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              ></textarea>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Save Expense
            </button>
          </form>
        </div>

        {/* Right Side: Expense List */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 max-h-80 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">Expense List</h2>
            <input
              type="text"
              placeholder="Quick Search"
              className="px-3 py-2 border rounded-md w-1/3"
            />
          </div>
          <table className="min-w-full border border-gray-200 text-sm">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
                <th className="py-2 px-4 text-left border-b">SL</th>
                <th className="py-2 px-4 text-left border-b">Name</th>
                <th className="py-2 px-4 text-left border-b">Payment Method</th>
                <th className="py-2 px-4 text-left border-b">Date</th>
                <th className="py-2 px-4 text-left border-b">A/C Head</th>
                <th className="py-2 px-4 text-left border-b">Amount</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-8">
                  No Data Available In Table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-gray-600 text-sm">
            Showing 0 to 0 of 0 entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpensePage;
