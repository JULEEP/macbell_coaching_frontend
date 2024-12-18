import React, { useState } from 'react';

const LeaveTypePage = () => {
  const [typeName, setTypeName] = useState('');
  const [leaveTypes, setLeaveTypes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLeaveType = {
      typeName,
    };
    setLeaveTypes([...leaveTypes, newLeaveType]);
    setTypeName(''); // Reset the form input
  };

  const handleSearch = (e) => {
    // Implement search functionality if needed
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex gap-6">
      {/* Left side: Add Leave Type Form with rounded and small width */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full sm:w-80">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Leave Type</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Type Name Input */}
            <div>
              <label htmlFor="typeName" className="block text-sm font-medium text-gray-600 mb-2">Type Name *</label>
              <input
                type="text"
                id="typeName"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter leave type"
                required
              />
            </div>

            {/* Save Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700"
              >
                Save Type
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right side: Leave Type List */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full sm:w-2/3">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Leave Type List</h2>

        {/* Quick Search */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search Leave Type"
            className="w-1/2 border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Leave Type Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Type Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveTypes.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center text-gray-500 py-4">
                    No Data Available
                  </td>
                </tr>
              ) : (
                leaveTypes.map((leaveType, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{leaveType.typeName}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
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
          Showing {leaveTypes.length} entries
        </div>
      </div>
    </div>
  );
};

export default LeaveTypePage;
