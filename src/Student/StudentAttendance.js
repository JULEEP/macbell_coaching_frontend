import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const StudentAttendanceList = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Fetch attendance data from API
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-attendance/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAttendance(data.attendance);
        } else {
          setError(data.message || "Error fetching attendance");
        }
      } catch (err) {
        setError("An error occurred while fetching attendance");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [studentId]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Filter attendance by selected month and year (if any)
  const filteredAttendance = attendance.filter((entry) => {
    const date = new Date(entry.date);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const matchesMonth = selectedMonth ? month === selectedMonth : true;
    const matchesYear = selectedYear ? year === selectedYear : true;

    return matchesMonth && matchesYear;
  });

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

        {/* Results Section (Attendance Table) */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Attendance Results</h2>
          <div className="mt-4 p-6 bg-white shadow-md rounded-lg">
            {filteredAttendance.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-400">Date</th>
                      <th className="px-4 py-2 text-left text-gray-400">Attendance Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAttendance.map((entry, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-gray-600">
                          {new Date(entry.date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-2 text-gray-600">{entry.attendanceStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No attendance records available for the selected month and year.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceList;
