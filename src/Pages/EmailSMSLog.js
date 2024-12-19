import React, { useState } from "react";
import Sidebar from "./Sidebar";

const EmailSMSLogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const logs = [
    {
      id: 1,
      title: "Winter Break Notice",
      description: "Details about the upcoming winter break.",
      date: "12/12/2024",
      type: "Email",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting Reminder",
      description: "Reminder for the upcoming PTM.",
      date: "12/14/2024",
      type: "SMS",
    },
    {
      id: 3,
      title: "Holiday Announcement",
      description: "Announcement about school holidays.",
      date: "12/15/2024",
      type: "Email",
    },
    // Add more logs as needed
  ];

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Email/SMS Log List
      </h1>

      {/* Quick Search */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Send Email/SMS</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Quick Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Table for Email/SMS Logs */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200"> {/* Light gray background for table header */}
                <th className="px-4 py-2 border-b text-left">SL</th>
                <th className="px-4 py-2 border-b text-left">Title</th>
                <th className="px-4 py-2 border-b text-left">Description</th>
                <th className="px-4 py-2 border-b text-left">Date</th>
                <th className="px-4 py-2 border-b text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {logs
                .filter(
                  (log) =>
                    log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    log.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((log, index) => (
                  <tr key={log.id}>
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{log.title}</td>
                    <td className="px-4 py-2 border-b">{log.description}</td>
                    <td className="px-4 py-2 border-b">{log.date}</td>
                    <td className="px-4 py-2 border-b">{log.type}</td>
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

export default EmailSMSLogPage;
