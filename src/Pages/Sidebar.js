import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaUsers, FaBook, FaClipboardList, FaChalkboardTeacher, FaDownload, FaCertificate, FaFileAlt, FaCog, FaListAlt, FaCaretDown, FaWallet, FaChartBar, FaComments  } from 'react-icons/fa'; // Import React Icons

const Sidebar = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false); // State to handle the dropdown toggle
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false); // State to handle the dropdown toggle for Academics Section
  const [isStudyMaterialOpen, setIsStudyMaterialOpen] = useState(false); // State for Study Material dropdown
  const [isDownloadCenterOpen, setIsDownloadCenterOpen] = useState(false); // State for Download Center dropdown
  const [isLessonPlanOpen, setIsLessonPlanOpen] = useState(false); // State for Lesson Plan dropdown
  const [isBulkPrintOpen, setIsBulkPrintOpen] = useState(false); // State for Bulk Print dropdown
  const [isCertificateAddonOpen, setIsCertificateAddonOpen] = useState(false); // State for Certificate Addon dropdown
  const [isStudentInfoOpen, setIsStudentInfoOpen] = useState(false); // State for dropdown
  const [isFeesOpen, setIsFeesOpen] = useState(false); // State for dropdown
  const [isBehaviourDropdownOpen, setIsBehaviourDropdownOpen] = useState(false);
  const [isHomeworkDropdownOpen, setIsHomeworkDropdownOpen] = useState(false);
  const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false);
  const [isTransportDropdownOpen, setIsTransportDropdownOpen] = useState(false);
  const [isDormitoryDropdownOpen, setIsDormitoryDropdownOpen] = useState(false);
  const [isExaminationDropdownOpen, setIsExaminationDropdownOpen] = useState(false);
  const [isExamPlanDropdownOpen, setIsExamPlanDropdownOpen] = useState(false);
  const [isOnlineExamDropdownOpen, setIsOnlineExamDropdownOpen] = useState(false);
  const [isHRDropdownOpen, setIsHRDropdownOpen] = useState(false);
  const [isTeacherEvalDropdownOpen, setIsTeacherEvalDropdownOpen] = useState(false);
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(false);
  const [isRolePermissionDropdownOpen, setIsRolePermissionDropdownOpen] = useState(false);
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
  const [isAccountsDropdownOpen, setIsAccountsDropdownOpen] = useState(false);
  const [isChatDropdownOpen, setIsChatDropdownOpen] = useState(false);

const toggleChatDropdown = () => {
  setIsChatDropdownOpen(!isChatDropdownOpen);
};


const toggleAccountsDropdown = () => {
  setIsAccountsDropdownOpen(!isAccountsDropdownOpen);
};


