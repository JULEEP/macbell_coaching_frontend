import React, { useState } from "react";
import Sidebar from "./Sidebar";

const FeesInvoice = () => {
  const [search, setSearch] = useState("");
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      student: "John Doe",
      amount: 5000,
      waiver: 500,
      fine: 100,
      paid: 4500,
      balance: 600,
      status: "Pending",
      date: "12/15/2024",
    },
    {
      id: 2,
      student: "Jane Smith",
      amount: 6000,
      waiver: 0,
      fine: 50,
      paid: 5950,
      balance: 0,
      status: "Paid",
      date: "12/10/2024",
    },
  ]);

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.student.toLowerCase().includes(search.toLowerCase()) ||
      invoice.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Fees Invoice</h1>

      <div className="flex gap-6">
        {/* Add Button */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
          + Add
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by student or status"
          className="border border-gray-300 rounded p-2 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Fees Invoice List with Shadow */}
      <div className="overflow-x-auto mt-6 shadow-lg bg-white rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Waiver</th>
              <th className="px-4 py-2 text-left">Fine</th>
              <th className="px-4 py-2 text-left">Paid</th>
              <th className="px-4 py-2 text-left">Balance</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              filteredInvoices.map((invoice, index) => (
                <tr key={invoice.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{invoice.student}</td>
                  <td className="px-4 py-2">{invoice.amount}</td>
                  <td className="px-4 py-2">{invoice.waiver}</td>
                  <td className="px-4 py-2">{invoice.fine}</td>
                  <td className="px-4 py-2">{invoice.paid}</td>
                  <td className="px-4 py-2">{invoice.balance}</td>
                  <td className="px-4 py-2">{invoice.status}</td>
                  <td className="px-4 py-2">{invoice.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredInvoices.length > 0 && (
        <div className="mt-4 text-gray-500 text-sm">
          Showing {filteredInvoices.length} entries
        </div>
      )}
    </div>
    </div>
  );
};

export default FeesInvoice;
