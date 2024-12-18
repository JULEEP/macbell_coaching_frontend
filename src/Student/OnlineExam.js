import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const OnlineExamDetails = () => {
  const exams = [
    {
      title: "Math Exam",
      classSection: "Nine (A)",
      subject: "Mathematics",
      examDate: "2024-12-20",
      duration: "2 hours",
      status: "Scheduled",
    },
    {
      title: "Science Exam",
      classSection: "Nine (A)",
      subject: "Science",
      examDate: "2024-12-22",
      duration: "1.5 hours",
      status: "Scheduled",
    },
    {
      title: "English Exam",
      classSection: "Nine (A)",
      subject: "English",
      examDate: "2024-12-25",
      duration: "2 hours",
      status: "Scheduled",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Online Exam Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Online Exam</h1>

        {/* Nine (A) Subtitle */}
        <h2 className="text-xl font-medium text-gray-700 mb-6">Nine (A)</h2>

        {/* Exam Details Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Schedule</h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left text-gray-700">Title</th>
                  <th className="py-2 px-4 text-left text-gray-700">Class (Section)</th>
                  <th className="py-2 px-4 text-left text-gray-700">Subject</th>
                  <th className="py-2 px-4 text-left text-gray-700">Exam Date</th>
                  <th className="py-2 px-4 text-left text-gray-700">Duration</th>
                  <th className="py-2 px-4 text-left text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 px-4">{exam.title}</td>
                    <td className="py-2 px-4">{exam.classSection}</td>
                    <td className="py-2 px-4">{exam.subject}</td>
                    <td className="py-2 px-4">{exam.examDate}</td>
                    <td className="py-2 px-4">{exam.duration}</td>
                    <td className="py-2 px-4">{exam.status}</td>
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

export default OnlineExamDetails;
