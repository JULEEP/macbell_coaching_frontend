import React, { useState, useEffect } from "react";
import axios from "axios";  // Import axios for making API requests
import { useParams } from "react-router-dom"; // Import useParams to get the student ID from URL
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const StudentDetailsPage = () => {
  // Use the static ID directly here
  const studentId = "676cf56dfd1eb1caa8426205"; // Static student ID
  const [activeButton, setActiveButton] = useState("Profile");
  const [studentData, setStudentData] = useState(null);  // State to store student data
  const [loading, setLoading] = useState(true);  // State to handle loading state

  // Fetch student data based on static studentId
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/admin/single-student/${studentId}`);
        setStudentData(response.data.student);  // Store student data
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName) =>
    activeButton === buttonName
      ? "bg-white text-purple-500 border border-purple-500 px-4 py-2 rounded-md"
      : "bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600";

  if (loading) {
    return <div>Loading...</div>;  // Display loading message while data is being fetched
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-800 text-left mb-8">
          Student Details
        </h1>

        <div className="flex space-x-6">
          {/* Left Side - Student Profile (smaller width and rounded corners) */}
          <div className="bg-white shadow-md rounded-lg p-4 w-1/4">
            {/* Profile Photo (static image as a placeholder) */}
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png"  // Static image
                alt="Profile"
                className="w-16 h-16 rounded-full border-4 border-purple-500"
              />
            </div>

            {/* Student Details */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Student Name: </strong></p>
                <p className="text-sm text-purple-400">{studentData.firstName} {studentData.lastName}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Admission Number: </strong></p>
                <p className="text-sm text-purple-400">{studentData.admissionNumber}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Roll Number: </strong></p>
                <p className="text-sm text-purple-400">{studentData.roll}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Class: </strong></p>
                <p className="text-sm text-purple-400">{studentData.class}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Section: </strong></p>
                <p className="text-sm text-purple-400">{studentData.section}</p>
              </div>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between">
                <p className="text-sm text-gray-400"><strong>Gender: </strong></p>
                <p className="text-sm text-purple-400">{studentData.gender}</p>
              </div>
              <hr className="my-2 border-gray-300" />
            </div>
          </div>

          {/* Right Side - Profile Options (Horizontal Row) */}
          <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
            {/* Profile Options (Horizontal Row) */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleButtonClick("Profile")}
                className={buttonStyle("Profile")}
              >
                Profile
              </button>
              <button
                onClick={() => handleButtonClick("Leave")}
                className={buttonStyle("Leave")}
              >
                Leave
              </button>
              <button
                onClick={() => handleButtonClick("Exam")}
                className={buttonStyle("Exam")}
              >
                Exam
              </button>
              <button
                onClick={() => handleButtonClick("OnlineExam")}
                className={buttonStyle("OnlineExam")}
              >
                Online Exam
              </button>
              <button
                onClick={() => handleButtonClick("Documents")}
                className={buttonStyle("Documents")}
              >
                Documents
              </button>
              <button
                onClick={() => handleButtonClick("Record")}
                className={buttonStyle("Record")}
              >
                Record
              </button>
            </div>

            {/* Display Detailed Information when Profile button is clicked */}
            {activeButton === "Profile" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Personal Info
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Admission Date:</p>
                    <p className="text-sm text-purple-400">{studentData.admissionDate}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Date Of Birth:</p>
                    <p className="text-sm text-purple-400">{studentData.dateOfBirth}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Religion:</p>
                    <p className="text-sm text-purple-400">{studentData.religion}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Phone Number:</p>
                    <p className="text-sm text-purple-400">{studentData.phone}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Email Address:</p>
                    <p className="text-sm text-purple-400">{studentData.email}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">Present Address:</p>
                    <p className="text-sm text-purple-400">{studentData.address}</p>
                  </div>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
            )}
            
            {/* Add similar sections for other buttons like Leave, Exam, Online Exam, etc. */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
