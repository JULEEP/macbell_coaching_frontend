import React, { useState } from "react";

const AddAssignVehicle = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [assignedVehicles, setAssignedVehicles] = useState([]);
  const [search, setSearch] = useState("");

  // Handle Save
  const handleSaveAssignment = () => {
    if (selectedRoute && selectedVehicle) {
      const newAssignment = {
        id: assignedVehicles.length + 1,
        route: selectedRoute,
        vehicle: selectedVehicle,
      };
      setAssignedVehicles([...assignedVehicles, newAssignment]);
      setSelectedRoute(""); // Clear the route selection after saving
      setSelectedVehicle(""); // Clear the vehicle selection after saving
    }
  };

  // Filter assigned vehicles based on search
  const filteredAssignments = assignedVehicles.filter(
    (assignment) =>
      assignment.route.toLowerCase().includes(search.toLowerCase()) ||
      assignment.vehicle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700 mb-4">Add Assign Vehicle</h1>

      <div className="flex gap-8">
        {/* Left Side - Add Assign Vehicle Form */}
        <div className="w-1/3 bg-gray-50 p-4 rounded shadow">
          <h2 className="text-lg mb-4 text-gray-600">Add Assign Vehicle</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Route</label>
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Route</option>
                <option value="Route A">Route A</option>
                <option value="Route B">Route B</option>
                <option value="Route C">Route C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Vehicle</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    value="Vehicle 1"
                    checked={selectedVehicle === "Vehicle 1"}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="mr-2"
                  />
                  Vehicle 1
                </label>
                <label>
                  <input
                    type="radio"
                    value="Vehicle 2"
                    checked={selectedVehicle === "Vehicle 2"}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="mr-2"
                  />
                  Vehicle 2
                </label>
                <label>
                  <input
                    type="radio"
                    value="Vehicle 3"
                    checked={selectedVehicle === "Vehicle 3"}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="mr-2"
                  />
                  Vehicle 3
                </label>
              </div>
            </div>

            <button
              onClick={handleSaveAssignment}
              className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
            >
              Save
            </button>
          </div>
        </div>

        {/* Right Side - Assigned Vehicle List */}
        <div className="w-2/3">
          <h2 className="text-lg text-gray-600 mb-4">Assigned Vehicle List</h2>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by Route or Vehicle"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 w-full border border-gray-300 p-2 rounded"
          />

          <div className="overflow-x-auto bg-white shadow-md p-4 rounded-md">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">SL</th>
                  <th className="px-4 py-2 text-left text-gray-600">Route</th>
                  <th className="px-4 py-2 text-left text-gray-600">Vehicle</th>
                  <th className="px-4 py-2 text-left text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssignments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  filteredAssignments.map((assignment, index) => (
                    <tr key={assignment.id} className="border-t">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{assignment.route}</td>
                      <td className="px-4 py-2">{assignment.vehicle}</td>
                      <td className="px-4 py-2">
                        <button className="text-purple-500 hover:text-purple-600">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 text-gray-500 text-sm">
            Showing {filteredAssignments.length} entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssignVehicle;
