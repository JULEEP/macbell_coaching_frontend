
import React, { useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for sidebar toggling

const TeacherComingSoon = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none w-64`}
      >
        <TeacherSidebar />
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header for small screens */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Coming Soon</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white shadow-lg rounded-lg mt-4 flex justify-center items-center h-full">
          <img
            src="https://t3.ftcdn.net/jpg/02/48/39/78/360_F_248397818_Wey1l20OH5SdyDslNe7pUgkYiEmp5koS.jpg"
            alt="Beautiful Image"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherComingSoon;

