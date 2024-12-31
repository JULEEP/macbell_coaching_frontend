import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const AssignSubjectPage = () => {
  const [formData, setFormData] = useState({
    className: '',
    sectionName: '',
    teacher: '',
    subject: '',
  });

  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Fetch dropdown data for class, section, teacher, and subject
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const classResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        setClasses(classResponse.data.classes || []);

        const sectionResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(sectionResponse.data.sections || []);

        const teacherResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-teacher');
        const teacherData = teacherResponse.data.data.map((teacher) => teacher.teacher);
        setTeachers(teacherData || []);

        const subjectResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-subjects-names');
        const uniqueSubjects = [...new Set(subjectResponse.data.subjectNames.filter((name) => name))];
        setSubjects(uniqueSubjects || []);

        const assignmentsResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-assign-subject');
        setAssignments(assignmentsResponse.data.data || []);
      } catch (error) {
        setError(error.message || 'Failed to fetch dropdown data');
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

  const handleAssignSubject = async () => {
    setError('');
    setSuccess('');

    const payload = {
      class: formData.className,
      section: formData.sectionName,
      subject: formData.subject,
      teacher: formData.teacher,
    };

    try {
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/assign-subject', payload);
      setSuccess(response.data.message || 'Subject teacher assigned successfully.');
    } catch (error) {
      setError(error.response?.data?.message || 'Error assigning subject teacher.');
    }
  };

  const currentRecords = assignments.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const totalPages = Math.ceil(assignments.length / recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="bg-white p-6 rounded-md shadow-lg mx-auto">
          <h2 className="text-lg text-gray-700 mb-4">Assign Subject to Teacher</h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form className="space-y-4">
            {/* Dropdowns for Class, Section, Teacher, and Subject */}
            <div className="flex gap-4">
              <div className="w-1/4">
                <label htmlFor="className" className="text-sm text-gray-600">Class *</label>
                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Class</option>
                  {classes.map((classOption, index) => (
                    <option key={index} value={classOption.className}>{classOption.className}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/4">
                <label htmlFor="sectionName" className="text-sm text-gray-600">Section *</label>
                <select
                  id="sectionName"
                  name="sectionName"
                  value={formData.sectionName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Section</option>
                  {sections.map((sectionOption, index) => (
                    <option key={index} value={sectionOption.name}>{sectionOption.name}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/4">
                <label htmlFor="teacher" className="text-sm text-gray-600">Teacher *</label>
                <select
                  id="teacher"
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Teacher</option>
                  {teachers.map((teacherOption, index) => (
                    <option key={index} value={teacherOption}>{teacherOption}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/4">
                <label htmlFor="subject" className="text-sm text-gray-600">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subjectOption, index) => (
                    <option key={index} value={subjectOption}>{subjectOption}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Assign Subject Button */}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleAssignSubject}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Assign Subject
              </button>
            </div>
          </form>

          {/* Assignment Table */}
          <div className="mt-8">
            <h3 className="text-lg text-gray-700 mb-4">Assigned Subjects</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Class</th>
                  <th className="border border-gray-300 p-2">Section</th>
                  <th className="border border-gray-300 p-2">Subject</th>
                  <th className="border border-gray-300 p-2">Teacher</th>
                  <th className="border border-gray-300 p-2">Assigned On</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((assignment, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{assignment.class}</td>
                    <td className="border border-gray-300 p-2">{assignment.section}</td>
                    <td className="border border-gray-300 p-2">{assignment.subject}</td>
                    <td className="border border-gray-300 p-2">{assignment.teacher}</td>
                    <td className="border border-gray-300 p-2">
                      {new Date(assignment.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end mt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 mx-1 ${currentPage === page
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                    } rounded-md`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignSubjectPage;
