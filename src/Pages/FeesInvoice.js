import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const FeesInvoice = () => {
  const [search, setSearch] = useState(""); // You can keep the search state if you plan to use it in the future
  const [invoices, setInvoices] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch invoices from the backend
  const fetchInvoices = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/api/admin/get-fees-type");
      const data = await response.json();

      if (response.ok) {
        // Ensure that invoices is an array
        setInvoices(Array.isArray(data.invoices) ? data.invoices : []);
      } else {
        setError(data.message || "Error fetching invoices");
      }
    } catch (error) {
      setError("Error connecting to the server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-xl text-gray-700">Fees Invoice</h1>

        <div className="flex gap-6 mt-4">
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
            onChange={(e) => setSearch(e.target.value)}  // If you want to keep it for future use
          />
        </div>

        {/* Loader */}
        {loading && <p className="mt-4">Loading invoices...</p>}

        {/* Error */}
        {error && <p className="mt-4 text-red-500">{error}</p>}

        {/* Fees Invoice List */}
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
              {invoices.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No Data Available In Table
                  </td>
                </tr>
              ) : (
                invoices.map((invoice, index) => (
                  <tr key={invoice.SL}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{invoice.Student}</td>
                    <td className="px-4 py-2">{invoice.Amount}</td>
                    <td className="px-4 py-2">{invoice.Waiver}</td>
                    <td className="px-4 py-2">{invoice.Fine}</td>
                    <td className="px-4 py-2">{invoice.Paid}</td>
                    <td className="px-4 py-2">{invoice.Balance}</td>
                    <td className="px-4 py-2">{invoice.Status}</td>
                    <td className="px-4 py-2">{invoice.Date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination or Entries Display */}
        {invoices.length > 0 && (
          <div className="mt-4 text-gray-500 text-sm">
            Showing {invoices.length} entries
          </div>
        )}
      </div>
    </div>
  );
};

export default FeesInvoice;
