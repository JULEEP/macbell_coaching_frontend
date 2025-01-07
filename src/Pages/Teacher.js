import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Teacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [teacherDetails, setTeacherDetails] = useState({
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

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "https://school-backend-1-2xki.onrender.com/api/admin/get-teacher"
      );
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
        "https://school-backend-1-2xki.onrender.com/api/admin/add-teacher",
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTeachers = teacherList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(teacherList.length / itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-72 flex-1">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Teacher List</h1>

        {/* Add Teacher Form */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8 w-full max-w-5xl">
          <h2 className="text-lg text-gray-700 mb-4">Add Teacher</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
                <label htmlFor={field.name} className="text-sm text-gray-600">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={teacherDetails[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-gray-600">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={teacherDetails.joiningDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>

       {/* Teacher List */}
<h2 className="text-lg text-gray-700 mb-4">Teacher List</h2>
<table className="w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 py-2 border-b border-gray-300">SL</th>
      <th className="px-4 py-2 border-b border-gray-300">Teacher Name</th>
      <th className="px-4 py-2 border-b border-gray-300">Email</th>
      <th className="px-4 py-2 border-b border-gray-300">Phone</th>
      <th className="px-4 py-2 border-b border-gray-300">Address</th>
      <th className="px-4 py-2 border-b border-gray-300">Experience</th>
      <th className="px-4 py-2 border-b border-gray-300">Age</th>
      <th className="px-4 py-2 border-b border-gray-300">Gender</th>
      <th className="px-4 py-2 border-b border-gray-300">Education</th>
      <th className="px-4 py-2 border-b border-gray-300">Joining Date</th>
    </tr>
  </thead>
  <tbody>
    {currentTeachers.length > 0 ? (
      currentTeachers.map((teacher, index) => (
        <tr key={teacher._id}>
          <td className="px-4 py-2 border-b">{startIndex + index + 1}</td>
          <td className="px-4 py-2 border-b">{teacher.name}</td>
          <td className="px-4 py-2 border-b">{teacher.email}</td>
          <td className="px-4 py-2 border-b">{teacher.phone || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.address || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.lastExperience || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.age || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.gender || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.education || "N/A"}</td>
          <td className="px-4 py-2 border-b">{teacher.joiningDate || "N/A"}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="10" className="text-center text-gray-500">
          No teachers found.
        </td>
      </tr>
    )}
  </tbody>
</table>
        </div>
      </div>
  );
};

export default Teacher;
