import React, { useState } from "react";
import { FaHome, FaUser, FaWallet, FaList, FaChalkboardTeacher, FaBook, FaClipboardCheck, FaChevronDown, FaChevronRight } from "react-icons/fa"; // Added icons
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const StudnetSidebar = () => {
  const [isLessonPlanOpen, setLessonPlanOpen] = useState(false); // State for toggling Lesson Plan section
  const [isDownloadCenterOpen, setDownloadCenterOpen] = useState(false); // State for toggling Download Center section
  const [isLeaveOpen, setLeaveOpen] = useState(false); // State for toggling Leave section
  const [isChatOpen, setChatOpen] = useState(false); // State for toggling Chat section
  const [isExaminationsOpen, setExaminationsOpen] = useState(false); // State for toggling Examinations section
  const [isLibraryOpen, setLibraryOpen] = useState(false); // State for toggling Library section

  const toggleLibrary = () => {
    setLibraryOpen((prev) => !prev); // Toggle state for Library dropdown
  };


  const toggleExaminations = () => {
    setExaminationsOpen((prev) => !prev); // Toggle state for Examinations dropdown
  };


  const toggleChat = () => {
    setChatOpen((prev) => !prev); // Toggle state for Chat dropdown
  };

  const toggleLeave = () => {
    setLeaveOpen((prev) => !prev); // Toggle state for Leave dropdown
  };



  const toggleLessonPlan = () => {
    setLessonPlanOpen((prev) => !prev); // Toggle state to open/close the Lesson Plan section
  };

  const toggleDownloadCenter = () => {
    setDownloadCenterOpen((prev) => !prev); // Toggle state to open/close the Download Center section
  };


  return (
    <div className="w-64 bg-black overflow-y-auto max-h-screen ml-0 rounded-lg">
    {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/01/14/11/ai-generated-8033671_960_720.png" // Replace with your logo
          alt="Logo"
          className="w-32 h-32 rounded-full"
        />
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-0">
        {/* Dashboard Link */}
        <li className="flex items-center text-lg text-gray-400 p-3 rounded-md">
          <NavLink 
            to="/student-dashboard" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <FaHome className="mr-3" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Sidebar Manager */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <span>Sidebar Manager</span>
        </li>

        {/* Profile Link */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <NavLink 
            to="/student-profile" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <FaUser className="mr-3" />
            <span>My Profile</span>
          </NavLink>
        </li>

        {/* Fees Addon */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaWallet className="mr-3" />
          <NavLink 
            to="/feesinvo" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Fees Addon</span>
          </NavLink>
        </li>

        {/* My Wallet */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaWallet className="mr-3" />
          <NavLink 
            to="/student-dashboard" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>My Wallet</span>
          </NavLink>
        </li>

        {/* Class Routine */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaChalkboardTeacher className="mr-3" />
          <NavLink 
            to="/class-routine" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Class Routine</span>
          </NavLink>
        </li>

      {/* Lesson Plan Section */}
<li className="flex flex-col items-start text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
<div className="flex items-center w-full cursor-pointer" onClick={toggleLessonPlan}>
  <FaList className="mr-3" />
  <span>Lesson Plan</span>
  {isLessonPlanOpen ? (
    <FaChevronDown className="ml-2" />
  ) : (
    <FaChevronRight className="ml-2" />
  )}
</div>
{isLessonPlanOpen && (
  <ul className="pl-8 space-y-4 mt-2">
    <li>
      <NavLink
        to="/student-lessonplan"
        className="flex items-center text-lg text-gray-400 hover:text-gray-300"
        activeClassName="text-blue-500"
      >
        <span className="text-xs whitespace-nowrap">Lesson Plan</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/student-lessonplan-overview"
        className="flex items-center text-lg text-gray-400 hover:text-gray-300"
        activeClassName="text-blue-500"
      >
        <span className="text-xs whitespace-nowrap">Lesson Plan Overview</span>
      </NavLink>
    </li>
  </ul>
)}
</li>
        {/* Homework List */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <NavLink 
            to="/student-homework" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Homework List</span>
          </NavLink>
        </li>

       {/* Download Center */}
<li className="flex flex-col items-start text-sm text-gray-300 hover:text-gray-400 p-3 rounded-md">
<div className="flex items-center w-full cursor-pointer" onClick={toggleDownloadCenter}>
  <FaBook className="mr-3" />
  <span>Download Center</span>
  {isDownloadCenterOpen ? (
    <FaChevronDown className="ml-2" />
  ) : (
    <FaChevronRight className="ml-2" />
  )}
</div>
{isDownloadCenterOpen && (
  <ul className="pl-8 space-y-4 mt-2">
    <li>
      <NavLink
        to="/student-assignment"
        className="flex items-center text-lg text-gray-400 hover:text-gray-300"
        activeClassName="text-blue-500"
      >
        <span className="text-xs whitespace-nowrap">Assignment</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/student-syllabus"
        className="flex items-center text-lg text-gray-400 hover:text-gray-300"
        activeClassName="text-blue-500"
      >
        <span className="text-xs whitespace-nowrap">Syllabus</span>
      </NavLink>
    </li>
  </ul>
)}
</li>
        {/* Attendance */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaClipboardCheck className="mr-3" />
          <NavLink 
            to="/student-attendance" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Attendance</span>
          </NavLink>
        </li>

               {/* Leave Section with Dropdown */}
               <li className="flex flex-col items-start text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
               <div className="flex items-center w-full cursor-pointer" onClick={toggleLeave}>
                 <FaList className="mr-3" />
                 <span>Leave</span>
                 {isLeaveOpen ? (
                   <FaChevronDown className="ml-2" />
                 ) : (
                   <FaChevronRight className="ml-2" />
                 )}
               </div>
               {isLeaveOpen && (
                 <ul className="pl-8 space-y-4 mt-2">
                   <li>
                     <NavLink
                       to="/apply-leave"
                       className="flex items-center text-lg text-gray-400 hover:text-gray-300"
                       activeClassName="text-blue-500"
                     >
                       <span className="text-xs whitespace-nowrap">Apply Leave</span>
                     </NavLink>
                   </li>
                   <li>
                     <NavLink
                       to="/pending-leave"
                       className="flex items-center text-lg text-gray-400 hover:text-gray-300"
                       activeClassName="text-blue-500"
                     >
                       <span className="text-xs whitespace-nowrap">Pending Leave Request</span>
                     </NavLink>
                   </li>
                 </ul>
               )}
             </li>     

  {/* Examinations Section with Dropdown */}
  <li className="flex flex-col items-start text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
  <div className="flex items-center w-full cursor-pointer" onClick={toggleExaminations}>
    <FaList className="mr-3" />
    <span>Examinations</span>
    {isExaminationsOpen ? (
      <FaChevronDown className="ml-2" />
    ) : (
      <FaChevronRight className="ml-2" />
    )}
  </div>
  {isExaminationsOpen && (
    <ul className="pl-8 space-y-4 mt-2">
      <li>
        <NavLink
          to="/student-result"
          className="flex items-center text-lg text-gray-400 hover:text-gray-300"
          activeClassName="text-blue-500"
        >
          <span className="text-xs whitespace-nowrap">Result</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/student-exam-routine"
          className="flex items-center text-lg text-gray-400 hover:text-gray-300"
          activeClassName="text-blue-500"
        >
          <span className="text-xs whitespace-nowrap">Exam Schedule</span>
        </NavLink>
      </li>
    </ul>
  )}
</li>
        {/* Notice Board */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <NavLink 
            to="/student-notice-board" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Notice Board</span>
          </NavLink>
        </li>

        {/* Subjects */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <NavLink 
            to="/student-subject-details" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Subjects</span>
          </NavLink>
        </li>

        {/* Teacher */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <NavLink 
            to="/student-teacher-list" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Teacher</span>
          </NavLink>
        </li>

        {/* Transport */}
        <li className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-3 rounded-md">
          <FaList className="mr-3" />
          <NavLink 
            to="/student-transport" 
            className="flex items-center text-lg text-gray-400 hover:text-gray-300" 
            activeClassName="text-blue-500"
          >
            <span>Transport</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};


export default StudnetSidebar;


