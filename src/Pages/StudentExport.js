import React from "react";
import Sidebar from "./Sidebar";

const StudentExport = () => {
  // Function to handle export to CSV
  const handleExportCSV = async () => {
    try {
      const response = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/export-students?format=excel', { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to export to CSV');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'students_data.excel'); // Name of the file to download
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  };

  // Function to handle export to PDF
  const handleExportPDF = async () => {
    try {
      const response = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/export-students?format=pdf', { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to export to PDF');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'students_data.pdf'); // Name of the file to download
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar /> {/* Sidebar added here */}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        <h1 className="text-xl text-gray-700">Student Export</h1>

        {/* All Student Export Section */}
        <div className="bg-white p-6 shadow-md rounded space-y-6">
          <h2 className="text-lg text-gray-700">All Student Export</h2>

          {/* Buttons: Export to CSV & Export to PDF */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleExportCSV}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
            >
              Export to CSV
            </button>
            <button
              onClick={handleExportPDF}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              Export to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentExport;
