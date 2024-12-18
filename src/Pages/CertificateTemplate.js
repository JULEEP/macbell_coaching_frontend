import React, { useState } from "react";

const CertificateTemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Template 1",
      userType: "Student",
      pageLayout: "Layout 1",
      background: "Blue",
      status: "active",
    },
    {
      id: 2,
      name: "Template 2",
      userType: "Employee",
      pageLayout: "Layout 2",
      background: "Green",
      status: "inactive",
    },
    {
      id: 3,
      name: "Template 3",
      userType: "Student",
      pageLayout: "Layout 3",
      background: "Red",
      status: "active",
    },
  ]);

  const handleToggleStatus = (id) => {
    const updatedTemplates = templates.map((template) => {
      if (template.id === id) {
        return {
          ...template,
          status: template.status === "active" ? "inactive" : "active",
        };
      }
      return template;
    });
    setTemplates(updatedTemplates);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Certificate Templates</h2>

      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-1/3 p-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Search
        </button>
      </div>

      {/* Certificate Templates List */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">User Type</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Page Layout</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Background</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {templates.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              templates.map((template) => (
                <tr key={template.id}>
                  <td className="p-2 text-sm text-gray-700">{template.name}</td>
                  <td className="p-2 text-sm text-gray-700">{template.userType}</td>
                  <td className="p-2 text-sm text-gray-700">{template.pageLayout}</td>
                  <td className="p-2 text-sm text-gray-700">{template.background}</td>
                  <td className="p-2 text-sm text-gray-700">
                    <button
                      onClick={() => handleToggleStatus(template.id)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        template.status === "active"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {template.status === "active" ? "✓" : "×"}
                    </button>
                  </td>
                  <td className="p-2 text-sm text-gray-700">
                    <button className="text-blue-600 hover:underline">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 text-sm text-gray-600 text-center">
          Showing {templates.length} to {templates.length} of {templates.length} entries
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplatesPage;
