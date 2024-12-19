import React, { useState } from 'react';
import Sidebar from './Sidebar';

const DepartmentPage = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR' },
    { id: 2, name: 'Engineering' },
  ]);
  const [search, setSearch] = useState('');

  // Filtered departments based on search input
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveDepartment = () => {
    if (departmentName) {
      const newDepartment = { id: departments.length + 1, name: departmentName };
      setDepartments([...departments, newDepartment]);
      setDepartmentName('');
    }
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Departments</h1>

      <div className="flex gap-6">
        {/* Add Department Form */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Department</h2>

          <div className="mb-4">
            <label htmlFor="departmentName" className="block text-sm text-gray-600 mb-1">Department Name *</label>
            <input
              type="text"
              id="departmentName"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter department name"
            />
          </div>

          <button
            onClick={handleSaveDepartment}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
          >
            Save Department
          </button>
        </div>

        {/* Department List */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Department List</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Search by Department"
            />
          </div>

          {/* Department Table */}
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">SL</th>
                <th className="px-4 py-2 text-left">Department Name</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4">No Data Available</td>
                </tr>
              ) : (
                filteredDepartments.map((department, index) => (
                  <tr key={department.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{department.name}</td>
                    <td className="px-4 py-2 text-center">
                      <button className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DepartmentPage;
