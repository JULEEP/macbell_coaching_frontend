import React, { useState, useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar"; // Import TeacherSidebar component

const TeacherMarks = () => {
  const [marksData, setMarksData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [marksPerPage] = useState(10); // Number of marks per page

  // Fetch marks data from API
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/teacher/marks");
        const data = await response.json();
        if (data.message === "Marks retrieved successfully") {
          setMarksData(data.marks);
        } else {
          console.error("Failed to retrieve marks data");
        }
      } catch (error) {
        console.error("Error fetching marks data:", error);
      }
    };

    fetchMarks();
  }, []);

  // Handle subject selection
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Filter marks based on selected subject
  const filteredMarks = marksData.filter((mark) => {
    return selectedSubject ? mark.subject === selectedSubject : true;
  });

  // Pagination logic
  const indexOfLastMark = currentPage * marksPerPage;
  const indexOfFirstMark = indexOfLastMark - marksPerPage;
  const currentMarks = filteredMarks.slice(indexOfFirstMark, indexOfLastMark);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
        <h1 className="text-xl text-purple-700 mb-6">Student Marks</h1>

        {/* Filter (Subject) */}
        <div className="flex mb-6 bg-white shadow-lg p-4 rounded-lg">
          <div className="flex-1">
            <label className="mr-4 text-lg">Select Subject:</label>
            <select
              className="p-2 rounded-lg border border-gray-300 w-full"
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              <option value="">Select Subject</option>
              {[...new Set(marksData.map((mark) => mark.subject))].map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Marks List */}
        {currentMarks.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Student Name</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Roll</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Marks Obtained</th>
                  <th className="px-4 py-2">Total Marks</th>
                  <th className="px-4 py-2">Exam Date</th>
                  <th className="px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {currentMarks.map((mark) => (
                  <tr key={mark._id}>
                    <td className="px-4 py-2">
                      {mark.studentId.firstName} {mark.studentId.lastName}
                    </td>
                    <td className="px-4 py-2">{mark.studentId.class}</td>
                    <td className="px-4 py-2">{mark.studentId.section}</td>
                    <td className="px-4 py-2">{mark.studentId.roll}</td>
                    <td className="px-4 py-2">{mark.subject}</td>
                    <td className="px-4 py-2">{mark.marksObtained}</td>
                    <td className="px-4 py-2">{mark.totalMarks}</td>
                    <td className="px-4 py-2">{new Date(mark.examDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{new Date(mark.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No marks found for the selected subject.</p>
        )}

        {/* Pagination */}
        {filteredMarks.length > marksPerPage && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg mr-2"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredMarks.length / marksPerPage)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherMarks;
