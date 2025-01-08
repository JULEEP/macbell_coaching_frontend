import React, { useState } from 'react';
import Sidebar from './Sidebar';

const GeneratePayrollPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    month: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Search triggered with:', formData);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Generate Payroll</h1>

      {/* Select Criteria Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Select Criteria</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
          {/* Role Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
              {/* Add more roles as needed */}
            </select>
          </div>

          {/* Month Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          {/* Year Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              {/* Add more years as needed */}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={handleSearch}
              className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Display Payroll Results (if any) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Payroll List</h2>
        {/* This part will show payroll records if available */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Staff No</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Month</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Year</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Salary</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample rows of payroll */}
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 text-center">S001</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">John Doe</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Teacher</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">January</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">2024</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">$3000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 text-center">S002</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Jane Smith</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Admin</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">February</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">2024</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">$2500</td>
              </tr>
              {/* Add more payroll rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GeneratePayrollPage;
