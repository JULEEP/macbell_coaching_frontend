import React, { useState } from "react";

const PayrollBulkPrint = () => {
  const [role, setRole] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    // Placeholder function to handle search
    console.log("Search triggered with:", { role, month, year });
  };

  return (
    <div className="container mx-auto p-5 bg-white shadow-2xl rounded-lg">
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-gray-500 mb-6">
        Payroll Bulk Print
      </h2>

      {/* Select Criteria Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Role Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="HR">HR</option>
            <option value="Accountant">Accountant</option>
          </select>
        </div>

        {/* Month Dropdown */}
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Month</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
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
        <div className="p-4 shadow-lg rounded-lg">
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <select
            className="mt-1 block w-full p-2 border rounded-md"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
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
  );
};

export default PayrollBulkPrint;
