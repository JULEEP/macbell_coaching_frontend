import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Teacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
      setTeacherList(response.data.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      alert("Error fetching teachers. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = teacherList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teacherList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle form submit to add a teacher
  const handleAddTeacher = async () => {
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
      setIsPopupOpen(false);
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

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Teacher List</h2>

        {/* Add Teacher Button */}
        <button
          onClick={() => setIsPopupOpen(true)}
          className="mb-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          + Add Teacher
        </button>

        <div className="bg-white rounded-md shadow-md p-4 overflow-x-auto">
          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">SL</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Teacher Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Email</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Phone</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Address</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Experience</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Age</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Gender</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Education</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Joining Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700 text-left">Password</th>
                </tr>
              </thead>
              <tbody>
                {currentTeachers.length > 0 ? (
                  currentTeachers.map((teacher, index) => (
                    <tr key={teacher._id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.name}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.email}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.phone || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.address || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.lastExperience || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.age || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.gender || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.education || "N/A"}</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        {teacher.joiningDate ? new Date(teacher.joiningDate).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">{teacher.password || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="text-center text-gray-700 py-4">
                      No teachers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              className={`px-4 py-2 bg-purple-700 rounded-md text-white ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="text-white-600">Page {currentPage} of {totalPages}</div>
            <button
              className={`px-4 py-2 bg-purple-700 rounded-md text-white ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal for Adding Teacher */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-3/4 lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Add Teacher</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Form Fields */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Teacher Name</label>
                <input
                  type="text"
                  value={teacherDetails.name}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter teacher name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={teacherDetails.email}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={teacherDetails.phone}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={teacherDetails.address}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, address: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Experience</label>
                <input
                  type="text"
                  value={teacherDetails.lastExperience}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, lastExperience: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter experience"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="text"
                  value={teacherDetails.age}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, age: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter age"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Gender</label>
                <select
                  value={teacherDetails.gender}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, gender: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Education</label>
                <input
                  type="text"
                  value={teacherDetails.education}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, education: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter education"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Joining Date</label>
                <input
                  type="date"
                  value={teacherDetails.joiningDate}
                  onChange={(e) =>
                    setTeacherDetails({ ...teacherDetails, joiningDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleAddTeacher}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mr-4"
              >
                Submit
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
