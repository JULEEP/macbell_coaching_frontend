import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios'; // Ensure you have axios imported

const AssignClassTeacherPage = () => {
  const [formData, setFormData] = useState({
    className: '',
    sectionName: '',
    teacher: '', // Changed to "teacher" instead of "teacherName"
  });

  const [classTeacherAssignments, setClassTeacherAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Dropdown options states
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [assignmentsPerPage] = useState(5);

  // Fetch data for classes, sections, and teachers on component mount
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        // Fetch classes
        const classResponse = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        const classData = await classResponse.json();
        if (classResponse.ok) {
          setClasses(classData.classes || []);
        } else {
          throw new Error('Failed to fetch classes');
        }

        // Fetch sections using axios
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(response.data.sections || []); // Set sections

        // Fetch teachers
        const teacherResponse = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/get-teacher');
        const teacherData = await teacherResponse.json();
        if (teacherResponse.ok) {
          // Extract only the teacher names
          const teacherNames = teacherData.data.map((teacher) => teacher.teacher); // Extracting only the teacher name
          setTeachers(teacherNames || []);
        } else {
          throw new Error('Failed to fetch teachers');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDropdownData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveAssignment = async () => {
    setError('');
    if (formData.className && formData.sectionName && formData.teacher) {
      setIsLoading(true);
      try {
        const response = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/assign-teacher', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            class: formData.className,
            section: formData.sectionName,
            teacher: formData.teacher,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to assign class teacher.');
        }

        const data = await response.json();
        setClassTeacherAssignments([
          ...classTeacherAssignments,
          {
            id: classTeacherAssignments.length + 1, 
            className: formData.className,
            sectionName: formData.sectionName,
            teacherName: formData.teacher,
          },
        ]);
        setFormData({ className: '', sectionName: '', teacher: '' }); // Clear the form
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

  // Pagination logic
  const indexOfLastAssignment = currentPage * assignmentsPerPage;
  const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
  const currentAssignments = classTeacherAssignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 ml-64">
        <div className="flex gap-6">
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
                  {classes.length > 0 ? (
                    classes.map((classOption, index) => (
                      <option key={index} value={classOption.className}>{classOption.className}</option>
                    ))
                  ) : (
                    <option value="">Loading Classes...</option>
                  )}
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
                  {sections.length > 0 ? (
                    sections.map((sectionOption, index) => (
                      <option key={index} value={sectionOption.name}>{sectionOption.name}</option>
                    ))
                  ) : (
                    <option value="">Loading Sections...</option>
                  )}
                </select>
              </div>

              {/* Teacher Dropdown */}
              <div>
                <label htmlFor="teacher" className="text-sm text-gray-600">Teacher *</label>
                <select
                  id="teacher"
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Teacher</option>
                  {teachers.length > 0 ? (
                    teachers.map((teacher, index) => (
                      <option key={index} value={teacher}>{teacher}</option>
                    ))
                  ) : (
                    <option value="">Loading Teachers...</option>
                  )}
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
                {currentAssignments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  currentAssignments.map((assignment) => (
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

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-purple-600 text-white rounded-md mr-2"
              >
                Prev
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage * assignmentsPerPage >= classTeacherAssignments.length}
                className="px-4 py-2 bg-purple-600 text-white rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignClassTeacherPage;
