import React, { useState } from "react";

const BankPayment = () => {
  const [criteria, setCriteria] = useState({
    dateRange: "",
    class: "",
    section: "",
    status: "",
    search: "",
  });

  const [paymentList] = useState([]); // Initially empty, simulates no data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  return (
    <div className="p-6 space-y-6 shadow-lg bg-white rounded-lg">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Bank Payment</h1>

      {/* Select Criteria */}
      <div className="flex gap-6 items-center">
        {/* Date Range */}
        <div className="w-1/4">
          <label className="block text-sm text-gray-600 mb-1">Date Range</label>
          <input
            type="text"
            name="dateRange"
            placeholder="12/09/2024 - 12/16/2024"
            value={criteria.dateRange}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Class */}
        <div className="w-1/4">
          <label className="block text-sm text-gray-600 mb-1">Class</label>
          <select
            name="class"
            value={criteria.class}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Class</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
          </select>
        </div>

        {/* Section */}
        <div className="w-1/4">
          <label className="block text-sm text-gray-600 mb-1">Section</label>
          <select
            name="section"
            value={criteria.section}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-1/4">
          <label className="block text-sm text-gray-600 mb-1">Status</label>
          <select
            name="status"
            value={criteria.status}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Bank Payment List */}
      <div className="mt-6">
        <h2 className="text-lg text-gray-600 mb-4">Bank Payment List</h2>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={criteria.search}
            onChange={handleInputChange}
            className="w-1/3 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Student Name</th>
                <th className="px-4 py-2 text-left">View Transaction</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Note</th>
                <th className="px-4 py-2 text-left">File</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentList.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                paymentList.map((payment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{payment.studentName}</td>
                    <td className="px-4 py-2">{payment.viewTransaction}</td>
                    <td className="px-4 py-2">{payment.date}</td>
                    <td className="px-4 py-2">{payment.amount}</td>
                    <td className="px-4 py-2">{payment.note}</td>
                    <td className="px-4 py-2">{payment.file}</td>
                    <td className="px-4 py-2">{payment.status}</td>
                    <td className="px-4 py-2">
                      <button className="text-purple-600 hover:text-purple-800">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Showing Entries */}
        <div className="mt-4 text-gray-500 text-sm">
          Showing 0 to 0 of 0 entries
        </div>
      </div>
    </div>
  );
};

export default BankPayment;
