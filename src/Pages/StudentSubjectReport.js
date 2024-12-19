import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StudentSubjectReportPage = () => {
  const [classSelected, setClassSelected] = useState("");
  const [sectionSelected, setSectionSelected] = useState("");
  const [monthSelected, setMonthSelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");

  const handleSearch = () => {
    // Implement search logic here
    console.log({
      class: classSelected,
      section: sectionSelected,
      month: monthSelected,
      year: yearSelected,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Student Subject Report
      </h1>

      {/* Select Criteria Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Select Criteria</h2>

        {/* Form Fields for Class, Section, Month, Year */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={classSelected}
              onChange={(e) => setClassSelected(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Section</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={sectionSelected}
              onChange={(e) => setSectionSelected(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Month</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={monthSelected}
              onChange={(e) => setMonthSelected(e.target.value)}
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={yearSelected}
              onChange={(e) => setYearSelected(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Report Section (Add report data here) */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Subject Report</h2>

        {/* Report Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border-b text-left">Student Name</th>
              <th className="px-4 py-2 border-b text-left">Subject</th>
              <th className="px-4 py-2 border-b text-left">Marks</th>
              <th className="px-4 py-2 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Data */}
            <tr>
              <td className="px-4 py-2 border-b">John Doe</td>
              <td className="px-4 py-2 border-b">Math</td>
              <td className="px-4 py-2 border-b">90</td>
              <td className="px-4 py-2 border-b">12/01/2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Jane Smith</td>
              <td className="px-4 py-2 border-b">Science</td>
              <td className="px-4 py-2 border-b">85</td>
              <td className="px-4 py-2 border-b">12/01/2024</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default StudentSubjectReportPage;
