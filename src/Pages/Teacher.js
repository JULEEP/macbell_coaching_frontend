import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons

const Teacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    lastExperience: "",
    age: "",
    gender: "",
    education: "",
    joiningDate: new Date().toISOString().split("T")[0], // Current date
  });

  // Fetch teachers from the API
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("https://school-backend-1-2xki.onrender.com/api/admin/get-teacher");
      setTeacherList(response.data.data || []);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      alert("Error fetching teachers. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherDetails({
      ...teacherDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(teacherDetails).forEach((key) => {
      formData.append(key, teacherDetails[key]);
    });

    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/add-teacher",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTeacherList([...teacherList, response.data.teacher]);
      setTeacherDetails({
        name: "",
        email: "",
        phone: "",
        address: "",
        lastExperience: "",
        age: "",
        gender: "",
        education: "",
        joiningDate: new Date().toISOString().split("T")[0],
      });
      alert("Teacher added successfully!");
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Failed to add teacher");
    }
  };

  // Pagination Logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTeachers = teacherList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(teacherList.length / itemsPerPage);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Mobile View: Header and Sidebar Toggle Icon */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Teacher List</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Teacher List</h1>

        {/* Add Teacher Form Section */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-lg text-gray-700 mb-4">Add Teacher</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-6">
            {[
              { label: "Teacher Name", name: "name", type: "text", placeholder: "Enter teacher name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
              { label: "Phone", name: "phone", type: "text", placeholder: "Enter phone" },
              { label: "Address", name: "address", type: "text", placeholder: "Enter address" },
              { label: "Experience", name: "lastExperience", type: "text", placeholder: "Enter experience" },
              { label: "Age", name: "age", type: "number", placeholder: "Enter age" },
              { label: "Education", name: "education", type: "text", placeholder: "Enter education" },
            ].map((field, index) => (
              <div key={index}>
                <label htmlFor={field.name} className="text-sm text-gray-600">{field.label}</label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={teacherDetails[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={teacherDetails.joiningDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="col-span-1">
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Teacher List Section */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg text-gray-700 mb-4">Teacher List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">SL</th>
                  <th className="px-4 py-2 text-gray-600">Teacher Name</th>
                  <th className="px-4 py-2 text-gray-600">Email</th>
                  <th className="px-4 py-2 text-gray-600">Phone</th>
                  <th className="px-4 py-2 text-gray-600">Address</th>
                  <th className="px-4 py-2 text-gray-600">Experience</th>
                  <th className="px-4 py-2 text-gray-600">Age</th>
                  <th className="px-4 py-2 text-gray-600">Gender</th>
                  <th className="px-4 py-2 text-gray-600">Education</th>
                  <th className="px-4 py-2 text-gray-600">Joining Date</th>
                </tr>
              </thead>
              <tbody>
                {currentTeachers.length > 0 ? (
                  currentTeachers.map((teacher, index) => (
                    <tr key={teacher._id} className="border-t border-gray-300">
                      <td className="px-4 py-2 text-gray-600">{startIndex + index + 1}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.name}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.email}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.phone || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.address || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.lastExperience || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.age || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.gender || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.education || "N/A"}</td>
                      <td className="px-4 py-2 text-gray-600">{teacher.joiningDate || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-4 py-2 text-center text-gray-500">
                      No teachers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teacher;
