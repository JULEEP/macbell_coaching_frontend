import React, { useState } from 'react';

const IdCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [idCardList, setIdCardList] = useState([
    // Example Data
    { id: 1, title: 'Employee', role: 'Developer' },
    { id: 2, title: 'Admin', role: 'Manager' },
    { id: 3, title: 'Intern', role: 'Trainee' },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = idCardList.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2 w-1/4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg text-gray-700 mb-4">ID Card List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">SL</th>
              <th className="px-4 py-2 text-gray-600">Title</th>
              <th className="px-4 py-2 text-gray-600">Role</th>
              <th className="px-4 py-2 text-gray-600">Action</th>
            </tr>
          </thead>
              <tr>
                <td colSpan="4" className="text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
        </table>
      </div>
    </div>
  );
};

export default IdCardList;
