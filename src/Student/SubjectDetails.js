import React, { useEffect, useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the Sidebar component

const SubjectDetails = () => {
  const [subjects, setSubjects] = useState([]); // State to store the subjects
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const studentId = "676cf56dfd1eb1caa8426205"; // Static studentId (could be dynamic based on context)

  // Fetch subject details from API
  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(""); // Reset error
      try {
        // Fetch subject details from API
        const response = await fetch(`https://school-backend-1-2xki.onrender.com/api/students/subjects/${studentId}`);
        const data = await response.json();

        if (response.ok) {
          setSubjects(data.student.subjects); // Set subjects data in state
        } else {
          setError(data.message || "Error fetching subjects");
        }
      } catch (err) {
        setError("An error occurred while fetching subjects");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects(); // Call the function to fetch subjects
  }, [studentId]); // This effect runs once when the component mounts

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Subject Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Subject Details</h1>

        {/* Class and Section */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Class: 5 (A)</h2>

        {/* Subject Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject Details</h3>

          {/* Display error if there is any */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Display loading state */}
          {loading && <p className="text-gray-500">Loading subjects...</p>}

          {/* Subject Details Row */}
          <div className="flex justify-between space-x-8">
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <div key={subject._id} className="flex-1 flex justify-between items-center">
                  {/* Subject Column */}
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-700">Subject</span>
                    <p className="text-gray-600">{subject.subjectName}</p>
                  </div>

                  {/* Teacher Column */}
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-700">Teacher</span>
                    <p className="text-gray-600">{subject.teacher}</p>
                  </div>

                  {/* Subject Type Column */}
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-700">Subject Type</span>
                    <p className="text-gray-600">{subject.subjectType}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No subjects available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
