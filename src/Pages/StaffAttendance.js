import React, { useState } from 'react';
import Sidebar from './Sidebar';

const StaffAttendancePage = () => {
  const [formData, setFormData] = useState({
    role: '',
    attendanceDate: '',
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
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Staff Attendance</h1>

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

          {/* Attendance Date */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Attendance Date</label>
            <input
              type="date"
              name="attendanceDate"
              value={formData.attendanceDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
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

      {/* Display Results (if any) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Attendance List</h2>
        {/* This part will show attendance records if available */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Staff No</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Date</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample rows of staff attendance */}
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 text-center">S001</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">John Doe</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Teacher</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">12/17/2024</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Present</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 text-center">S002</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Jane Smith</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Admin</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">12/17/2024</td>
                <td className="px-4 py-2 text-sm text-gray-700 text-center">Absent</td>
              </tr>
              {/* Add more attendance rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StaffAttendancePage;
