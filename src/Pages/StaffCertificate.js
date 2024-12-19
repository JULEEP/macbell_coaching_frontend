import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StaffCertificatePage = () => {
  const [role, setRole] = useState("");
  const [certificate, setCertificate] = useState("");

  const handleSearch = () => {
    console.log("Search criteria:", {
      role,
      certificate,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Generate Certificate</h2>

      {/* Select Criteria Section */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Criteria</h3>

        {/* Dropdowns in Single Row */}
        <div className="flex space-x-6 mb-6">
          {/* Role Dropdown */}
          <div className="w-1/2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role *
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

          {/* Certificate Dropdown */}
          <div className="w-1/2">
            <label htmlFor="certificate" className="block text-sm font-medium text-gray-700">
              Certificate *
            </label>
            <select
              id="certificate"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Certificate</option>
              <option value="Merit Certificate">Merit Certificate</option>
              <option value="Participation Certificate">Participation Certificate</option>
              <option value="Achievement Certificate">Achievement Certificate</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="text-right">
          <button
            onClick={handleSearch}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StaffCertificatePage;
