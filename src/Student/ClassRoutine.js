import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ClassRoutinePage = () => {
  const [routine, setRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Use static studentId
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId

  // Log static studentId
  console.log("Using static studentId:", studentId);

  useEffect(() => {
    const fetchRoutine = async () => {
      if (!studentId) {
        setError("Student not found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:4000/api/students/get-routine/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setRoutine(data); // Save the fetched routine data
        } else {
          setError(data.message || "Error fetching routine");
        }
      } catch (err) {
        setError("An error occurred while fetching the routine");
      } finally {
        setLoading(false);
      }
    };

    fetchRoutine();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Class Routine</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {/* Class Routine Header */}
          <h2 className="text-xl font-semibold text-gray-800">
            Class Routine - {routine.class} ({routine.section})
          </h2>
          <p className="text-sm text-gray-500">Class Routine</p>

          {/* Class Routine Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Day</th>
                  <th className="px-4 py-2 text-left text-gray-400">Time</th>
                  <th className="px-4 py-2 text-left text-gray-400">Subject</th>
                </tr>
              </thead>
              <tbody>
                {routine.routine && routine.routine.map((session, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center text-gray-400">{session.day}</td>
                    <td className="px-4 py-2 text-center text-gray-400">{session.time}</td>
                    <td className="px-4 py-2 text-center text-gray-400">{session.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutinePage;
