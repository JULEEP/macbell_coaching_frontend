import React, { useState } from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component


const StudentDetailsPage = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = (buttonName) =>
    activeButton === buttonName
      ? "bg-white text-purple-500 border border-purple-500 px-4 py-2 rounded-md"
      : "bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600";

  return (
    <div className="min-h-screen flex bg-gray-100">
    {/* Sidebar */}
    <StudentSidebar />

    {/* Main Content */}
    <div className="flex-grow p-6">      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-800 text-left mb-8">
        Student Details
      </h1>

      <div className="flex space-x-6">
        {/* Left Side - Student Profile (smaller width and rounded corners) */}
        <div className="bg-white shadow-md rounded-lg p-4 w-1/4">
          {/* Profile Photo (smaller size) */}
          <div className="flex justify-center mb-4">
            <img
            src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png" // Replace with your logo
            alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-purple-500"
            />
          </div>

          {/* Student Details */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Student Name: </strong>
              </p>
              <p className="text-sm text-purple-400">Carter Bahringer</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Admission Number: </strong>
              </p>
              <p className="text-sm text-purple-400">29238</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Roll Number: </strong>
              </p>
              <p className="text-sm text-purple-400">78202</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Class: </strong>
              </p>
              <p className="text-sm text-purple-400">Nine</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Section: </strong>
              </p>
              <p className="text-sm text-purple-400">A</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="flex justify-between">
              <p className="text-sm text-gray-400">
                <strong>Gender: </strong>
              </p>
              <p className="text-sm text-purple-400">Male</p>
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
                  <p className="text-sm text-purple-400">31st Oct, 2020</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Date Of Birth:</p>
                  <p className="text-sm text-purple-400">8th Mar, 2004</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Religion:</p>
                  <p className="text-sm text-purple-400">Male</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Phone Number:</p>
                  <p className="text-sm text-purple-400">+88012345675</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Email Address:</p>
                  <p className="text-sm text-purple-400">
                    student_6460b69419948@infixedu.com
                  </p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Present Address:</p>
                  <p className="text-sm text-purple-400">Bangladesh</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between">
                  <p className="text-sm text-gray-400">Permanent Address:</p>
                  <p className="text-sm text-purple-400">Bangladesh</p>
                </div>
                <hr className="my-2 border-gray-300" />
              </div>
            </div>
          )}

          {/* Display Leave Table when Leave button is clicked */}
          {activeButton === "Leave" && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Leave Details
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Leave Type</th>
                      <th className="px-4 py-2 text-left">Leave From</th>
                      <th className="px-4 py-2 text-left">Leave To</th>
                      <th className="px-4 py-2 text-left">Apply Date</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" className="px-4 py-2 text-center">
                        No Data Available In Table
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Showing 0 to 0 of 0 entries
                </p>
              </div>
            </div>
          )}

          {/* Display Online Exam Section when Online Exam button is clicked */}
          {activeButton === "OnlineExam" && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Online Exam Result
              </h3>
              <p className="text-center text-gray-500 mb-4">Result Not Published Yet</p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2 text-left">Time</th>
                      <th className="px-4 py-2 text-left">Total Marks</th>
                      <th className="px-4 py-2 text-left">Obtained Marks</th>
                      <th className="px-4 py-2 text-left">Result</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" className="px-4 py-2 text-center">
                        No Data Available In Table
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Showing 0 to 0 of 0 entries
                </p>
              </div>
            </div>
          )}

          {/* Display Documents Section when Documents button is clicked */}
          {activeButton === "Documents" && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Documents
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-center">No Data Available In Table</td>
                      <td className="px-4 py-2 text-center"></td>
                      <td className="px-4 py-2 text-center"></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Showing 0 to 0 of 0 entries
                </p>
              </div>
            </div>
          )}

          {/* Display Record Section when Record button is clicked */}
          {activeButton === "Record" && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Record Details
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Class</th>
                      <th className="px-4 py-2 text-left">Section</th>
                      <th className="px-4 py-2 text-left">ID Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-center">Nine</td>
                      <td className="px-4 py-2 text-center">A</td>
                      <td className="px-4 py-2 text-center">78202</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Showing 1 to 1 of 1 entry
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentDetailsPage;
