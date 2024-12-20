import React, { useState } from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildApplyLeave = () => {
  const [applyDate, setApplyDate] = useState("");
  const [student, setStudent] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveFrom, setLeaveFrom] = useState("");
  const [leaveTo, setLeaveTo] = useState("");
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ applyDate, student, leaveType, leaveFrom, leaveTo, reason, file });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ParentSidebar />

      {/* Main Content */}
      <div className="flex-1 mt-4 ml-4">
        {/* Title */}
        <h1 className="text-xl text-blue-500 font-semibold mb-4">Apply Leave</h1>

        <div className="flex gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <h2 className="text-lg text-gray-700 font-semibold mb-4">Add Apply Leave</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="applyDate" className="block text-sm text-gray-600 mb-1">
                  Apply Date *
                </label>
                <input
                  type="date"
                  id="applyDate"
                  value={applyDate}
                  onChange={(e) => setApplyDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="student" className="block text-sm text-gray-600 mb-1">
                  Student
                </label>
                <select
                  id="student"
                  value={student}
                  onChange={(e) => setStudent(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Student</option>
                  <option value="student1">Student 1</option>
                  <option value="student2">Student 2</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="leaveType" className="block text-sm text-gray-600 mb-1">
                  Leave Type
                </label>
                <select
                  id="leaveType"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Leave Type</option>
                  <option value="sick">Sick Leave</option>
                  <option value="casual">Casual Leave</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="leaveFrom" className="block text-sm text-gray-600 mb-1">
                  Leave From *
                </label>
                <input
                  type="date"
                  id="leaveFrom"
                  value={leaveFrom}
                  onChange={(e) => setLeaveFrom(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="leaveTo" className="block text-sm text-gray-600 mb-1">
                  Leave To *
                </label>
                <input
                  type="date"
                  id="leaveTo"
                  value={leaveTo}
                  onChange={(e) => setLeaveTo(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="reason" className="block text-sm text-gray-600 mb-1">
                  Reason *
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="file" className="block text-sm text-gray-600 mb-1">
                  Attach File
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
              >
                Save Apply Leave
              </button>
            </form>
          </div>

          {/* Leave List Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/0">
            <h2 className="text-lg text-gray-700 font-semibold mb-4">Leave List</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-500">Student</th>
                    <th className="px-4 py-2 text-left text-gray-500">Type</th>
                    <th className="px-4 py-2 text-left text-gray-500">From</th>
                    <th className="px-4 py-2 text-left text-gray-500">To</th>
                    <th className="px-4 py-2 text-left text-gray-500">Apply Date</th>
                    <th className="px-4 py-2 text-left text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-center text-gray-500" colSpan="6">
                      No Data Available In Table
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-gray-500 text-sm">
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildApplyLeave;
