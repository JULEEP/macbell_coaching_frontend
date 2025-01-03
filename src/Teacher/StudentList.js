import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TeacherSidebar from "./TeacherSidebar";
import axios from "axios";

const TeacherStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [filedComplaints, setFiledComplaints] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const openComplaintModal = (student) => {
    setSelectedStudent(student);
    setComplaintTitle("");
    setComplaintDescription("");
  };

  const closeComplaintModal = () => {
    setSelectedStudent(null);
  };

  const submitComplaint = async () => {
    try {
      await axios.post(
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <TeacherSidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Teacher Dashboard</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          <h1 className="text-xl font-bold text-purple-700 mb-6 hidden lg:block">
            Teacher Dashboard
          </h1>

          {/* Filter Section */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Filter Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="classFilter" className="block text-gray-600 mb-2">
                  Class
                </label>
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

              <div>
                <label htmlFor="sectionFilter" className="block text-gray-600 mb-2">
                  Section
                </label>
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
                              {filedComplaints.includes(student.id)
                                ? "Complaint Added"
                                : "Add Complaint"}
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
      </div>

      {/* Complaint Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Add Complaint for {selectedStudent.name}
            </h2>
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
