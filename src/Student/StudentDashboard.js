import React, { useState } from "react";
import {
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for sidebar toggle
import { Link } from "react-router-dom"; // For navigation
import StudentSidebar from "../Sidebar";

// Importing images
import exam from "../Images/exam.jpeg";
import attendance from "../Images/attendance.jpeg";
import student from "../Images/student.jpeg";
import subject from "../Images/subject.jpeg";
import teacher from "../Images/teacher.jpeg";
import notice from "../Images/notice.jpeg";

const book = "https://static.vecteezy.com/system/resources/previews/003/812/674/large_2x/pink-book-closed-free-vector.jpg";
const transport = "https://static.vecteezy.com/system/resources/previews/002/373/903/large_2x/cartoon-school-bus-with-children-free-vector.jpg";
const routine = 'https://i.pinimg.com/originals/c4/46/bb/c446bbb1d23caacb5c52992aa49492d4.png';
const result = 'https://static.vecteezy.com/system/resources/previews/026/994/790/non_2x/exam-concept-education-studying-digital-elearnning-degree-graduate-concept-tiny-girl-student-with-test-exam-result-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg';

const bestCategories = [
  { img: subject, name: "Subjects", link: "/student-subject-details" },
  { img: student, name: "Homeworks", link: "/student-homework" },
  { img: exam, name: "Exams", link: "/student-exam-routine" },
  { img: teacher, name: "Teachers", link: "/student-teacher-list" },
  { img: attendance, name: "Attendance", link: "/student-attendance" },
  { img: notice, name: "Notice", link: "/student-notice-board" },
  { img: book, name: "Books", link: "/student-booklist" },
  { img: transport, name: "Transport", link: "/student-transport" },
  { img: routine, name: "Routines", link: "/class-routine" },
  { img: result, name: "Results", link: "/student-result" },


];

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const subjectsData = [
    { name: "Math", teacher: "Mr. Smith", time: "9:00 AM" },
    { name: "Science", teacher: "Ms. Johnson", time: "10:00 AM" },
    { name: "History", teacher: "Mr. Brown", time: "11:00 AM" },
  ];

  const teachersData = [
    { name: "Mr. Smith", subject: "Math", contact: "9876543210" },
    { name: "Ms. Johnson", subject: "Science", contact: "1234567890" },
    { name: "Mr. Brown", subject: "History", contact: "4567891230" },
  ];

  const classesData = [
    { className: "Math 101", teacher: "Mr. Smith", students: "30" },
    { className: "Science 102", teacher: "Ms. Johnson", students: "25" },
    { className: "History 103", teacher: "Mr. Brown", students: "28" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-64 z-50 md:translate-x-0`}
      >
        <StudentSidebar />
      </div>

      {/* Overlay for Sidebar on Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="p-4 bg-purple-700 text-white shadow-md flex items-center justify-between md:hidden">
          <h1 className="text-lg font-bold">Student Dashboard</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content Area */}
        <Container
          maxWidth="xl"
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#e0c8a0",
            marginTop: "12px",
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(7, 1fr)"
            gap="5px"
            justifyItems="center"
            sx={{
              "@media (max-width: 1200px)": { gridTemplateColumns: "repeat(4, 1fr)" },
              "@media (max-width: 900px)": { gridTemplateColumns: "repeat(3, 1fr)" },
              "@media (max-width: 600px)": { gridTemplateColumns: "repeat(2, 1fr)" },
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {bestCategories.map((category) => (
              <Box key={category.name} style={{ padding: "5px" }}>
                <Link to={category.link} style={{ textDecoration: "none" }}>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    className="category-box"
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    <Box
                      style={{
                        backgroundColor: "white",
                        padding: "10px",
                        borderRadius: "4px",
                        width: "100%",
                        marginTop: "10px",
                      }}
                    >
                      <p style={{ fontWeight: "bold", color: "black", margin: 0 }}>
                        {category.name}
                      </p>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>

          {/* Tables Section */}
          <Box mt={5}>
            <Box mb={4} style={{ backgroundColor: "#f0f8ff", padding: "20px", borderRadius: "10px" }}>
              <h3 style={{ fontWeight: "bold" }}>Subjects</h3>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Teacher</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subjectsData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.teacher}</TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box mb={4} style={{ backgroundColor: "#e6ffe6", padding: "20px", borderRadius: "10px" }}>
              <h3 style={{ fontWeight: "bold" }}>Teachers</h3>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Contact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teachersData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell>{row.contact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box style={{ backgroundColor: "#fff3e6", padding: "20px", borderRadius: "10px" }}>
              <h3 style={{ fontWeight: "bold" }}>Classes</h3>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Class Name</TableCell>
                      <TableCell>Teacher</TableCell>
                      <TableCell>Number of Students</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {classesData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.className}</TableCell>
                        <TableCell>{row.teacher}</TableCell>
                        <TableCell>{row.students}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default StudentDashboard;
