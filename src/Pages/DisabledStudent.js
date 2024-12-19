import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DisabledStudents = () => {
  const [classSelected, setClassSelected] = useState(""); // State for Class dropdown
  const [sectionSelected, setSectionSelected] = useState(""); // State for Section dropdown
  const [nameSearch, setNameSearch] = useState(""); // State for searching by name
  const [admissionNoSearch, setAdmissionNoSearch] = useState(""); // State for searching by admission no

  const handleSearch = () => {
    // Logic for handling search (optional)
    console.log("Searching with criteria:", {
      classSelected,
      sectionSelected,
      nameSearch,
      admissionNoSearch,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Disabled Students</h1>

      {/* Select Criteria Section */}
      <div className="bg-white p-6 shadow-md rounded space-y-4">
        <div className="grid grid-cols-4 gap-6">
          {/* Class Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Class *</label>
            <select
              className="w-full border border-gray-300 rounded p-2"
              value={classSelected}
              onChange={(e) => setClassSelected(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
            </select>
          </div>

          {/* Section Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Section *</label>
            <select
              className="w-full border border-gray-300 rounded p-2"
              value={sectionSelected}
              onChange={(e) => setSectionSelected(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="sectionA">Section A</option>
              <option value="sectionB">Section B</option>
              <option value="sectionC">Section C</option>
            </select>
          </div>

          {/* Search by Name */}
          <div>
            <label className="block text-gray-700 mb-2">Search By Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Search by name"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />
          </div>

          {/* Search by Admission No */}
          <div>
            <label className="block text-gray-700 mb-2">Search by Admission No</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Search by admission number"
              value={admissionNoSearch}
              onChange={(e) => setAdmissionNoSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSearch}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>

      {/* Disabled Students List Section */}
      <div className="bg-white p-6 shadow-md rounded space-y-4">
        {/* Quick Search */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-700">Disabled Students</h2>
          <div className="flex gap-4">
            <input
              type="text"
              className="border border-gray-300 rounded p-2"
              placeholder="Quick Search"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Student List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Admission No</th>
                <th className="border px-4 py-2">Roll No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Class</th>
                <th className="border px-4 py-2">Father Name</th>
                <th className="border px-4 py-2">Date Of Birth</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2" colSpan="8">
                  No Data Available In Table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4">
          <p className="text-gray-700">
            Showing 0 to 0 of 0 entries
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DisabledStudents;
