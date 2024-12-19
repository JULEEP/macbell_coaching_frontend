import React, { useState } from "react";
import Sidebar from "./Sidebar";

const FeesInvoiceBulkPrint = () => {
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [student, setStudent] = useState("");

  const handlePrint = () => {
    // Placeholder function to handle print
    console.log("Print triggered with:", { className, section, student });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-gray-500 mb-6">
        Fees Invoice Bulk Print
      </h2>

      {/* Select Criteria Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Class Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Class</label>
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
          <label className="block text-sm font-medium text-gray-700">Section</label>
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

        {/* Student Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Student</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          >
            <option value="">Select Student</option>
            <option value="Student 1">Student 1</option>
            <option value="Student 2">Student 2</option>
            <option value="Student 3">Student 3</option>
            <option value="Student 4">Student 4</option>
          </select>
        </div>
      </div>

      {/* Print Button */}
      <div className="text-center mb-6">
        <button
          className="bg-purple-600 text-white p-2 px-6 rounded-lg shadow-md hover:bg-purple-700"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
    </div>
  );
};

export default FeesInvoiceBulkPrint;
