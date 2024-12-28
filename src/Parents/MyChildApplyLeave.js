import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";

const MyChildApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveList, setLeaveList] = useState([]);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch leaves on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/parent/my-child-leaves/${parentId}/${studentId}`)
      .then((response) => {
        setLeaveList(response.data.leaves || []); // Ensure we always set an array
      })
      .catch((error) => {
        console.error("Error fetching leaves:", error);
        setLeaveList([]); // Reset to an empty array on error
      });
  }, [parentId, studentId]);

  // Handle leave application form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const leaveData = {
      leaveType,
      startDate,
      endDate,
      reason,
    };

    // POST the leave data to the server
    axios
      .post(
        `https://school-backend-1-2xki.onrender.com/api/parent/my-child-applyleave/${parentId}/${studentId}`,
        leaveData
      )
      .then((response) => {
        alert("Leave applied successfully!");
        setLeaveList([...leaveList, response.data.leave]); // Add the new leave to the list
      })
      .catch((error) => {
        console.error("Error applying leave:", error);
      });
  };

  // Convert date to readable format
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - fixed position */}
      <div className="w-1/4 fixed top-0 left-0 h-full bg-white-200 p-4">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-4 ml-80"> {/* Adjust left margin for the fixed sidebar */}
        {/* Title */}
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-lg text-gray-700 font-semibold mb-4">Add Apply Leave</h2>
          <form onSubmit={handleSubmit}>
            {/* Row for leaveType, startDate, endDate, and reason */}
            <div className="flex gap-4">
              {/* Leave Type */}
              <div className="mb-4 flex-1">
                <label htmlFor="leaveType" className="block text-sm text-gray-600 mb-1">
                  Leave Type
                </label>
                <select
                  id="leaveType"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="sick">Sick Leave</option>
                  <option value="casual">Casual Leave</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="mb-4 flex-1">
                <label htmlFor="startDate" className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* End Date */}
              <div className="mb-4 flex-1">
                <label htmlFor="endDate" className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
            </div>

            {/* Reason */}
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm text-gray-600 mb-1">
                Reason
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                required
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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-gray-700 font-semibold mb-4">Leave List</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-500">Leave Type</th>
                  <th className="px-4 py-2 text-left text-gray-500">From</th>
                  <th className="px-4 py-2 text-left text-gray-500">To</th>
                  <th className="px-4 py-2 text-left text-gray-500">Reason</th>
                  <th className="px-4 py-2 text-left text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(leaveList) && leaveList.length === 0 ? (
                  <tr>
                    <td className="px-4 py-2 text-center text-gray-500" colSpan="5">
                      No Leave Data Available
                    </td>
                  </tr>
                ) : (
                  leaveList.map((leave, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{leave.leaveType}</td>
                      <td className="px-4 py-2">{formatDate(leave.startDate)}</td>
                      <td className="px-4 py-2">{formatDate(leave.endDate)}</td>
                      <td className="px-4 py-2">{leave.reason}</td>
                      <td className="px-4 py-2">{leave.status || "Pending"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-gray-500 text-sm">
            Showing {leaveList.length} entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildApplyLeave;
