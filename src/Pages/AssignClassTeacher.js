import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AssignClassTeacherPage = () => {
  const [formData, setFormData] = useState({
    className: '',
    sectionName: '',
    teacherName: '',
  });

  const [classTeacherAssignments, setClassTeacherAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // To handle API loading state
  const [error, setError] = useState(''); // To handle API errors

  const classOptions = ['Class A', 'Class B', 'Class C']; // Example class options
  const sectionOptions = ['Section A', 'Section B', 'Section C']; // Example section options
  const teacherOptions = ['Teacher 1', 'Teacher 2', 'Teacher 3']; // Example teacher options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveAssignment = async () => {
    setError(''); // Clear any previous errors
    if (formData.className && formData.sectionName && formData.teacherName) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4000/api/admin/assign-teacher', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            class: formData.className,
            section: formData.sectionName,
            teacher: formData.teacherName,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to assign class teacher.');
        }

        const data = await response.json();
        // Update the local state with the new assignment
        setClassTeacherAssignments([
          ...classTeacherAssignments,
          {
            id: classTeacherAssignments.length + 1, // Temporary ID for the local state
            className: formData.className,
            sectionName: formData.sectionName,
            teacherName: formData.teacherName,
          },
        ]);
        setFormData({ className: '', sectionName: '', teacherName: '' }); // Reset the form
      } catch (error) {
        setError(error.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please fill in all fields.');
    }
  };

  const handleRemoveAssignment = (id) => {
    setClassTeacherAssignments(classTeacherAssignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="flex gap-6">
          {/* Form Section */}
          <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 mb-4">Assign Class Teacher</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form className="space-y-4">
              {/* Class Dropdown */}
              <div>
                <label htmlFor="className" className="text-sm text-gray-600">Class *</label>
                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Class</option>
                  {classOptions.map((classOption, index) => (
                    <option key={index} value={classOption}>{classOption}</option>
                  ))}
                </select>
              </div>

              {/* Section Dropdown */}
              <div>
                <label htmlFor="sectionName" className="text-sm text-gray-600">Section *</label>
                <select
                  id="sectionName"
                  name="sectionName"
                  value={formData.sectionName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Section</option>
                  {sectionOptions.map((sectionOption, index) => (
                    <option key={index} value={sectionOption}>{sectionOption}</option>
                  ))}
                </select>
              </div>

              {/* Teacher Dropdown */}
              <div>
                <label htmlFor="teacherName" className="text-sm text-gray-600">Teacher *</label>
                <select
                  id="teacherName"
                  name="teacherName"
                  value={formData.teacherName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Teacher</option>
                  {teacherOptions.map((teacherOption, index) => (
                    <option key={index} value={teacherOption}>{teacherOption}</option>
                  ))}
                </select>
              </div>

              {/* Save Assignment Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSaveAssignment}
                  className={`px-6 py-2 rounded-md text-white ${isLoading ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Class Teacher'}
                </button>
              </div>
            </form>
          </div>

          {/* Class Teacher List Section */}
          <div className="w-2/3 bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg text-gray-700 mb-4">Class Teacher List</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">Class</th>
                  <th className="px-4 py-2 text-gray-600">Section</th>
                  <th className="px-4 py-2 text-gray-600">Teacher</th>
                  <th className="px-4 py-2 text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {classTeacherAssignments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  classTeacherAssignments.map((assignment, index) => (
                    <tr key={assignment.id} className="border-t border-gray-300">
                      <td className="px-4 py-2 text-gray-600">{assignment.className}</td>
                      <td className="px-4 py-2 text-gray-600">{assignment.sectionName}</td>
                      <td className="px-4 py-2 text-gray-600">{assignment.teacherName}</td>
                      <td className="px-4 py-2 text-gray-600">
                        <button
                          onClick={() => handleRemoveAssignment(assignment.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
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

export default AssignClassTeacherPage;
