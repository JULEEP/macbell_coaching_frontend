import React, { useState } from "react";

const ManageStudent = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByRoll, setSearchByRoll] = useState("");
  
  const students = [
    { admissionNo: "89964", name: "John Doe", fatherName: "Mr. Doe", dob: "2005-01-01", classSection: "10-A", gender: "Male", type: "Regular" },
    { admissionNo: "89965", name: "Jane Smith", fatherName: "Mr. Smith", dob: "2006-02-02", classSection: "9-B", gender: "Female", type: "Regular" },
    // Add more sample students here as needed
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Manage Student</h1>

      {/* Select Criteria Section */}
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700">Academic Year *</label>
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
            <label className="block text-gray-700">Class *</label>
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
            <label className="block text-gray-700">Section *</label>
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

        {/* Search Section */}
        <div className="flex gap-4">
          <div className="w-1/3">
            <label className="block text-gray-700">Search By Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Name"
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-700">Search By Roll</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Roll"
              value={searchByRoll}
              onChange={(e) => setSearchByRoll(e.target.value)}
            />
          </div>
          <div className="w-1/3 flex items-end">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Student List Section */}
      <div className="bg-white p-6 shadow-md rounded space-y-6">
        <h2 className="text-lg text-gray-700 mb-4">Student List</h2>
        <div className="mb-4 flex justify-between">
          <div className="w-1/4">
            <label className="block text-gray-700">Quick Search</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Table for Student List */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Admission No</th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Father Name</th>
              <th className="px-4 py-2 text-left border-b">Date Of Birth</th>
              <th className="px-4 py-2 text-left border-b">Class(Section)</th>
              <th className="px-4 py-2 text-left border-b">Gender</th>
              <th className="px-4 py-2 text-left border-b">Type</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((student) => {
                return (
                  (searchByName === "" || student.name.toLowerCase().includes(searchByName.toLowerCase())) &&
                  (searchByRoll === "" || student.admissionNo.includes(searchByRoll))
                );
              })
              .map((student) => (
                <tr key={student.admissionNo}>
                  <td className="px-4 py-2 border-b">{student.admissionNo}</td>
                  <td className="px-4 py-2 border-b">{student.name}</td>
                  <td className="px-4 py-2 border-b">{student.fatherName}</td>
                  <td className="px-4 py-2 border-b">{student.dob}</td>
                  <td className="px-4 py-2 border-b">{student.classSection}</td>
                  <td className="px-4 py-2 border-b">{student.gender}</td>
                  <td className="px-4 py-2 border-b">{student.type}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudent;
