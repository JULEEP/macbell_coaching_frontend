import React, { useState } from 'react';

const DesignationPage = () => {
  const [designationTitle, setDesignationTitle] = useState('');
  const [designations, setDesignations] = useState([
    { id: 1, title: 'Manager' },
    { id: 2, title: 'Developer' },
  ]);
  const [search, setSearch] = useState('');

  // Filtered designations based on search input
  const filteredDesignations = designations.filter((designation) =>
    designation.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveDesignation = () => {
    if (designationTitle) {
      const newDesignation = { id: designations.length + 1, title: designationTitle };
      setDesignations([...designations, newDesignation]);
      setDesignationTitle('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Designation</h1>

      <div className="flex gap-6">
        {/* Add Designation Form */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Designation</h2>

          <div className="mb-4">
            <label htmlFor="designationTitle" className="block text-sm text-gray-600 mb-1">Designation Title *</label>
            <input
              type="text"
              id="designationTitle"
              value={designationTitle}
              onChange={(e) => setDesignationTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter designation title"
            />
          </div>

          <button
            onClick={handleSaveDesignation}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
          >
            Save Designation
          </button>
        </div>

        {/* Designation List */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Designation List</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Search by Designation"
            />
          </div>

          {/* Designation Table */}
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">SL</th>
                <th className="px-4 py-2 text-left">Designation</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDesignations.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4">No Data Available</td>
                </tr>
              ) : (
                filteredDesignations.map((designation, index) => (
                  <tr key={designation.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{designation.title}</td>
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
  );
};

export default DesignationPage;
