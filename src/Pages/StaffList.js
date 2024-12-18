import React, { useState } from 'react';

const StaffListPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    staffId: '',
    staffName: '',
  });

  const [staffList, setStaffList] = useState([
    {
      staffNo: 'S001',
      name: 'John Doe',
      role: 'Teacher',
      department: 'Math',
      designation: 'Senior Teacher',
      mobile: '1234567890',
      email: 'johndoe@example.com',
    },
    {
      staffNo: 'S002',
      name: 'Jane Smith',
      role: 'Admin',
      department: 'Administration',
      designation: 'Admin Manager',
      mobile: '0987654321',
      email: 'janesmith@example.com',
    },
    // Add more staff members here for demonstration
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    // Implement search logic based on staffId or staffName
    console.log('Search triggered with:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Staff List</h1>

      {/* Select Criteria and Search Section */}
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

          {/* Search By Staff ID */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Search By Staff ID</label>
            <input
              type="text"
              name="staffId"
              value={formData.staffId}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Search By Name */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-2">Search By Name</label>
            <input
              type="text"
              name="staffName"
              value={formData.staffName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={handleSearch}
              className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Staff List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Staff List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Staff No</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Role</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Department</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Designation</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Mobile</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Email</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.staffNo}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.role}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.department}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.designation}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.mobile}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{staff.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffListPage;
