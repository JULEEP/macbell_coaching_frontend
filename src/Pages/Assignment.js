import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-assignment');
        if (response.data) {
          setAssignments(response.data);
        }
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  const filteredAssignments = assignments.filter(
    (assignment) =>
      (assignment.assignmentTitle && assignment.assignmentTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (assignment.subject && assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Assignment List</h1>

        {/* Quick Search */}
        <div className="mb-4 flex items-center gap-4">
          <label htmlFor="search" className="text-gray-600 text-sm">Quick Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Search by title or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2">Assignment Title</th>
                <th className="text-left px-4 py-2">Subject</th>
                <th className="text-left px-4 py-2">Due Date</th>
                <th className="text-left px-4 py-2">Available For</th>
                <th className="text-left px-4 py-2">Class (Section)</th>
                <th className="text-left px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment, index) => (
                  <tr key={assignment._id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{assignment.assignmentTitle || 'N/A'}</td>
                    <td className="px-4 py-2">{assignment.subject || 'N/A'}</td>
                    <td className="px-4 py-2">
                      {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 py-2">{assignment.availableFor || 'N/A'}</td>
                    <td className="px-4 py-2">
                      {assignment.class || 'N/A'} ({assignment.section || 'N/A'})
                    </td>
                    <td className="px-4 py-2">{assignment.description || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                    No assignments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignmentList;
