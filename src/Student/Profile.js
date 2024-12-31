import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component
import axios from "axios";

const StudentDetailsPage = () => {
  const [activeButton, setActiveButton] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");

  const studentId = "676bb21bd06928a8432c676a"; // Example Student ID

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName) =>
    activeButton === buttonName
      ? "bg-white text-purple-500 border border-purple-500 px-4 py-2 rounded-md"
      : "bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600";

  // Fetch student details from the API
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`https://school-backend-1-2xki.onrender.com/api/students/get-details/${studentId}`);
        setStudentDetails(response.data.student); // Store student data in state
      } catch (error) {
        setError("Error fetching student details.");
        console.error("Error:", error);
      }
    };

    fetchStudentDetails();
  }, [studentId]);

  // Check if student data is available
  if (error) return <div className="text-red-500">{error}</div>;
  if (!studentDetails) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Page Title */}
        <h1 className="text-sm font-semibold text-blue-500 mb-6">Student Details</h1>

        <div className="flex space-x-6">
          {/* Left Side - Student Profile */}
          <div className="bg-white shadow-md rounded-lg p-4 w-1/4">
            <div className="flex justify-center mb-4">
            <img
            src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png"
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-purple-500"
          />          
            </div>

            {/* Student Details */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Student Name: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.firstName} {studentDetails.lastName}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Admission Number: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.admissionNumber}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Roll Number: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.roll}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Class: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.class}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Section: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.section}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Gender: </strong></p>
                <p className="text-sm text-purple-400">{studentDetails.gender}</p>
              </div>
              <hr className="my-2 border-gray-300" />
            </div>
          </div>

          {/* Right Side - Profile Options */}
          <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
            {/* Profile Options (Horizontal Row) */}
            <div className="flex space-x-4">
              <button onClick={() => handleButtonClick("Profile")} className={buttonStyle("Profile")}>Profile</button>
              <button onClick={() => handleButtonClick("Leave")} className={buttonStyle("Leave")}>Leave</button>
              <button onClick={() => handleButtonClick("Exam")} className={buttonStyle("Exam")}>Exam</button>
              <button onClick={() => handleButtonClick("OnlineExam")} className={buttonStyle("OnlineExam")}>Online Exam</button>
              <button onClick={() => handleButtonClick("Documents")} className={buttonStyle("Documents")}>Documents</button>
              <button onClick={() => handleButtonClick("Record")} className={buttonStyle("Record")}>Record</button>
            </div>

            {/* Display Profile Information */}
            {activeButton === "Profile" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Admission Date:</p>
                    <p className="text-sm text-purple-400">{new Date(studentDetails.admissionDate).toLocaleDateString()}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Date Of Birth:</p>
                    <p className="text-sm text-purple-400">{new Date(studentDetails.dateOfBirth).toLocaleDateString()}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Religion:</p>
                    <p className="text-sm text-purple-400">{studentDetails.religion}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Phone Number:</p>
                    <p className="text-sm text-purple-400">{studentDetails.phone}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Email Address:</p>
                    <p className="text-sm text-purple-400">{studentDetails.email}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Parents Info</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Father's Name:</p>
                    <p className="text-sm text-purple-400">{studentDetails.fatherName}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Father's Occupation:</p>
                    <p className="text-sm text-purple-400">{studentDetails.fatherOccupation}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Mother's Name:</p>
                    <p className="text-sm text-purple-400">{studentDetails.motherName}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Mother's Occupation:</p>
                    <p className="text-sm text-purple-400">{studentDetails.motherOccupation}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Contact Number:</p>
                    <p className="text-sm text-purple-400">{studentDetails.guardianPhone}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Display Leave Information */}
            {activeButton === "Leave" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave Details</h3>
                {studentDetails.leaves.length > 0 ? (
                  studentDetails.leaves.map((leave, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-400">Leave Type:</p>
                        <p className="text-sm text-purple-400">{leave.leaveType}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-400">Reason:</p>
                        <p className="text-sm text-purple-400">{leave.reason}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-400">Start Date:</p>
                        <p className="text-sm text-purple-400">{new Date(leave.startDate).toLocaleDateString()}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-400">End Date:</p>
                        <p className="text-sm text-purple-400">{new Date(leave.endDate).toLocaleDateString()}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-400">Status:</p>
                        <p className="text-sm text-purple-400">{leave.status}</p>
                      </div>
                      <hr className="my-2 border-gray-300" />
                    </div>
                  ))
                ) : (
                  <p>No leave records available.</p>
                )}
              </div>
            )}

            {/* Display Record Information */}
            {activeButton === "Record" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Record</h3>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Class:</p>
                  <p className="text-sm text-purple-400">{studentDetails.class}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Section:</p>
                  <p className="text-sm text-purple-400">{studentDetails.section}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Gender:</p>
                  <p className="text-sm text-purple-400">{studentDetails.gender}</p>
                </div>
                <hr className="my-2 border-gray-300" />
              </div>
            )}

            {/* Display Exam / Online Exam Message */}
            {["Exam", "OnlineExam"].includes(activeButton) && (
              <div className="mt-6 text-gray-600">
                <p>This section is under development. Stay tuned for future updates!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
