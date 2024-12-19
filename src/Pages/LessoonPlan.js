import React, { useState } from "react";
import Sidebar from "./Sidebar";

const LessonPlanCreate = () => {
  const [teacher, setTeacher] = useState("");

  const handleSearch = () => {
    // You can add any functionality here when "Search" is clicked
    console.log("Selected Teacher:", teacher);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      <h2 className="text-center text-3xl font-semibold mb-6">Lesson Plan Create</h2>

      {/* Select Criteria Section */}
      <div className="p-4 shadow-lg rounded-lg mb-6">
        <label className="block text-sm font-medium text-gray-700">Teacher *</label>
        <select
          className="mt-1 block w-full p-2 border rounded-md"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        >
          <option value="" disabled>
            Select Teacher
          </option>
          <option value="Mr. A">Mr. A</option>
          <option value="Ms. B">Ms. B</option>
          <option value="Dr. C">Dr. C</option>
          <option value="Prof. D">Prof. D</option>
        </select>
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

export default LessonPlanCreate;
