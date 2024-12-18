import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentAttendanceList = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for attendance in ${selectedMonth}, ${selectedYear}`);
    // Add your search logic here
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Attendance</h1>

        {/* Month and Year Dropdowns in Same Row */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div className="flex space-x-4">
            {/* Month Dropdown */}
            <div className="w-1/2">
              <p className="text-lg font-medium text-gray-700">Month</p>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={selectedMonth}
                onChange={handleMonthChange}
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

            {/* Year Dropdown */}
            <div className="w-1/2">
              <p className="text-lg font-medium text-gray-700">Year</p>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Button Below Dropdowns and Aligned to Right */}
        <div className="mt-4">
          <button
            className="w-32 px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 ml-auto block"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Results Section (can be populated with dynamic data after search) */}
        <div className="mt-8">
          {/* Placeholder for Attendance Table or Results */}
          <h2 className="text-xl font-semibold text-gray-800">Attendance Results</h2>
          <div className="mt-4 p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-600">
              No results to display. Please select a month and year, then click Search.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceList;
