import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const MultiClassStudent = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]); // State to store student data
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Fetch students data from API
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/admin/get-student");
        if (response.status === 200) {
          setStudents(response.data.students);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on selected criteria
  const filteredStudents = students.filter((student) => {
    return (
      (academicYear === "" || student.class === academicYear) &&
      (classValue === "" || student.class === classValue) &&
      (section === "" || student.classSection.includes(section)) &&
      (search === "" || student.firstName.toLowerCase().includes(search.toLowerCase()) || student.lastName.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar /> {/* Sidebar added here */}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-xl text-gray-700">Multi Class Student</h1>

        {/* Select Criteria Section */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block text-gray-700">Academic Year</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
              >
                <option value="">Select Academic Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700">Class</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700">Section</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Student List Section */}
        <div className="bg-white p-6 shadow-md rounded space-y-6">
          <h2 className="text-lg text-gray-700 mb-4">Student List</h2>

          {/* Loading Indicator */}
          {loading && <p>Loading...</p>}

          {/* Table for Student List */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">Admission No</th>
                <th className="px-4 py-2 text-left border-b">Name</th>
                <th className="px-4 py-2 text-left border-b">Class(Section)</th>
                <th className="px-4 py-2 text-left border-b">Gender</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td className="px-4 py-2 border-b">{student.admissionNumber || "N/A"}</td>
                  <td className="px-4 py-2 border-b">{`${student.firstName} ${student.lastName}`}</td>
                  <td className="px-4 py-2 border-b">{student.class}</td>
                  <td className="px-4 py-2 border-b">{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MultiClassStudent;
