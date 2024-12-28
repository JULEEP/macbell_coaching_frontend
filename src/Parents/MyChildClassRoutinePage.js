import React, { useState, useEffect } from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildClassRoutinePage = () => {
  const [classRoutine, setClassRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with the actual parent and student IDs
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

        // If there is a message indicating no routine, set it as an error message
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

  // Always show sidebar
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
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
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Saturday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Sunday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Monday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Tuesday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Wednesday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Thursday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Friday
                      </th>
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
            // Fallback message if no routine data found
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
