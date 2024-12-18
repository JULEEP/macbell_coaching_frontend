import React from "react";

const StudentExport = () => {
  const handleExportCSV = () => {
    // Logic for exporting data to CSV
    console.log("Exporting to CSV...");
  };

  const handleExportPDF = () => {
    // Logic for exporting data to PDF
    console.log("Exporting to PDF...");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
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
  );
};

export default StudentExport;
