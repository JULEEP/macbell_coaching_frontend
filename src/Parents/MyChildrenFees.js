import React, { useState } from "react";
import ParentSidebar from "./ParentSidebar";
const MyChildrenFees = () => {
  const [search, setSearch] = useState("");
  const [feesData, setFeesData] = useState([
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
  ]);

  const filteredFeesData = feesData.filter(
    (fee) =>
      fee.student.toLowerCase().includes(search.toLowerCase()) ||
      fee.classSection.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <ParentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">      {/* Page Title */}
        {/* Title */}
        <h1 className="text-sm font-semibold text-blue-500 mb-6">My Children Fees Invoice</h1>

        {/* Class Information */}
        <div className="mt-4 text-gray-600">
          Class <span className="font-semibold">1 (A)</span>
        </div>

        {/* Search Bar */}
        <div className="flex gap-6 mt-4">
          <input
            type="text"
            placeholder="Search by student or class"
            className="border border-gray-300 rounded p-2 w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Fees Details Table */}
        <div className="overflow-x-auto mt-6 shadow-lg bg-white rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">SL</th>
                <th className="px-4 py-2 text-left text-gray-600">Student</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Class (Section)
                </th>
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
                    <td className="px-4 py-2 text-gray-800">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.student}</td>
                    <td className="px-4 py-2 text-gray-800">
                      {fee.classSection}
                    </td>
                    <td className="px-4 py-2 text-gray-800">{fee.amount}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.waiver}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.fine}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.paid}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.balance}</td>
                    <td className="px-4 py-2 text-gray-800">{fee.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredFeesData.length > 0 && (
          <div className="mt-4 text-gray-500 text-sm">
            Showing {filteredFeesData.length} entries
          </div>
        )}
      </div>
    </div>
  );
};

export default MyChildrenFees;
