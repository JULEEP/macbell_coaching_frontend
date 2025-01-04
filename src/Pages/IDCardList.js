import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile sidebar toggle icons

const IdCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [idCardList, setIdCardList] = useState([
    // Example Data
    { id: 1, title: 'Employee', role: 'Developer' },
    { id: 2, title: 'Admin', role: 'Manager' },
    { id: 3, title: 'Intern', role: 'Trainee' },
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = idCardList.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Mobile View: Header and Sidebar Toggle Icon */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">ID Card List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-8">ID Card List</h2>
        
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
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-gray-600">SL</th>
                <th className="px-4 py-2 text-gray-600">Title</th>
                <th className="px-4 py-2 text-gray-600">Role</th>
                <th className="px-4 py-2 text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                filteredList.map((card, index) => (
                  <tr key={card.id} className="border-t border-gray-300">
                    <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-600">{card.title}</td>
                    <td className="px-4 py-2 text-gray-600">{card.role}</td>
                    <td className="px-4 py-2 text-gray-600">
                      <button className="text-purple-600 hover:text-purple-800">Edit</button>
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

export default IdCardList;
