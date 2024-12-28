import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar"; // Import TeacherSidebar component

// Dummy data for classes, sections, students, and subjects
const classes = ["Class 1", "Class 2", "Class 3"];
const sections = ["A", "B", "C"];
const subjects = ["Math", "English", "Science"];
const studentsData = {
  "Class 1": {
    A: [
      { rollNo: 1, name: "John Doe" },
      { rollNo: 2, name: "Jane Smith" },
    ],
    B: [
      { rollNo: 3, name: "Jim Beam" },
      { rollNo: 4, name: "Jill Scott" },
    ],
  },
  "Class 2": {
    A: [
      { rollNo: 5, name: "Samson Lee" },
      { rollNo: 6, name: "Sara Park" },
    ],
  },
};

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [attendance, setAttendance] = useState([]);

  // Handle class selection
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSection(""); // Reset section on class change
    setAttendance([]); // Clear attendance
  };

  // Handle section selection
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    // Set attendance only if class and section are both selected and exist in the data
    if (studentsData[selectedClass] && studentsData[selectedClass][e.target.value]) {
      setAttendance(
        studentsData[selectedClass][e.target.value].map((student) => ({
          ...student,
          status: "Absent", // Default status for all students
        }))
      );
    }
  };

  // Handle subject selection
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Handle date selection
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Handle attendance status change
  const handleAttendanceChange = (rollNo, status) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.rollNo === rollNo
          ? { ...student, status: status }
          : student
      )
    );
  };

  // Filter students by class and section
  const filteredStudents =
    selectedClass && selectedSection && studentsData[selectedClass] && studentsData[selectedClass][selectedSection]
      ? studentsData[selectedClass][selectedSection]
      : [];

  return (
    <div className="flex">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        <h1 className="text-xl text-purple-700 mb-6">Attendance</h1>

        {/* Filters (Class, Section, Subject, Date displayed together) */}
        <div className="flex space-x-6 mb-6 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex-1">
            <label className="mr-4 text-lg">Select Class:</label>
            <select
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedClass}
              onChange={handleClassChange}
            >
              <option value="">Select Class</option>
              {classes.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="mr-4 text-lg">Select Section:</label>
            <select
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedSection}
              onChange={handleSectionChange}
              disabled={!selectedClass} // Disable section dropdown if class is not selected
            >
              <option value="">Select Section</option>
              {selectedClass &&
                sections.map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="mr-4 text-lg">Select Subject:</label>
            <select
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedSubject}
              onChange={handleSubjectChange}
              disabled={!selectedClass || !selectedSection} // Disable subject dropdown if class or section is not selected
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="mr-4 text-lg">Select Date:</label>
            <input
              type="date"
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedDate}
              onChange={handleDateChange}
              disabled={!selectedClass || !selectedSection || !selectedSubject} // Disable date input if class, section, or subject is not selected
            />
          </div>
        </div>

        {/* Student List and Attendance */}
        {selectedClass && selectedSection && selectedSubject && selectedDate && filteredStudents.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Roll No</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((student) => (
                  <tr key={student.rollNo}>
                    <td className="px-4 py-2">{student.rollNo}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">
                      <button
                        className={`${
                          student.status === "Present"
                            ? "bg-green-500"
                            : "bg-red-500"
                        } text-white px-4 py-2 rounded-lg`}
                        onClick={() =>
                          handleAttendanceChange(
                            student.rollNo,
                            student.status === "Present" ? "Absent" : "Present"
                          )
                        }
                      >
                        {student.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No students found for the selected class, section, subject, and date.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherAttendance;