const toggleWalletDropdown = () => {
  setIsWalletDropdownOpen(!isWalletDropdownOpen);
};


  const toggleRolePermissionDropdown = () => {
    setIsRolePermissionDropdownOpen(!isRolePermissionDropdownOpen);
  };

  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen(!isLeaveDropdownOpen);
  };

  const toggleTeacherEvalDropdown = () => {
    setIsTeacherEvalDropdownOpen(!isTeacherEvalDropdownOpen);
  };


  const toggleHRDropdown = () => {
    setIsHRDropdownOpen(!isHRDropdownOpen);
  };

  const toggleOnlineExamDropdown = () => {
    setIsOnlineExamDropdownOpen(!isOnlineExamDropdownOpen);
  };


  const toggleExamPlanDropdown = () => {
    setIsExamPlanDropdownOpen(!isExamPlanDropdownOpen);
  };


  const toggleExaminationDropdown = () => {
    setIsExaminationDropdownOpen(!isExaminationDropdownOpen);
  };


  const toggleDormitoryDropdown = () => {
    setIsDormitoryDropdownOpen(!isDormitoryDropdownOpen);
  };
  const toggleTransportDropdown = () => {
    setIsTransportDropdownOpen(!isTransportDropdownOpen);
  };


  const toggleLibraryDropdown = () => {
    setIsLibraryDropdownOpen(!isLibraryDropdownOpen);
  };

  const toggleHomeworkDropdown = () => {
    setIsHomeworkDropdownOpen(!isHomeworkDropdownOpen);
  };

  const toggleBehaviourDropdown = () => {
    setIsBehaviourDropdownOpen(!isBehaviourDropdownOpen);
  };

  // Toggle function for Fees dropdown
  const toggleFeesDropdown = () => {
    setIsFeesOpen(!isFeesOpen);
  };


  // Toggle function for Student Info dropdown
  const toggleStudentInfoDropdown = () => {
    setIsStudentInfoOpen(!isStudentInfoOpen);
  };

  // Toggle function for Certificate Addon dropdown
  const toggleCertificateAddonDropdown = () => {
    setIsCertificateAddonOpen(!isCertificateAddonOpen);
  };


  // Toggle function for Bulk Print dropdown
  const toggleBulkPrintDropdown = () => {
    setIsBulkPrintOpen(!isBulkPrintOpen);
  };


  // Toggle function for Lesson Plan dropdown
  const toggleLessonPlanDropdown = () => {
    setIsLessonPlanOpen(!isLessonPlanOpen);
  };


  // Toggle function for Download Center dropdown
  const toggleDownloadCenterDropdown = () => {
    setIsDownloadCenterOpen(!isDownloadCenterOpen);
  };



  // Function to toggle the Academics dropdown
  const toggleAcademicsDropdown = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  // Function to toggle the dropdown
  const toggleAdminDropdown = () => {
    setIsAdminOpen(!isAdminOpen);
  };

    // Function to toggle the dropdown
    const toggleStudyMaterialDropdown = () => {
      setIsStudyMaterialOpen(!isStudyMaterialOpen);
    };
  

  return (
    <div className="h-full w-64 bg-black text-white overflow-y-auto fixed">
      <div className="p-4">
        {/* Dashboard Section */}
        <h2 className="text-lg font-bold border-gray-700 pb-2">Admin Dashboard</h2>
        <ul className="mt-4">
        <Link to="/Admin-dashboard" className="hover:text-gray-400">
          <li className="py-2 flex items-center"><FaHome className="w-5 h-5 mr-2" /><a href="#" className="hover:text-gray-400">Dashboard</a></li>
          </Link>
        </ul>

        {/* Sidebar Manager Section */}
        <h2 className="text-lg font mt-6 pb-2 pl-2">Administration</h2>
        <ul className="mt-4">
          {/* Admin Section with Dropdown */}
          <li className="py-2 flex items-center cursor-pointer" onClick={toggleAdminDropdown}>
            <FaUsers className="w-5 h-5 mr-2" />
            <span>Admin Section</span>
            <FaCaretDown className={`ml-2 transition-transform ${isAdminOpen ? 'rotate-180' : 'rotate-0'}`} />
          </li>
          
          {/* Dropdown Menu for Admin Section */}
          {isAdminOpen && (
            <ul className="ml-6 mt-2">
            <li className="py-2">
            <Link to="/query" className="hover:text-gray-400">
              Admission Query
            </Link>
          </li>
           <Link to="/teacher" className="hover:text-gray-400">
           <li className="py-2"><a href="#" className="hover:text-gray-400">Teacher List</a></li>
           </Link>
           <Link to="/staff" className="hover:text-gray-400">
           <li className="py-2"><a href="#" className="hover:text-gray-400">Add Staff</a></li>
           </Link>
           <Link to="/complaint" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Complaint</a></li>
              </Link>
              <Link to="/calllog" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Phone Call Log</a></li>
              </Link>
              <Link to="/visitor" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Admin Setup</a></li>
              </Link>
              <Link to="/certificate" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Certificate</a></li>
              </Link>
              <Link to="/generate-certificate" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Generate Certificate</a></li>
              </Link>
            </ul>
          )}

           {/* Academics Section with Dropdown */}
          <li className="py-2 flex items-center cursor-pointer" onClick={toggleAcademicsDropdown}>
            <FaBook className="w-5 h-5 mr-2" />
            <span>Academics</span>
            <FaCaretDown className={`ml-2 transition-transform ${isAcademicsOpen ? 'rotate-180' : 'rotate-0'}`} />
          </li>

          {/* Dropdown Menu for Academics Section */}
          {isAcademicsOpen && (
            <ul className="ml-6 mt-2">
            <Link to="/optional-subject" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Optional Subject</a></li>
              </Link>
              <Link to="/section" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Section</a></li>
              </Link>
              <Link to="/class" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Class</a></li>
              </Link>
              <Link to="/subject" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Subjects</a></li>
              </Link>
              <Link to="/assign-teacher" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Assign Class Teacher</a></li>
              </Link>
              <Link to="/assign-subject" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Assign Subject</a></li>
              </Link>
              <Link to="/classroom" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Class Room</a></li>
              </Link>
              <Link to="/classroutine" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Class Routine</a></li>
              </Link> 
            </ul>
          )}
          <ul className="mt-4">
          <li className="py-2 flex items-center cursor-pointer" onClick={toggleStudyMaterialDropdown}>
            <FaBook className="w-5 h-5 mr-2" />
            <span>Study Material</span>
            <FaCaretDown className={`ml-2 transition-transform ${isStudyMaterialOpen ? 'rotate-180' : 'rotate-0'}`} />
          </li>

          {/* Study Material Dropdown */}
          {isStudyMaterialOpen && (
            <ul className="ml-6 mt-2">
            <Link to="/updatecontent" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Upload Content</a></li>
              </Link>
              <Link to="/assignment" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Assignment</a></li>
              </Link>
              <Link to="/syllabus" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Syllabus</a></li>
              </Link>
              <Link to="/downloads" className="hover:text-gray-400">
              <li className="py-2"><a href="#" className="hover:text-gray-400">Other Downloads</a></li>
              </Link>
            </ul>
          )}
        </ul>
        <ul className="mt-4">
        <li className="py-2 flex items-center cursor-pointer" onClick={toggleDownloadCenterDropdown}>
          <FaDownload className="w-5 h-5 mr-2" />
          <span>Download Center</span>
          <FaCaretDown className={`ml-2 transition-transform ${isDownloadCenterOpen ? 'rotate-180' : 'rotate-0'}`} />
        </li>

        {isDownloadCenterOpen && (
          <ul className="ml-6 mt-2">
          <Link to="/content" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Content Type</a></li>
            </Link>
            <Link to="/contenttopic" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Content List</a></li>
            </Link>
            <Link to="/sharedcontent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Shared Content List</a></li>
            </Link>
            <Link to="/video" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Video List</a></li>
            </Link>
          </ul>
        )}
      </ul>
      <ul className="mt-4">
      <li className="py-2 flex items-center cursor-pointer" onClick={toggleLessonPlanDropdown}>
        <FaChalkboardTeacher className="w-5 h-5 mr-2" />
        <span>Lesson Plan</span>
        <FaCaretDown className={`ml-2 transition-transform ${isLessonPlanOpen ? 'rotate-180' : 'rotate-0'}`} />
      </li>

      {isLessonPlanOpen && (
        <ul className="ml-6 mt-2">
        <Link to="/lesson" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Lesson</a></li>
          </Link>
          <Link to="/topic" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Topic</a></li>
          </Link>
          <Link to="/lessonplan" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Topic Overview</a></li>
          </Link>
          <Link to="/lessonplanoverview" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Lesson Plan Overview</a></li>
          </Link>
        </ul>
      )}
    </ul>
    <ul className="mt-4">
    <li className="py-2 flex items-center cursor-pointer" onClick={toggleBulkPrintDropdown}>
      <FaFileAlt className="w-5 h-5 mr-2" />
      <span>Bulk Download</span>
      <FaCaretDown className={`ml-2 transition-transform ${isBulkPrintOpen ? 'rotate-180' : 'rotate-0'}`} />
    </li>

    {isBulkPrintOpen && (
      <ul className="ml-6 mt-2">
      <Link to="/stuList" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Students</a></li>
        </Link>
        <Link to="/teacherList" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Teachers</a></li>
        </Link>
        <Link to="/staffList" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Staffs</a></li>
        </Link>
        <Link to="/marks" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Marks</a></li>
        </Link>
      </ul>
    )}
  </ul>
  <ul className="mt-4">
  <li className="py-2 flex items-center cursor-pointer" onClick={toggleCertificateAddonDropdown}>
    <FaCertificate className="w-5 h-5 mr-2" />
    <span>Certificate Addon</span>
    <FaCaretDown className={`ml-2 transition-transform ${isCertificateAddonOpen ? 'rotate-180' : 'rotate-0'}`} />
  </li>

  {isCertificateAddonOpen && (
    <ul className="ml-6 mt-2">
    <Link to="/certificatetype" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Types</a></li>
      </Link>
      <Link to="/certificatetemplate" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Templates</a></li>
      </Link>
      <Link to="/studentcertificate" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Student Certificate</a></li>
      </Link>
      <Link to="/staffcertificate" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Staff Certificate</a></li>
      </Link>
      <Link to="/conditionalcertificate" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Certificate Records</a></li>
      </Link>
      <Link to="/certificatesetting" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
      </Link>
    </ul>
  )}
</ul>
 </ul>

        {/* Student Section */}
        <h2 className="text-lg font mt-6 pb-2 pl-2">Student</h2>
        <ul className="mt-4">
        <ul className="mt-4">
        {/* Student Info Dropdown */}
        <li className="py-2 flex items-center cursor-pointer" onClick={toggleStudentInfoDropdown}>
          <FaUsers className="w-5 h-5 mr-2" />
          <span>Student Info</span>
          <FaCaretDown className={`ml-2 transition-transform ${isStudentInfoOpen ? 'rotate-180' : 'rotate-0'}`} />
        </li>
  
        {/* Dropdown Items */}
        {isStudentInfoOpen && (
          <ul className="ml-6 mt-2">
          <Link to="/studentcat" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student Category</a></li>
            </Link>
            <Link to="/studentadmission" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Add Student</a></li>
            </Link>
            <Link to="/managestudent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student List</a></li>
            </Link>
            <Link to="/multistudent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Multi Class Student</a></li>
            </Link>
            <Link to="/deletestudent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Delete Student Record</a></li>
            </Link>
            <Link to="/unassignedstudent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Unassigned Student</a></li>
            </Link>
            <Link to="/studentattendance" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student Attendance</a></li>
            </Link>
            <Link to="/studentgrp" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student Group</a></li>
            </Link>
            <Link to="/studentpromote" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student Promote</a></li>
            </Link>
            <Link to="/disabledstudent" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Disabled Students</a></li>
            </Link>
            <Link to="/subjectwiseatten" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Subject Wise Attendance</a></li>
            </Link>
            <Link to="/studentexport" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Student Export</a></li>
            </Link>
          </ul>
        )}
      </ul>
      <ul className="mt-4">
      {/* Fees Dropdown */}
      <li className="py-2 flex items-center cursor-pointer" onClick={toggleFeesDropdown}>
        <FaClipboardList className="w-5 h-5 mr-2" />
        <span>Fees</span>
        <FaCaretDown className={`ml-2 transition-transform ${isFeesOpen ? 'rotate-180' : 'rotate-0'}`} />
      </li>

      {/* Dropdown Items */}
      {isFeesOpen && (
        <ul className="ml-6 mt-2">
        <Link to="/fees" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Add Fees</a></li>
          </Link>
          <Link to="/fees-details" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Fees Record</a></li>
          </Link>
        </ul>
      )}
    </ul>
    <ul>
    <li className="py-2 flex items-center cursor-pointer" onClick={toggleBehaviourDropdown}>
      <FaBook className="w-5 h-5 mr-2" />
      <span>Behaviour Records(Coming Soon)</span>
      <FaCaretDown
        className={`ml-2 transition-transform ${isBehaviourDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
      />
    </li>
    {isBehaviourDropdownOpen && (
      <ul className="ml-6 mt-2">
      <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Incidents</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Assign Incident</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Student Incident Report</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Behaviour Report</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Class Section Report</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Incident Wise Report</a></li>
        </Link>
        <Link to="/coming-soon" className="hover:text-gray-400">
        <li className="py-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
        </Link>
      </ul>
    )}
  </ul>
  <ul>
  {/* Homework Section */}
  <li className="py-2 flex items-center cursor-pointer" onClick={toggleHomeworkDropdown}>
    <FaClipboardList className="w-5 h-5 mr-2" />
    <span>Homework</span>
    <FaCaretDown
      className={`ml-2 transition-transform ${isHomeworkDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
    />
  </li>
  {isHomeworkDropdownOpen && (
    <ul className="ml-6 mt-2">
    <Link to="/homework" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Add Homework</a></li>
      </Link>
      <Link to="/homeworklist" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Homework List</a></li>
      </Link>
      <Link to="/coming-soon" className="hover:text-gray-400">
      <li className="py-2"><a href="#" className="hover:text-gray-400">Homework Report(Coming Soon)</a></li>
      </Link>
    </ul>
  )}
</ul>
<ul>
</ul>
 </ul>

        {/* Exam Section */}
        <h2 className="text-lg font-bold mt-6 pb-2 pl-2">Exam</h2>
        <ul className="mt-4">
        <ul>
        {/* Examination Section */}
        <li className="py-2 flex items-center cursor-pointer" onClick={toggleExaminationDropdown}>
          <FaClipboardList className="w-5 h-5 mr-2" />
          <span>Examination</span>
          <FaCaretDown
            className={`ml-2 transition-transform ${isExaminationDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </li>
        {isExaminationDropdownOpen && (
          <ul className="ml-6 mt-2">
          <Link to="/addexam" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Exam Type</a></li>
            </Link>
            <Link to="/examsetup" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Exam Setup</a></li>
            </Link>
            <Link to="/examshedule" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Exam Schedule</a></li>
            </Link>
            <Link to="/markregister" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Marks Register(Coming Soon)</a></li>
            </Link>
            <Link to="/marksgrade" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Marks Grade(Coming Soon)</a></li>
            </Link>
            <Link to="/sendmarksbysms" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Send Marks By SMS(Coming Soon)</a></li>
            </Link>
            <Link to="/marksheetreport" className="hover:text-gray-400">
            <li className="py-2"><a href="#" className="hover:text-gray-400">Marksheet Report(Coming Soon)</a></li>
            </Link>
          </ul>
        )}
      </ul>
      <ul>
      {/* Exam Plan Section */}
    </ul>
    <ul>
  </ul>
  </ul>

        {/* HR Section */}
        <ul className="mt-4">
        <ul>
      </ul>
      <ul>
      {/* Teacher Evaluation Section */}
      <li className="py-2 flex items-center cursor-pointer" onClick={toggleTeacherEvalDropdown}>
        <FaClipboardList className="w-5 h-5 mr-2" />
        <span>Teacher Evaluation</span>
        <FaCaretDown
          className={`ml-2 transition-transform ${isTeacherEvalDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </li>
      {isTeacherEvalDropdownOpen && (
        <ul className="ml-6 mt-2">
        <Link to="/coming-soon" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Approved Report</a></li>
          </Link>
          <Link to="/coming-soon" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Pending Report</a></li>
          </Link>
          <Link to="/coming-soon" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Teacher Wise Report</a></li>
          </Link>
          <Link to="/coming-soon" className="hover:text-gray-400">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
          </Link>
        </ul>
      )}
    </ul>
    <ul>
  </ul>
  <ul>
    </ul>
     </ul>

{/* Report Section */}
<h2 className="text-lg font mt-6 pb-2 pl-2 flex items-center">
  <FaChartBar className="w-5 h-5 mr-2" /> Report(Coming Soon)
</h2>
<ul className="mt-4">
  <ul className="ml-6 mt-2">
  <li className="py-2">
  <a href="/coming-soon" className="hover:text-gray-400">Student Report</a>
</li>
<li className="py-2">
  <a href="/coming-soon" className="hover:text-gray-400">Exam Report</a>
</li>
<li className="py-2">
  <a href="/coming-soon" className="hover:text-gray-400">Staff Report</a>
</li>
<li className="py-2">
  <a href="/coming-soon" className="hover:text-gray-400">Fees Report</a>
</li>
<li className="py-2">
  <a href="/coming-soon" className="hover:text-gray-400">Accounts Report</a>
</li>
    <li className="py-2">
    <a href="/settings" className="hover:text-gray-400">Settings</a>
  </li>  
  </ul>
</ul>

      </div>
    </div>
  );
};

export default Sidebar;
