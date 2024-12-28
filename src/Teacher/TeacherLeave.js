import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLeavePage = () => {
  const [leaveType, setLeaveType] = useState(""); // Leave type
  const [startDate, setStartDate] = useState(""); // Leave start date
  const [endDate, setEndDate] = useState(""); // Leave end date
  const [reason, setReason] = useState(""); // Reason for leave
  const [leaveList, setLeaveList] = useState([]); // List of leave applications
  const [error, setError] = useState(""); // Error state

  // Handle leave type change
  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  // Handle start date change
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Handle end date change
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Handle reason change
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  // Handle leave submission
  const handleLeaveSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    if (!leaveType || !startDate || !endDate || !reason) {
      setError("Please fill all the fields");
      return;
    }

    setError(""); // Reset error message

    // Create a leave object
    const newLeave = {
      leaveType,
      startDate,
      endDate,
      reason,
      status: "Pending", // Default status
    };

    // Add new leave to the list
    setLeaveList([...leaveList, newLeave]);

    // Reset form fields
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        {/* Title */}
        <h1 className="text-xl text-purple-800 mb-8">Leave Application</h1>

        {/* Leave Application Form */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Apply for Leave</h2>

          <form onSubmit={handleLeaveSubmit}>
            {/* Row of 3 Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Leave Type Dropdown */}
              <div>
                <label htmlFor="leaveType" className="block text-gray-600 mb-2">Leave Type</label>
                <select
                  id="leaveType"
                  value={leaveType}
                  onChange={handleLeaveTypeChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Leave Type</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Vacation Leave">Vacation Leave</option>
                </select>
              </div>

              {/* Start Date Input */}
              <div>
                <label htmlFor="startDate" className="block text-gray-600 mb-2">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* End Date Input */}
              <div>
                <label htmlFor="endDate" className="block text-gray-600 mb-2">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleEndDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Reason Input */}
            <div className="mb-4 mt-6">
              <label htmlFor="reason" className="block text-gray-600 mb-2">Reason for Leave</label>
              <textarea
                id="reason"
                value={reason}
                onChange={handleReasonChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600"
              >
                Apply for Leave
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>

        {/* Leave List */}
        {leaveList.length > 0 && (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Leave Applications</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-50 rounded-lg">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 px-4">Leave Type</th>
                    <th className="py-3 px-4">Start Date</th>
                    <th className="py-3 px-4">End Date</th>
                    <th className="py-3 px-4">Reason</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveList.map((leave, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-gray-700">{leave.leaveType}</td>
                      <td className="py-3 px-4 text-gray-700">{new Date(leave.startDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-gray-700">{new Date(leave.endDate).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-gray-700">{leave.reason}</td>
                      <td className="py-3 px-4 text-gray-700">{leave.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No Leaves Message */}
        {leaveList.length === 0 && <p className="text-gray-600 mt-4">No leave applications found.</p>}
      </div>
    </div>
  );
};

export default TeacherLeavePage;
