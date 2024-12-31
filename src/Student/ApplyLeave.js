import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar";

const ApplyLeave = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch leaves from the backend
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/leave/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setLeaves(data.leaves);
        } else {
          setError(data.message || "Error fetching leaves");
        }
      } catch (err) {
        setError("An error occurred while fetching leaves");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, [studentId]);

  // Handle leave application
  const handleApplyLeave = async (event) => {
    event.preventDefault();

    const leaveData = {
      startDate,
      endDate,
      reason,
    };

    try {
      const response = await fetch(
        `https://school-backend-1-2xki.onrender.com/api/students/apply-leave/${studentId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leaveData),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setLeaves((prevLeaves) => [...prevLeaves, data.leave]); // Add the new leave to the leaves array
      } else {
        setError(data.message || "Error applying for leave");
      }
    } catch (err) {
      setError("An error occurred while applying for leave");
    }
  };

  // Handle changes to the form fields
  const handleStartDateChange = (event) => setStartDate(event.target.value);
  const handleEndDateChange = (event) => setEndDate(event.target.value);
  const handleReasonChange = (event) => setReason(event.target.value);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-1/4 h-full bg-white shadow-lg z-10">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 ml-[25%]">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Apply Leave</h1>

        {/* Leave Application Form */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Apply for Leave</h2>
          <form onSubmit={handleApplyLeave}>
            <div className="flex space-x-4 mb-4">
              {/* Start Date */}
              <div className="w-1/3">
                <label className="text-gray-600">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* End Date */}
              <div className="w-1/3">
                <label className="text-gray-600">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Reason */}
              <div className="w-1/3">
                <label className="text-gray-600">Reason</label>
                <textarea
                  value={reason}
                  onChange={handleReasonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                  required
                />
              </div>
            </div>

            {/* Apply Leave Button */}
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 mt-4 text-sm"
              >
                Apply Leave
              </button>
            </div>
          </form>
        </div>

        {/* Leave Status */}
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Leaves Table */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">My Leaves</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Start Date</th>
                  <th className="py-3 px-4">End Date</th>
                  <th className="py-3 px-4">Reason</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave._id} className="text-gray-700 border-b">
                    <td className="py-3 px-4">{new Date(leave.startDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{new Date(leave.endDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{leave.reason}</td>
                    <td className="py-3 px-4">{leave.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
