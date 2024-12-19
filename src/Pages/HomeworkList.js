import React, { useState } from "react";
import Sidebar from "./Sidebar";

const HomeworkList = () => {
  const [homeworks, setHomeworks] = useState([
    {
      id: 1,
      class: "Class 1",
      section: "A",
      subject: "Math",
      marks: 20,
      homeworkDate: "2024-12-17",
      submissionDate: "2024-12-20",
    },
    {
      id: 2,
      class: "Class 2",
      section: "B",
      subject: "Science",
      marks: 25,
      homeworkDate: "2024-12-18",
      submissionDate: "2024-12-22",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredHomeworks = homeworks.filter((hw) =>
    hw.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Homework List</h1>

      {/* Select Criteria */}
      <div className="p-4 bg-gray-100 rounded shadow">
        <div className="flex gap-6 items-end">
          {/* Class */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Class *</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
            </select>
          </div>

          {/* Subject */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Subject</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select Subject</option>
              <option>Math</option>
              <option>Science</option>
            </select>
          </div>

          {/* Section */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Section</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select Section</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>

          {/* Add Homework Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            + Add Homework
          </button>

          {/* Search Button */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Homework List */}
      <div className="p-4 bg-gray-100 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-700">Homework List</h2>
          {/* Quick Search */}
          <input
            type="text"
            placeholder="Quick Search"
            value={search}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Sl</th>
                <th className="px-4 py-2 text-left">Class</th>
                <th className="px-4 py-2 text-left">Section</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Marks</th>
                <th className="px-4 py-2 text-left">Homework Date</th>
                <th className="px-4 py-2 text-left">Submission Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredHomeworks.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                filteredHomeworks.map((hw, index) => (
                  <tr key={hw.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{hw.class}</td>
                    <td className="px-4 py-2">{hw.section}</td>
                    <td className="px-4 py-2">{hw.subject}</td>
                    <td className="px-4 py-2">{hw.marks}</td>
                    <td className="px-4 py-2">{hw.homeworkDate}</td>
                    <td className="px-4 py-2">{hw.submissionDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        {filteredHomeworks.length > 0 && (
          <div className="mt-4 text-gray-500 text-sm">
            Showing {filteredHomeworks.length} entries
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default HomeworkList;
