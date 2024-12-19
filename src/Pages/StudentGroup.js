import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StudentGroup = () => {
  const [groupName, setGroupName] = useState(""); // State for group name input
  const [studentGroups, setStudentGroups] = useState([]); // State for storing student groups

  const handleSaveGroup = () => {
    if (groupName) {
      setStudentGroups([
        ...studentGroups,
        { groupName, students: Math.floor(Math.random() * 100) + 1 }, // Dummy student count
      ]);
      setGroupName(""); // Clear input after saving
    }
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Student Group</h1>

      <div className="flex gap-6">
        {/* Add Student Group Form */}
        <div className="flex flex-col w-[300px] bg-white p-6 shadow-md rounded">
          <h2 className="text-lg text-gray-700 mb-4">Add Student Group</h2>

          {/* Group Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Group *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          {/* Save Group Button */}
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
            onClick={handleSaveGroup}
          >
            Save Group
          </button>
        </div>

        {/* Student Group List */}
        <div className="flex-1 bg-white p-6 shadow-md rounded">
          <h2 className="text-lg text-gray-700 mb-4">Student Group List</h2>

          {/* Search */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Search</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Search group"
            />
          </div>

          {/* Student Group Table */}
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">Group</th>
                <th className="px-4 py-2 text-left border-b">Students</th>
                <th className="px-4 py-2 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentGroups.length > 0 ? (
                studentGroups.map((group, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b">{group.groupName}</td>
                    <td className="px-4 py-2 border-b">{group.students}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Info */}
          <div className="text-sm text-gray-500 mt-4">
            Showing 0 to 0 of {studentGroups.length} entries
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentGroup;
