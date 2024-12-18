import React, { useState } from 'react';

const LeaveDefinePage = () => {
  const [role, setRole] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [days, setDays] = useState('');
  const [leaveDefines, setLeaveDefines] = useState([]);

  const roles = ['Admin', 'Teacher', 'Staff']; // Replace with dynamic roles
  const leaveTypes = ['Sick Leave', 'Casual Leave', 'Annual Leave']; // Replace with dynamic leave types

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLeaveDefine = {
      user: 'John Doe', // Replace with dynamic user info
      role,
      leaveType,
      days,
    };
    setLeaveDefines([...leaveDefines, newLeaveDefine]);
    // Reset form after adding
    setRole('');
    setLeaveType('');
    setDays('');
  };

  const handleSearch = (e) => {
    // Implement search functionality if needed
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-6">
      {/* Left side: Add Leave Define Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Leave Define</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Role Dropdown */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-600 mb-2">Role *</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Role</option>
                {roles.map((roleOption, index) => (
                  <option key={index} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Leave Type Dropdown */}
            <div>
              <label htmlFor="leaveType" className="block text-sm font-medium text-gray-600 mb-2">Leave Type *</label>
              <select
                id="leaveType"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Leave Type</option>
                {leaveTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Days Input */}
            <div>
              <label htmlFor="days" className="block text-sm font-medium text-gray-600 mb-2">Days *</label>
              <input
                type="number"
                id="days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter number of days"
                required
              />
            </div>

            {/* Save Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded mt-4 hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right side: Leave Define List */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Leave Define List</h2>

        {/* Quick Search */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Quick Search"
            className="w-1/2 border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Leave Define Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">User</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Leave Type</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Days</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveDefines.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4">
                    No Data Available
                  </td>
                </tr>
              ) : (
                leaveDefines.map((define, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{define.user}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{define.role}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{define.leaveType}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{define.days}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Showing {leaveDefines.length} entries
        </div>
      </div>
    </div>
  );
};

export default LeaveDefinePage;
