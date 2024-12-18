import React, { useState } from "react";

const MultiClassStudent = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [search, setSearch] = useState("");

  const students = [
    { admissionNo: "89964", name: "John Doe", classSection: "10-A", gender: "Male" },
    { admissionNo: "89965", name: "Jane Smith", classSection: "9-B", gender: "Female" },
    { admissionNo: "89966", name: "Sam Wilson", classSection: "8-A", gender: "Male" },
    // Add more sample students as needed
  ];

  const filteredStudents = students.filter((student) => {
    return (
      (academicYear === "" || student.classSection.includes(academicYear)) &&
      (classValue === "" || student.classSection.includes(classValue)) &&
      (section === "" || student.classSection.includes(section)) &&
      (search === "" || student.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
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
              <tr key={student.admissionNo}>
                <td className="px-4 py-2 border-b">{student.admissionNo}</td>
                <td className="px-4 py-2 border-b">{student.name}</td>
                <td className="px-4 py-2 border-b">{student.classSection}</td>
                <td className="px-4 py-2 border-b">{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MultiClassStudent;
