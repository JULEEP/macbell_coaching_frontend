import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddLesson = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [lessonName, setLessonName] = useState('');
  const [title, setTitle] = useState('');

  const handleSaveLesson = () => {
    // Logic to save lesson
    console.log({
      selectedClass,
      selectedSubject,
      lessonName,
      title,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64">
    <div className="flex gap-6">
    <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Lesson</h2>
        <div className="space-y-4">
          {/* Class Dropdown */}
          <div>
            <label htmlFor="class" className="block text-sm text-gray-600">Class *</label>
            <select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select Class</option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
              <option value="Class C">Class C</option>
            </select>
          </div>

          {/* Subject Dropdown */}
          <div>
            <label htmlFor="subject" className="block text-sm text-gray-600">Subject *</label>
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </div>

          {/* Lesson Name */}
          <div>
            <label htmlFor="lessonName" className="block text-sm text-gray-600">Add Lesson Name</label>
            <input
              type="text"
              id="lessonName"
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm text-gray-600">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSaveLesson}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Save Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Lesson List */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Lesson List</h2>
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">SL</th>
              <th className="text-left px-4 py-2">Class</th>
              <th className="text-left px-4 py-2">Section</th>
              <th className="text-left px-4 py-2">Subject</th>
              <th className="text-left px-4 py-2">Lesson</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Class A</td>
              <td className="px-4 py-2">Section A</td>
              <td className="px-4 py-2">Mathematics</td>
              <td className="px-4 py-2">Algebra</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="ml-4 text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddLesson;
