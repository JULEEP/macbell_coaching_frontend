import React, { useState } from "react";

const SharedContentPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sharedContentList, setSharedContentList] = useState([
    {
      id: 1,
      title: "Content 1",
      sendTo: "Student A",
      shareDate: "2024-12-01",
      validUpto: "2024-12-31",
      sharedBy: "Admin",
      description: "Description of Content 1",
    },
    {
      id: 2,
      title: "Content 2",
      sendTo: "Teacher B",
      shareDate: "2024-12-05",
      validUpto: "2024-12-20",
      sharedBy: "Admin",
      description: "Description of Content 2",
    },
    // Add more content data as needed
  ]);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="container mx-auto p-5 bg-white rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shared Content</h2>

      {/* Search Bar */}
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Search
        </button>
      </div>

      {/* Table for Shared Content List */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left text-sm font-medium text-gray-700">SL</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Title</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Send To</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Share Date</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Valid Upto</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Shared By</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Description</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {sharedContentList.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              sharedContentList.map((content, index) => (
                <tr key={content.id}>
                  <td className="p-2 text-sm text-gray-700">{index + 1}</td>
                  <td className="p-2 text-sm text-gray-700">{content.title}</td>
                  <td className="p-2 text-sm text-gray-700">{content.sendTo}</td>
                  <td className="p-2 text-sm text-gray-700">{content.shareDate}</td>
                  <td className="p-2 text-sm text-gray-700">{content.validUpto}</td>
                  <td className="p-2 text-sm text-gray-700">{content.sharedBy}</td>
                  <td className="p-2 text-sm text-gray-700">{content.description}</td>
                  <td className="p-2 text-sm text-gray-700">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        Showing 0 to 0 of {sharedContentList.length} entries
      </div>
    </div>
  );
};

export default SharedContentPage;
