import React, { useState } from "react";
import Sidebar from "./Sidebar";

const FeesType = () => {
  const [name, setName] = useState("");
  const [feesGroup, setFeesGroup] = useState("");
  const [description, setDescription] = useState("");
  const [feesTypes, setFeesTypes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const feesGroups = ["Group 1", "Group 2", "Group 3"]; // Example Fee Groups

  // Function to handle saving a new fees type
  const handleSave = async () => {
    if (!name || !feesGroup || !description) {
      alert("Name, Fees Group, and Description are required!");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Make API call to add fees type
      const response = await fetch("http://localhost:4000/api/admin/add-fees-type", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, feesGroup, description }),
      });

      const result = await response.json();

      if (response.ok) {
        // Add the new fees type to the state
        setFeesTypes([...feesTypes, result.feesType]);
        setName("");
        setFeesGroup("");
        setDescription("");
      } else {
        setError(result.message || "Error adding fees type");
      }
    } catch (error) {
      setError("Error connecting to the server");
    } finally {
      setLoading(false);
    }
  };

  const filteredFeesTypes = feesTypes.filter(
    (type) =>
      type.name.toLowerCase().includes(search.toLowerCase()) ||
      type.feesGroup.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar /> {/* Sidebar added here */}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        <h1 className="text-xl text-gray-700">Fees Type</h1>

        <div className="flex gap-6">
          {/* Left Section: Add Fees Type Form */}
          <div className="w-1/3 bg-white p-6 shadow-md rounded space-y-4">
            <h2 className="text-lg text-gray-700">Add Fees Type</h2>
            <div>
              <label className="block text-gray-700">Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Fees Group *</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={feesGroup}
                onChange={(e) => setFeesGroup(e.target.value)}
              >
                <option value="">Select Fees Group</option>
                {feesGroups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {/* Right Section: Fees Type List */}
          <div className="w-2/3 bg-white p-6 shadow-md rounded space-y-4">
            <h2 className="text-lg text-gray-700">Fees Type List</h2>
            <div className="mb-4 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-1/3 border border-gray-300 rounded p-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Fees Group</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFeesTypes.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No Data Available In Table
                      </td>
                    </tr>
                  ) : (
                    filteredFeesTypes.map((type) => (
                      <tr key={type.id}>
                        <td className="px-4 py-2">{type.name}</td>
                        <td className="px-4 py-2">{type.feesGroup}</td>
                        <td className="px-4 py-2">{type.description}</td>
                        <td className="px-4 py-2">
                          <button className="text-red-500 hover:text-red-600">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {filteredFeesTypes.length > 0 && (
              <div className="mt-4 text-gray-500 text-sm">
                Showing {filteredFeesTypes.length} entries
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesType;
