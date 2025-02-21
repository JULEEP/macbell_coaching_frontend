import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa"; // Sidebar toggle icons
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS

const AddExamType = () => {
  const [examName, setExamName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  // Handle Save Exam Type
  const handleSaveExamType = async () => {
    if (examName) {
      try {
        const response = await axios.post("https://school-backend-1-2xki.onrender.com/api/admin/examtype", {
          examName: examName,
        });

        if (response.status === 201) {
          toast.success("Exam Type Added Successfully!"); // Success notification
          setExamName(""); // Clear the input field after saving
        } else {
          toast.error("Failed to add exam type."); // Error notification
        }
      } catch (error) {
        toast.error(`Error adding exam type: ${error.response?.data?.message || error.message}`); // Error notification
      }
    } else {
      toast.warning("Please enter an exam name."); // Warning notification
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Add Exam Type</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Main Form Section */}
        <div className="space-y-4 px-4 lg:px-8 py-4">
          <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded shadow mb-6 lg:mb-0">
            <h2 className="text-lg mb-4 text-gray-600">Add Exam Type</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Exam Name *</label>
                <input
                  type="text"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter Exam Name"
                />
              </div>

              <button
                onClick={handleSaveExamType}
                className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
              >
                Save Exam Type
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default AddExamType;
