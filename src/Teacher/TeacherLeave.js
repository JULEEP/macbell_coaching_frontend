import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TeacherSidebar from "./TeacherSidebar";

const TeacherLeavePage = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveList, setLeaveList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLeaveSubmit = async (event) => {
    event.preventDefault();
    if (!leaveType || !startDate || !endDate || !reason) {
      setError("Please fill all the fields.");
      return;
    }
    setError("");
    const newLeave = { leaveType, startDate, endDate, reason };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/teacher/apply-leave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLeave),
      });
      const data = await response.json();
      if (response.ok) {
        setLeaveList([...leaveList, data.leave]);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to apply for leave.");
    } finally {
      setLoading(false);
    }

    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/teacher/leaves");
        const data = await response.json();
        if (response.ok) {
          setLeaveList(data.leaves);
        } else {
          setError(data.message || "Failed to fetch leaves.");
        }
      } catch (error) {
        setError("Failed to fetch leaves.");
      }
    };
    fetchLeaves();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <TeacherSidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 w-full mr-6 lg:hidden">
          <h1 className="text-lg font-bold">Leave Application</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-gray-100 flex-1">
          <h1 className="text-center text-2xl font-bold mb-6">Leave Application</h1>

          {/* Leave Application Form */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Apply for Leave</h2>
            <form onSubmit={handleLeaveSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="leaveType" className="block text-gray-600 mb-2">
                    Leave Type
                  </label>
                  <select
                    id="leaveType"
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                  >
                    <option value="">Select Leave Type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Vacation Leave">Vacation Leave</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-gray-600 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-gray-600 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="reason" className="block text-gray-600 mb-2">
                  Reason for Leave
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? "Applying..." : "Apply for Leave"}
                </button>
              </div>

              {error && <p className="text-red-500 mt-2">{error}</p>}
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
                        <td className="py-3 px-4 text-gray-700">
                          {new Date(leave.startDate).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 text-gray-700">
                          {new Date(leave.endDate).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 text-gray-700">{leave.reason}</td>
                        <td className="py-3 px-4 text-gray-700">{leave.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {leaveList.length === 0 && (
            <p className="text-gray-600 mt-4">No leave applications found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherLeavePage;
