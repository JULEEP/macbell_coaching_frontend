import React, { useState } from "react";
import Sidebar from "./Sidebar";

const BankAccountPage = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
    openingBalance: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bank Account Submitted: ", formData);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Bank Account
      </h1>

      <div className="flex gap-8">
        {/* Left Side: Add Bank Account Form */}
        <div className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Add Bank Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Bank Name */}
            <div>
              <label className="block text-gray-700">Bank Name *</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Account Name */}
            <div>
              <label className="block text-gray-700">Account Name *</label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-gray-700">Account Number *</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-gray-700">Account Type</label>
              <input
                type="text"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Opening Balance */}
            <div>
              <label className="block text-gray-700">Opening Balance *</label>
              <input
                type="number"
                name="openingBalance"
                value={formData.openingBalance}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-gray-700">Note</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border rounded-md text-gray-700"
              ></textarea>
            </div>

            {/* Save Account Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
            >
              Save Account
            </button>
          </form>
        </div>

        {/* Right Side: Bank Account List */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              Bank Account List
            </h2>
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
                <th className="py-2 px-4 text-left border-b">Bank Name</th>
                <th className="py-2 px-4 text-left border-b">Account Name</th>
                <th className="py-2 px-4 text-left border-b">
                  Opening Balance
                </th>
                <th className="py-2 px-4 text-left border-b">
                  Current Balance
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">No Data Available</td>
                <td className="py-2 px-4 border-b">--</td>
                <td className="py-2 px-4 border-b">--</td>
                <td className="py-2 px-4 border-b">--</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-gray-600 text-sm">
            Showing 0 to 0 of 0 entries
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BankAccountPage;
