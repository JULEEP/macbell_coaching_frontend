import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";
import { FaBars, FaTimes } from 'react-icons/fa';

const MyChildClassRoutinePage = () => {
  const [classRoutine, setClassRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const parentId = "676f98625b442721a56ee770"; // Example parentId
  const studentId = "676bb21bd06928a8432c676a"; // Example studentId

  // Fetch class routine data from API
  useEffect(() => {
    const fetchClassRoutine = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-routine/${parentId}/${studentId}`
        );

        const data = await response.json();

        if (data.message) {
          setError(data.message);
        } else {
          setClassRoutine(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClassRoutine();
  }, [parentId, studentId]);

  // Toggle Sidebar for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <ParentSidebar />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Header for Mobile */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Class Routine</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Title Section */}
        <h1 className="text-xl font-medium text-blue-500 mb-6">Class Routine</h1>

        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          {/* Class Routine Header */}
          {loading ? (
            <div className="flex justify-center">
              <span>Loading...</span>
            </div>
          ) : error ? (
            <div className="flex justify-center text-red-500">
              <span>{error}</span>
            </div>
          ) : classRoutine ? (
            <>
              <h2 className="text-lg font-medium text-gray-800">
                Class Routine - {classRoutine.class} ({classRoutine.section})
              </h2>
              <p className="text-sm text-gray-500">Class Routine</p>

              {/* Class Routine Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                        <th key={idx} className="px-2 py-1 text-left text-sm text-gray-600">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Loop through the daily routine */}
                    {classRoutine.routine.map((dailyRoutine, index) => (
                      <tr key={index}>
                        {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                          <td key={idx} className="px-2 py-1 text-center text-sm text-gray-600">
                            {dailyRoutine[day] ? (
                              <>
                                Time: {dailyRoutine[day].time} <br />
                                {dailyRoutine[day].subject} ({dailyRoutine[day].code})
                              </>
                            ) : (
                              "No Class"
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex justify-center text-gray-500">
              <span>{error || "No routine data available"}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChildClassRoutinePage;
