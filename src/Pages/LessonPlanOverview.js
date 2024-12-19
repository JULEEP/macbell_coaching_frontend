import React, { useState } from "react";
import Sidebar from "./Sidebar";

const LessonPlanOverview = () => {
  const [teacher, setTeacher] = useState("");
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");

  const handleSearch = () => {
    // Add functionality for search when implemented
    console.log("Search triggered with:", { teacher, className, section, subject });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-gray-500 mb-6">Lesson Plan Overview</h2>

      {/* Select Criteria Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Teacher Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Teacher *</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          >
            <option value="">Select Teacher</option>
            <option value="Mr. A">Mr. A</option>
            <option value="Ms. B">Ms. B</option>
            <option value="Dr. C">Dr. C</option>
            <option value="Prof. D">Prof. D</option>
          </select>
        </div>

        {/* Class Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Class *</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
          </select>
        </div>

        {/* Section Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Section *</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* Subject Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-red-500">Subject *</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="text-center mb-6">
        <button
          className="bg-purple-600 text-white p-2 px-6 rounded-lg shadow-md hover:bg-purple-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default LessonPlanOverview;
