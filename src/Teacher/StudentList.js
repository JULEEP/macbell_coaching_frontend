import React, { useState, useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";
import axios from "axios";

const TeacherStudentsPage = () => {
  const [students, setStudents] = useState([]); // Store all students
  const [filteredStudents, setFilteredStudents] = useState([]); // Filtered students based on filters
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error message
  const [classFilter, setClassFilter] = useState(""); // Class filter
  const [sectionFilter, setSectionFilter] = useState(""); // Section filter
  const [selectedStudent, setSelectedStudent] = useState(null); // Student for complaint
  const [complaintTitle, setComplaintTitle] = useState(""); // Complaint title
  const [complaintDescription, setComplaintDescription] = useState(""); // Complaint description
  const [filedComplaints, setFiledComplaints] = useState([]); // Track filed complaints

  // Fetch students data from API
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get("http://localhost:4000/api/teacher/students");
        const fetchedStudents = response.data.students.map((student) => ({
          id: student._id,
          name: `${student.firstName} ${student.lastName}`,
          roll: student.roll,
          class: student.studentClass,
          section: student.section,
        }));
        setStudents(fetchedStudents);
        setFilteredStudents(fetchedStudents);
      } catch (err) {
        setError("Failed to fetch students. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Handle filter changes
  const handleClassFilterChange = (event) => {
    const classValue = event.target.value;
    setClassFilter(classValue);
    filterStudents(classValue, sectionFilter);
  };

  const handleSectionFilterChange = (event) => {
    const sectionValue = event.target.value;
    setSectionFilter(sectionValue);
    filterStudents(classFilter, sectionValue);
  };

  // Filter students based on class and section
  const filterStudents = (classValue, sectionValue) => {
    let filtered = students;
    if (classValue) {
      filtered = filtered.filter((student) => student.class === classValue);
    }
    if (sectionValue) {
      filtered = filtered.filter((student) => student.section === sectionValue);
    }
    setFilteredStudents(filtered);
  };

  // Open complaint modal
  const openComplaintModal = (student) => {
    setSelectedStudent(student);
    setComplaintTitle("");
    setComplaintDescription("");
  };

  // Close complaint modal
  const closeComplaintModal = () => {
    setSelectedStudent(null);
  };

  // Submit complaint
  const submitComplaint = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/teacher/add-complaint/${selectedStudent.id}`,
        {
          title: complaintTitle,
          description: complaintDescription,
        }
      );
      setFiledComplaints([...filedComplaints, selectedStudent.id]);
      closeComplaintModal();
    } catch (err) {
      alert("Failed to file the complaint. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        {/* Title */}
        <h1 className="text-xl text-purple-800 mb-8">Students List</h1>

        {/* Filter Section */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Filter Students</h2>
          <div className="flex gap-4">
            {/* Class Filter */}
            <div className="flex-1">
              <label htmlFor="classFilter" className="block text-gray-600 mb-2">Class</label>
              <select
                id="classFilter"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                value={classFilter}
                onChange={handleClassFilterChange}
              >
                <option value="">All Classes</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
              </select>
            </div>

            {/* Section Filter */}
            <div className="flex-1">
              <label htmlFor="sectionFilter" className="block text-gray-600 mb-2">Section</label>
              <select
                id="sectionFilter"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                value={sectionFilter}
                onChange={handleSectionFilterChange}
              >
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>
          </div>
        </div>

        {/* Student List */}
        {loading ? (
          <p>Loading students...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Student List</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-50 rounded-lg">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Roll Number</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Section</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td className="py-3 px-4 text-gray-700">{student.name}</td>
                        <td className="py-3 px-4 text-gray-700">{student.roll}</td>
                        <td className="py-3 px-4 text-gray-700">{student.class}</td>
                        <td className="py-3 px-4 text-gray-700">{student.section}</td>
                        <td className="py-3 px-4 text-gray-700">
                          <button
                            className={`px-4 py-2 rounded-md text-white ${
                              filedComplaints.includes(student.id)
                                ? "bg-red-500"
                                : "bg-purple-500"
                            }`}
                            onClick={() => openComplaintModal(student)}
                          >
                            {filedComplaints.includes(student.id) ? "Complaint Added" : "Add Complaint"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-3 px-4 text-center text-gray-700">
                        No students found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Complaint Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">Add Complaint for {selectedStudent.name}</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                value={complaintTitle}
                onChange={(e) => setComplaintTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                rows="4"
                value={complaintDescription}
                onChange={(e) => setComplaintDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={closeComplaintModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-500 text-white rounded-md"
                onClick={submitComplaint}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherStudentsPage;
