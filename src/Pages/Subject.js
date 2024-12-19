import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Subject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [category, setCategory] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [search, setSearch] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  // Dummy Categories (Dropdown data)
  const categories = ["Core", "Elective", "Optional"];

  const handleSaveSubject = () => {
    if (subjectName && category && subjectCode) {
      const newSubject = {
        id: subjectList.length + 1,
        subjectName,
        category,
        subjectCode,
      };
      setSubjectList([...subjectList, newSubject]);
      setSubjectName("");
      setCategory("");
      setSubjectCode("");
    }
  };

  const filteredSubjects = subjectList.filter(
    (subject) =>
      subject.subjectName.toLowerCase().includes(search.toLowerCase()) ||
      subject.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}
      <h1 className="text-xl text-gray-700 mb-4">Subject</h1>

      <div className="flex gap-8">
        {/* Left Side - Add Subject Form */}
        <div className="w-1/3 bg-gray-50 p-4 rounded shadow">
          <h2 className="text-lg mb-4 text-gray-600">Add Subject</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Subject Name *
              </label>
              <input
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                placeholder="Enter subject name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Subject Code *
              </label>
              <input
                type="text"
                value={subjectCode}
                onChange={(e) => setSubjectCode(e.target.value)}
                placeholder="Enter subject code"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <button
              onClick={handleSaveSubject}
              className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
            >
              Save Subject
            </button>
          </div>
        </div>

        {/* Right Side - Subject List */}
        <div className="w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-gray-600">Subject List</h2>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 p-2 rounded w-1/3"
            />
          </div>

          <div className="overflow-x-auto bg-white shadow-md p-4 rounded-md">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">SL</th>
                  <th className="px-4 py-2 text-left text-gray-600">Subject</th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Category Name
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Subject Code
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-4 text-gray-500"
                    >
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  filteredSubjects.map((subject, index) => (
                    <tr key={subject.id} className="border-t">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{subject.subjectName}</td>
                      <td className="px-4 py-2">{subject.category}</td>
                      <td className="px-4 py-2">{subject.subjectCode}</td>
                      <td className="px-4 py-2">
                        <button className="text-red-500 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing {filteredSubjects.length} entries
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subject;
