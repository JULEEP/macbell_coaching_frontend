import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar"; // Import TeacherSidebar component

// Dummy data for homework assignments
const homeworkData = {
  "Class 1": {
    A: [
      { title: "Math Homework", description: "Solve 20 algebra problems", dueDate: "2024-12-30" },
      { title: "Science Homework", description: "Write a report on the solar system", dueDate: "2024-12-31" },
    ],
    B: [
      { title: "Math Homework", description: "Solve 15 geometry problems", dueDate: "2024-12-29" },
      { title: "English Homework", description: "Read chapter 5 and write a summary", dueDate: "2024-12-28" },
    ],
  },
  "Class 2": {
    A: [
      { title: "English Homework", description: "Read chapter 2 and answer questions", dueDate: "2024-12-31" },
    ],
  },
};

const TeacherHomework = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [homeworkAssignments, setHomeworkAssignments] = useState([]);

  // Handle class selection
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSection(""); // Reset section on class change
    setHomeworkAssignments([]); // Clear homework list
  };

  // Handle section selection
  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
    // Set homework only if class and section are both selected and exist in the data
    if (
      selectedClass &&
      homeworkData[selectedClass] &&
      homeworkData[selectedClass][e.target.value]
    ) {
      setHomeworkAssignments(homeworkData[selectedClass][e.target.value]);
    }
  };

  // Filter homework based on class and section
  const filteredHomework =
    selectedClass && selectedSection
      ? homeworkAssignments
      : [];

  return (
    <div className="flex">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        <h1 className="text-xl text-purple-700 mb-6">Assigned Homework</h1>

        {/* Filters (Class, Section displayed together) */}
        <div className="flex space-x-6 mb-6 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex-1">
            <label className="mr-4 text-lg">Select Class:</label>
            <select
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedClass}
              onChange={handleClassChange}
            >
              <option value="">Select Class</option>
              {/* Populate class options dynamically */}
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
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
                Object.keys(homeworkData[selectedClass]).map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Homework List */}
        {selectedClass && selectedSection && filteredHomework.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Homework Title</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredHomework.map((homework, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{homework.title}</td>
                    <td className="px-4 py-2">{homework.description}</td>
                    <td className="px-4 py-2">{homework.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No homework found for the selected class and section.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherHomework;
