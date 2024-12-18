import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const OnlineExamResult = () => {
  const [search, setSearch] = useState("");

  // Example data for the results table
  const results = [
    {
      title: "Math Exam",
      time: "10:00 AM",
      totalMarks: 100,
      obtainedMarks: 85,
      result: "Passed",
      status: "Completed",
    },
    {
      title: "Science Exam",
      time: "1:00 PM",
      totalMarks: 100,
      obtainedMarks: 90,
      result: "Passed",
      status: "Completed",
    },
    {
      title: "English Exam",
      time: "3:00 PM",
      totalMarks: 100,
      obtainedMarks: 70,
      result: "Passed",
      status: "Completed",
    },
  ];

  // Filter results based on search query
  const filteredResults = results.filter((result) =>
    result.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Online Exam Result Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Online Exam Result</h1>

        {/* Online Exam View Result Subtitle */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Online Exam View Result</h2>

        {/* Search Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>

        {/* Results Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Results</h3>

          {/* No Data Message */}
          {filteredResults.length === 0 && (
            <p className="text-gray-600 text-center">No Data Available in Table</p>
          )}

          {/* Table */}
          {filteredResults.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left text-gray-700">Title</th>
                    <th className="py-2 px-4 text-left text-gray-700">Time</th>
                    <th className="py-2 px-4 text-left text-gray-700">Total Marks</th>
                    <th className="py-2 px-4 text-left text-gray-700">Obtained Marks</th>
                    <th className="py-2 px-4 text-left text-gray-700">Result</th>
                    <th className="py-2 px-4 text-left text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((result, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="py-2 px-4">{result.title}</td>
                      <td className="py-2 px-4">{result.time}</td>
                      <td className="py-2 px-4">{result.totalMarks}</td>
                      <td className="py-2 px-4">{result.obtainedMarks}</td>
                      <td className="py-2 px-4">{result.result}</td>
                      <td className="py-2 px-4">{result.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-4 text-center text-gray-600">
            {filteredResults.length === 0
              ? "Showing 0 to 0 of 0 entries"
              : `Showing 1 to ${filteredResults.length} of ${filteredResults.length} entries`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineExamResult;
