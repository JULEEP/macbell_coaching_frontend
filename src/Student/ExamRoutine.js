import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import StudentSidebar from "../Sidebar";

const ExamRoutinePage = () => {
  const [admitCardData, setAdmitCardData] = useState(null);
  const [examScheduleData, setExamScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const admitCardRef = useRef();

  const studentId = "676cf56dfd1eb1caa8426205";

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        // Fetch Admit Card Data
        const admitCardResponse = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-admit-card/${studentId}`
        );
        const admitCardResult = await admitCardResponse.json();
        if (admitCardResponse.ok) {
          setAdmitCardData(admitCardResult);
        } else {
          throw new Error(admitCardResult.message || "Error fetching admit card data");
        }

        // Fetch Exam Schedule Data
        const examScheduleResponse = await fetch(
          `https://school-backend-1-2xki.onrender.com/api/students/get-exam-schedule/${studentId}`
        );
        const examScheduleResult = await examScheduleResponse.json();
        if (examScheduleResponse.ok) {
          setExamScheduleData(examScheduleResult.examSchedules);
        } else {
          throw new Error(examScheduleResult.message || "Error fetching exam schedule data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [studentId]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const downloadPDF = async () => {
    const element = admitCardRef.current;
  
    // Save original styles
    const originalOverflow = element.style.overflow;
    const originalWidth = element.style.width;
    const originalHeight = element.style.height;
  
    // Temporarily adjust styles for rendering
    element.style.overflow = "visible";
    element.style.width = "1000px"; // A4 size width
    element.style.height = "auto";
  
    try {
      // Capture the content using html2canvas
      const canvas = await html2canvas(element, { scale: 2 });
  
      // Restore original styles
      element.style.overflow = originalOverflow;
      element.style.width = originalWidth;
      element.style.height = originalHeight;
  
      // Convert content to image
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      // Add content image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
      // Add the logo in the top-right corner
      const logoUrl =
        "https://res.cloudinary.com/dokfnv3vy/image/upload/v1736084543/custom/yhbii0wbedftmpvlpnon.jpg";
  
      try {
        const response = await fetch(logoUrl, { mode: "cors" }); // Ensure CORS is enabled
        if (!response.ok) {
          throw new Error(`Failed to fetch the logo. Status: ${response.status}`);
        }
        const blob = await response.blob();
        const logoBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
  
        // Logo dimensions
        const logoWidth = 20; // mm
        const logoHeight = 20; // mm
  
        // Add the logo to the PDF
        pdf.addImage(
          logoBase64,
          "PNG",
          pdfWidth - logoWidth - 10, // Top-right position
          4, // Margin from top
          logoWidth,
          logoHeight
        );
      } catch (logoError) {
        console.error("Error adding the logo to the PDF:", logoError);
      }
  
      // Save the PDF
      pdf.save("Admit_Card.pdf");
    } catch (error) {
      console.error("Error generating the PDF:", error);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
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
          <h1 className="text-lg font-bold">Exam Routine</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

       {/* Admit Card Section */}
{admitCardData && (
  <div ref={admitCardRef} className="bg-white shadow-md rounded-xl p-8 my-6">
    {/* Top Section with Institute Name */}
    <div className="text-center border-b pb-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-2">I Start EduCare</h1>
    </div>

    {/* Student Details */}
    <div className="text-center my-4">
      <h5 className="text-xl font-bold text-blue-700 mb-1">Admit Card</h5>
      <p className="text-gray-500 text-lg">
        <span className="font-semibold">Student:</span> {admitCardData.studentDetails.name} | 
        <span className="font-semibold"> Class:</span> {admitCardData.studentDetails.class} 
        <span className="font-semibold"> Section:</span> {admitCardData.studentDetails.section}
      </p>
    </div>

    {/* Exam Schedule */}
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Exam Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border rounded-lg bg-gray-50 text-sm">
          <thead>
            <tr className="text-left bg-purple-700 text-white">
              <th className="py-3 px-4">S.No</th>
              <th className="py-3 px-4">Exam Title</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {admitCardData.examSchedules.map((exam, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{exam.examTitle}</td>
                <td className="py-3 px-4">{exam.subject}</td>
                <td className="py-3 px-4">{new Date(exam.date).toLocaleDateString()}</td>
                <td className="py-3 px-4">{exam.time}</td>
                <td className="py-3 px-4">{exam.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

      {/* Exam Schedule Section */}
{examScheduleData.length > 0 && (
  <div className="bg-white shadow-md rounded-xl p-8 my-6">
    <h2 className="text-lg font-medium text-gray-700 mb-4">Exam Schedule</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border rounded-lg bg-gray-50 text-sm">
        <thead>
          <tr className="text-left bg-purple-700 text-white">
            <th className="py-3 px-4">Exam Title</th>
            <th className="py-3 px-4">Subject</th>
            <th className="py-3 px-4">Class</th>
            <th className="py-3 px-4">Section</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Start Time</th>
            <th className="py-3 px-4">End Time</th>
            <th className="py-3 px-4">Exam Type</th>
            <th className="py-3 px-4">Admit Card Generated</th>
          </tr>
        </thead>
        <tbody>
          {examScheduleData.map((exam, index) => (
            <tr
              key={exam._id}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="py-3 px-4">{exam.examTitle || "N/A"}</td>
              <td className="py-3 px-4">{exam.subject || "N/A"}</td>
              <td className="py-3 px-4">{exam.class || "N/A"}</td>
              <td className="py-3 px-4">{exam.section || "N/A"}</td>
              <td className="py-3 px-4">{new Date(exam.examDate).toLocaleDateString()}</td>
              <td className="py-3 px-4">{exam.startTime || "N/A"}</td>
              <td className="py-3 px-4">{exam.endTime || "N/A"}</td>
              <td className="py-3 px-4">{exam.examType || "N/A"}</td>
              <td className="py-3 px-4">
                {exam.isAdmitCardGenerated ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-600 font-medium">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

        <button
          onClick={downloadPDF}
          className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-purple-700 transition"
        >
          Download Admit Card
        </button>
      </div>
    </div>
  );
};

export default ExamRoutinePage;
