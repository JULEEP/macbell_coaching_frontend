import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/admin/staffs");
      setStaffList(response.data.staff || []);
    } catch (error) {
      console.error("Error fetching staff:", error);
      alert("Error fetching staff. Please try again.");
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStaff = staffList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(staffList.length / itemsPerPage);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const exportToCSV = () => {
    const headers = [
      "SL,First Name,Last Name,Email,Phone,Position,Department,Gender,Date of Birth,Joining Date,Salary,Employee ID,Profile Picture,Qualifications,Created At",
    ];
    const rows = staffList.map((staff, index) => [
      index + 1,
      staff.firstName || "N/A",
      staff.lastName || "N/A",
      staff.email || "N/A",
      staff.phone || "N/A",
      staff.position || "N/A",
      staff.department || "N/A",
      staff.gender || "N/A",
      new Date(staff.dateOfBirth).toLocaleDateString() || "N/A",
      new Date(staff.joiningDate).toLocaleDateString() || "N/A",
      staff.salary || "N/A",
      staff.employeeId || "N/A",
      staff.profilePicture || "N/A",
      staff.qualifications.join(", ") || "N/A",
      formatDate(staff.createdAt) || "N/A",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "staff_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white shadow-md">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-60 bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 ml-8">Staff List</h1>

        <div className="bg-white p-6 rounded-md shadow-md">
          {/* CSV Export Button */}
          <div className="flex items-center justify-end mb-4">
            <button
              onClick={exportToCSV}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
            >
              Download CSV
            </button>
          </div>

          {/* Staff Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-b px-4 py-2 text-left">SL</th>
                  <th className="border-b px-4 py-2 text-left">First Name</th>
                  <th className="border-b px-4 py-2 text-left">Last Name</th>
                  <th className="border-b px-4 py-2 text-left">Email</th>
                  <th className="border-b px-4 py-2 text-left">Phone</th>
                  <th className="border-b px-4 py-2 text-left">Position</th>
                  <th className="border-b px-4 py-2 text-left">Department</th>
                  <th className="border-b px-4 py-2 text-left">Gender</th>
                  <th className="border-b px-4 py-2 text-left">Date of Birth</th>
                  <th className="border-b px-4 py-2 text-left">Joining Date</th>
                  <th className="border-b px-4 py-2 text-left">Salary</th>
                  <th className="border-b px-4 py-2 text-left">Employee ID</th>
                  <th className="border-b px-4 py-2 text-left">Profile Picture</th>
                  <th className="border-b px-4 py-2 text-left">Qualifications</th>
                  <th className="border-b px-4 py-2 text-left">Created At</th>
                </tr>
              </thead>
              <tbody>
                {currentStaff.length > 0 ? (
                  currentStaff.map((staff, index) => (
                    <tr key={staff._id}>
                      <td className="border-b px-4 py-2">{startIndex + index + 1}</td>
                      <td className="border-b px-4 py-2">{staff.firstName}</td>
                      <td className="border-b px-4 py-2">{staff.lastName}</td>
                      <td className="border-b px-4 py-2">{staff.email}</td>
                      <td className="border-b px-4 py-2">{staff.phone}</td>
                      <td className="border-b px-4 py-2">{staff.position}</td>
                      <td className="border-b px-4 py-2">{staff.department}</td>
                      <td className="border-b px-4 py-2">{staff.gender}</td>
                      <td className="border-b px-4 py-2">{new Date(staff.dateOfBirth).toLocaleDateString()}</td>
                      <td className="border-b px-4 py-2">{new Date(staff.joiningDate).toLocaleDateString()}</td>
                      <td className="border-b px-4 py-2">{staff.salary}</td>
                      <td className="border-b px-4 py-2">{staff.employeeId}</td>
                      <td className="border-b px-4 py-2">
                        {staff.profilePicture ? (
                          <img src={staff.profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="border-b px-4 py-2">{staff.qualifications.join(", ")}</td>
                      <td className="border-b px-4 py-2">{formatDate(staff.createdAt)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="15" className="text-center text-gray-500 py-4">
                      No staff found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StaffList;
