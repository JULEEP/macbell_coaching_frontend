import React, { useState } from "react";
import Sidebar from "./Sidebar";

const VehiclePage = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [yearMade, setYearMade] = useState("");
  const [driver, setDriver] = useState("");
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  
  const drivers = ["John Doe", "Jane Smith", "Mike Johnson"];

  // Handle save vehicle
  const handleSaveVehicle = async () => {
    if (vehicleNumber && vehicleModel && yearMade && driver) {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      try {
        const response = await fetch("http://localhost:4000/api/admin/add-vehicle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vehicleNumber,
            vehicleModel,
            yearMade,
            driver,
            note,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add vehicle");
        }

        const data = await response.json();

        // Update vehicle list locally
        setVehicleList([...vehicleList, { ...data.vehicle, id: vehicleList.length + 1 }]);
        setVehicleNumber("");
        setVehicleModel("");
        setYearMade("");
        setDriver("");
        setNote("");
        setSuccessMessage(data.message);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please fill in all required fields.");
    }
  };

  // Filter vehicle list based on search term
  const filteredVehicles = vehicleList.filter((vehicle) =>
    vehicle.vehicleNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-xl text-gray-700 mb-4">Vehicle</h1>

        <div className="flex gap-8">
          {/* Left Side - Add Vehicle Form */}
          <div className="w-1/3 bg-gray-50 p-4 rounded shadow">
            <h2 className="text-lg mb-4 text-gray-600">Add Vehicle</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Vehicle Number *
                </label>
                <input
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  placeholder="Enter vehicle number"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Vehicle Model *
                </label>
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  placeholder="Enter vehicle model"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Year Made
                </label>
                <input
                  type="number"
                  value={yearMade}
                  onChange={(e) => setYearMade(e.target.value)}
                  placeholder="Enter year made"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Driver *
                </label>
                <select
                  value={driver}
                  onChange={(e) => setDriver(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Driver</option>
                  {drivers.map((driverName) => (
                    <option key={driverName} value={driverName}>
                      {driverName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Note
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Enter any notes"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              {loading && <p className="text-gray-500 text-sm">Saving...</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
              <button
                onClick={handleSaveVehicle}
                className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
              >
                Save Vehicle
              </button>
            </div>
          </div>

          {/* Right Side - Vehicle List */}
          <div className="w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-gray-600">Vehicle List</h2>
              <input
                type="text"
                placeholder="Search by Vehicle No."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 p-2 rounded w-1/3"
              />
            </div>
            <div className="overflow-x-auto bg-white shadow-md p-4 rounded-md">
              <table className="min-w-full table-auto border border-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-600">SL</th>
                    <th className="px-4 py-2 text-left text-gray-600">Vehicle No</th>
                    <th className="px-4 py-2 text-left text-gray-600">Model No</th>
                    <th className="px-4 py-2 text-left text-gray-600">Year Made</th>
                    <th className="px-4 py-2 text-left text-gray-600">Driver Name</th>
                    <th className="px-4 py-2 text-left text-gray-600">Driver License</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVehicles.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-gray-500">
                        No Data Available In Table
                      </td>
                    </tr>
                  ) : (
                    filteredVehicles.map((vehicle, index) => (
                      <tr key={vehicle.id} className="border-t">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{vehicle.vehicleNumber}</td>
                        <td className="px-4 py-2">{vehicle.vehicleModel}</td>
                        <td className="px-4 py-2">{vehicle.yearMade}</td>
                        <td className="px-4 py-2">{vehicle.driver}</td>
                        <td className="px-4 py-2">{vehicle.driverLicense}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-gray-500 text-sm">
              Showing {filteredVehicles.length} entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePage;
