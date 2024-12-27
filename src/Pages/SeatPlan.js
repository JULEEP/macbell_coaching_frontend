import React, { useState } from 'react';
import Sidebar from './Sidebar';

const GenerateSeatPlan = () => {
  const [exam, setExam] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [seatRules, setSeatRules] = useState([
    { startRoll: 1, endRoll: 50, row: 'Left' },
    { startRoll: 51, endRoll: 100, row: 'Right' }
  ]);
  const [loading, setLoading] = useState(false);
  const [seatPlan, setSeatPlan] = useState([]);

  // Function to fetch seat plan data via GET request (no filters)
  const handleFetchSeatPlan = async () => {
    if (!exam || !className || !section || !roomNumber) {
      alert("Please select all fields and room number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/admin/get-seat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSeatPlan(data.seatPlan); // Set the seat plan data from the API response
      } else {
        alert("Failed to fetch seat plan.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching the seat plan.");
    } finally {
      setLoading(false);
    }
  };

  // Function to create seat plan via POST request
  const handleCreateSeatPlan = async () => {
    if (!exam || !className || !section || !roomNumber) {
      alert("Please select all fields and room number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/admin/create-seat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomNumber,
          seatRules,
          class: className,
          section,
          exam
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSeatPlan(data.seatPlan); // Set the seat plan data from the API response
      } else {
        alert("Failed to generate seat plan.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while generating the seat plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Generate Seat Plan</h1>

        {/* Select Criteria */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-6 items-center">
            {/* Room Number */}
            <div className="w-1/3">
              <label htmlFor="roomNumber" className="block text-sm text-gray-600 mb-1">Room Number</label>
              <input
                type="text"
                id="roomNumber"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Room Number"
              />
            </div>

            {/* Select Exam */}
            <div className="w-1/3">
              <label htmlFor="exam" className="block text-sm text-gray-600 mb-1">Select Exam</label>
              <select
                id="exam"
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Exam</option>
                <option value="mid-term">Mid Term</option>
                <option value="final-term">Final Term</option>
              </select>
            </div>

            {/* Select Class */}
            <div className="w-1/3">
              <label htmlFor="className" className="block text-sm text-gray-600 mb-1">Select Class</label>
              <select
                id="className"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Class</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
              </select>
            </div>
          </div>

          <div className="flex gap-6 items-center mt-4">
            {/* Select Section */}
            <div className="w-1/3">
              <label htmlFor="section" className="block text-sm text-gray-600 mb-1">Select Section</label>
              <select
                id="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleFetchSeatPlan}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Fetching...' : 'Fetch Seat Plan'}
            </button>

            <button
              onClick={handleCreateSeatPlan}
              className="bg-purple-500 text-white py-2 px-4 rounded ml-4 hover:bg-purple-600"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Seat Plan'}
            </button>
          </div>
        </div>

        {/* Results or Seat Plan Section */}
        <div className="mt-6">
          {seatPlan.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Seat Number</th>
                    <th className="px-4 py-2 text-left">Student Name</th>
                    <th className="px-4 py-2 text-left">Room Number</th>
                    <th className="px-4 py-2 text-left">Row</th>
                    <th className="px-4 py-2 text-left">Class</th>
                    <th className="px-4 py-2 text-left">Section</th>
                    <th className="px-4 py-2 text-left">Exam</th>
                  </tr>
                </thead>
                <tbody>
                  {seatPlan.map((seat, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{seat.seatNumber}</td>
                      <td className="px-4 py-2">{seat.name || 'Not Assigned'}</td>
                      <td className="px-4 py-2">{seat.roomNumber}</td>
                      <td className="px-4 py-2">{seat.row}</td>
                      <td className="px-4 py-2">{seat.class}</td>
                      <td className="px-4 py-2">{seat.section}</td>
                      <td className="px-4 py-2">{seat.exam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-700">Seat Plan details will appear here after fetching</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateSeatPlan;
