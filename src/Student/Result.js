import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import StudentSidebar from "../Sidebar";

const ResultPage = () => {
  const [marks, setMarks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const marksheetRef = useRef();

  const studentId = "676cf56dfd1eb1caa8426205";

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/marks/${studentId}`
        );
        const data = await response.json();

        if (response.ok) {
          setMarks(data.marks);
        } else {
          setError(data.message || "Error fetching marks");
        }
      } catch (err) {
        setError("An error occurred while fetching marks");
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
  }, [studentId]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const downloadPDF = async () => {
    const element = marksheetRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Marksheet.pdf");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <StudentSidebar />
      </div>

      <div
        className={`flex-grow overflow-y-auto transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Result</h1>
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {marks && (
          <div
            ref={marksheetRef}
            className="bg-white shadow-md rounded-xl p-8 my-6"
          >
            <div className="text-center border-b pb-4">
              <h1 className="text-3xl font-bold text-purple-700">Marksheet</h1>
              <p className="text-gray-500">
                Academic Year: 2023-24 | Student ID: {studentId}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Student Details
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p>
                  <strong>Name:</strong> {marks.student.firstName}{" "}
                  {marks.student.lastName}
                </p>
                <p>
                  <strong>Class:</strong> {marks.student.class}{" "}
                  {marks.student.section}
                </p>
                <p>
                  <strong>Roll:</strong> {marks.student.roll}
                </p>
                <p>
                  <strong>Father's Name:</strong> {marks.student.fatherName}
                </p>
                <p>
                  <strong>Mother's Name:</strong> {marks.student.motherName}
                </p>
                <p>
                  <strong>Overall Percentage:</strong>{" "}
                  {marks.overallPercentage}%
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      marks.overallStatus === "Pass"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {marks.overallStatus}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Subject Results
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border rounded-lg bg-gray-50 text-sm">
                  <thead>
                    <tr className="text-left bg-purple-700 text-white">
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Marks Obtained</th>
                      <th className="py-3 px-4">Total Marks</th>
                      <th className="py-3 px-4">Percentage</th>
                      <th className="py-3 px-4">Grade</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marks.subjects.map((subject, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        <td className="py-3 px-4">{subject.subject}</td>
                        <td className="py-3 px-4">{subject.marksObtained}</td>
                        <td className="py-3 px-4">{subject.totalMarks}</td>
                        <td className="py-3 px-4">{subject.percentage}%</td>
                        <td className="py-3 px-4">{subject.grade}</td>
                        <td className="py-3 px-4">
                          <span
                            className={
                              subject.status === "Pass"
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {subject.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={downloadPDF}
          className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-purple-700 transition"
        >
          Download Marksheet
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ResultPage;
