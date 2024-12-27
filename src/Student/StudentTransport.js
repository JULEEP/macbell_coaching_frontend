import React, { useEffect, useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const TransportPage = () => {
  const [student, setStudent] = useState(null); // State to store student data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch student transport details from API
  useEffect(() => {
    const fetchStudentTransport = async () => {
      setLoading(true);
      setError(""); // Reset error
      try {
        const response = await fetch(`https://school-backend-1-2xki.onrender.com/api/students/get-transport/${studentId}`);
        const data = await response.json();

        if (response.ok) {
          setStudent(data.student); // Set student data with transport details
        } else {
          setError(data.message || "Error fetching student transport details");
        }
      } catch (err) {
        setError("An error occurred while fetching student transport details");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentTransport(); // Call the function to fetch student transport data
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>No student data available.</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Transport Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Transport</h1>

        <div className="flex items-start justify-between">
          {/* ID Card */}
          <div className="bg-white shadow-xl rounded-3xl p-6 w-64">
            <div className="border-2 border-gray-300 rounded-3xl p-6">
              {/* Profile Photo */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png" // Replace with your logo
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
              </div>

              {/* Student ID Card Details */}
              <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">ID Card</h3>
              <div className="space-y-2">
                {/* Flex container to align key-value pairs */}
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Student Name:</span>
                  <span>{student.name}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Class:</span>
                  <span>{student.class}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Section:</span>
                  <span>{student.section}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">Gender:</span>
                  <span>{student.gender}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Details */}
          <div className="ml-6 flex-1 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Transport Details</h3>

            {/* Route and Vehicle Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Route</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Vehicle</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Pickup Time</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Drop Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Display transport details */}
                  {student.transport ? (
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-600">{student.transport.route}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{student.transport.vehicle}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{student.transport.pickupTime}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{student.transport.dropTime}</td>
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-2 text-center text-sm text-gray-600">
                        No Transport Assigned
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="mt-4 text-sm text-gray-600 text-center">
                Showing 1 to 1 of 1 entry
              </div>
            </div>

            {/* Driver Details */}
            {student.transport && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700">Driver Details</h4>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="font-medium">Driver Name:</span>
                    <span>{student.transport.driver.name}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="font-medium">Driver Contact:</span>
                    <span>{student.transport.driver.contact}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;
