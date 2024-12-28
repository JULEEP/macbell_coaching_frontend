import React, { useState, useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";

const TeacherStudentsPage = () => {
  const [students, setStudents] = useState([]); // Store the list of students
  const [filteredStudents, setFilteredStudents] = useState([]); // Filtered students based on class or section
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error message state
  const [classFilter, setClassFilter] = useState(""); // Class filter
  const [sectionFilter, setSectionFilter] = useState(""); // Section filter

  // Example: Static student data (you can replace it with a fetch API call)
  const sampleStudents = [
    { id: 1, name: "John Doe", roll: "A123", class: "5", section: "A" },
    { id: 2, name: "Jane Smith", roll: "A124", class: "5", section: "A" },
    { id: 3, name: "Alice Brown", roll: "B123", class: "6", section: "B" },
    { id: 4, name: "Bob White", roll: "B124", class: "6", section: "B" },
  ];

  // Function to fetch students data (simulate with static data for now)
  useEffect(() => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      setStudents(sampleStudents); // Simulating data fetch
      setFilteredStudents(sampleStudents); // Initially showing all students
      setLoading(false);
    }, 1000);
  }, []);

  // Handle filter changes
  const handleClassFilterChange = (event) => {
    setClassFilter(event.target.value);
    filterStudents(event.target.value, sectionFilter);
  };

  const handleSectionFilterChange = (event) => {
    setSectionFilter(event.target.value);
    filterStudents(classFilter, event.target.value);
  };

  // Filter students based on class and section
  const filterStudents = (classValue, sectionValue) => {
    let filtered = students;
    if (classValue) {
      filtered = filtered.filter(student => student.class === classValue);
    }
    if (sectionValue) {
      filtered = filtered.filter(student => student.section === sectionValue);
    }
    setFilteredStudents(filtered);
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
                {/* Add more options here */}
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
                {/* Add more options here */}
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
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="py-3 px-4 text-center text-gray-700">
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
  );
};

export default TeacherStudentsPage;
