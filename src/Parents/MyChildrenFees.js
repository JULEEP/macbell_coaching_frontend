import React, { useState } from "react";
import ParentSidebar from "./ParentSidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const MyChildrenFees = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const feesData = [
    {
      id: 1,
      student: "John Doe",
      classSection: "1 (A)",
      amount: 5000,
      waiver: 500,
      fine: 100,
      paid: 4500,
      balance: 600,
      date: "12/15/2024",
    },
    {
      id: 2,
      student: "Jane Smith",
      classSection: "1 (A)",
      amount: 6000,
      waiver: 0,
      fine: 50,
      paid: 5950,
      balance: 0,
      date: "12/10/2024",
    },
  ];

  const filteredFeesData = feesData.filter(
    (fee) =>
      fee.student.toLowerCase().includes(search.toLowerCase()) ||
      fee.classSection.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <ParentSidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">My Children Fees</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title */}

        {/* Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by student or class"
            className="border border-gray-300 rounded p-2 w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Fees Details Table */}
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">SL</th>
                  <th className="px-4 py-2 text-left text-gray-600">Student</th>
                  <th className="px-4 py-2 text-left text-gray-600">Class (Section)</th>
                  <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                  <th className="px-4 py-2 text-left text-gray-600">Waiver</th>
                  <th className="px-4 py-2 text-left text-gray-600">Fine</th>
                  <th className="px-4 py-2 text-left text-gray-600">Paid</th>
                  <th className="px-4 py-2 text-left text-gray-600">Balance</th>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredFeesData.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  filteredFeesData.map((fee, index) => (
                    <tr key={fee.id} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{fee.student}</td>
                      <td className="px-4 py-2">{fee.classSection}</td>
                      <td className="px-4 py-2">{fee.amount}</td>
                      <td className="px-4 py-2">{fee.waiver}</td>
                      <td className="px-4 py-2">{fee.fine}</td>
                      <td className="px-4 py-2">{fee.paid}</td>
                      <td className="px-4 py-2">{fee.balance}</td>
                      <td className="px-4 py-2">{fee.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {filteredFeesData.length > 0 && (
            <div className="mt-4 text-sm text-gray-500 text-center">
              Showing {filteredFeesData.length} entries
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChildrenFees;
