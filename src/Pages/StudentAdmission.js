import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar toggle icons


const AddStudentForm = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "2024-12-16",
    religion: "",
    caste: "",
    email: "",
    phone: "",
    address: "",
    studentPhoto: null,
    fatherName: "",
    motherName: "",
    guardianName: "",
    fatherOccupation: "",
    motherOccupation: "",
    guardianPhone: "",
    documentType: "",
    documentNumber: "",
    issueDate: "",
    expirationDate: "",
    previousSchoolName: "",
    gradeCompleted: "",
    schoolAddress: "",
    schoolContact: "",
    additionalInfo: "",
    customField1: "",
  });

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://school-backend-1-2xki.onrender.com/api/admin/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Student added successfully");
        setFormData({
          academicYear: "",
          studentClass: "",
          section: "",
          admissionNumber: "",
          admissionDate: "",
          roll: "",
          group: "",
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          religion: "",
          caste: "",
          studentPhoto: "",
          email: "",
          phone: "",
          address: "",
          fatherName: "",
          motherName: "",
          guardianName: "",
          fatherOccupation: "",
          motherOccupation: "",
          guardianPhone: "",
          documentType: "",
          documentNumber: "",
          issueDate: "",
          expirationDate: "",
          previousSchoolName: "",
          gradeCompleted: "",
          schoolAddress: "",
          schoolContact: "",
          additionalInfo: "",
          customField1: "",
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred");
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const saveSection = () => {
    // Logic to save the section data, you can handle API call or local storage here
    console.log('Saving section:', activeSection, formData);
     // Show the popup with success message
     setPopupMessage("Congratulations! You have successfully saved this section. Move to the next to fill the next section.");
     setShowPopup(true);
 
     // Optionally, auto-close the popup after 3 seconds
     setTimeout(() => {
       setShowPopup(false);
     }, 3000);
  };

  // Navigate to next section
  const nextSection = () => {
    // Update the active section to move to the next section
    switch (activeSection) {
      case "documentInfo":
        setActiveSection("previousCoachingInfo");
        break;
      case "previousCoachingInfo":
        setActiveSection("otherInfo");
        break;
      case "otherInfo":
        setActiveSection("customField");
        break;
      default:
        setActiveSection("documentInfo"); // Default fallback
        break;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Mobile View: Header and Sidebar Toggle Icon */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Student Admission</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

         {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-gray-700">{popupMessage}</p>
          </div>
        </div>
      )}


       {/* Buttons: Add Student & Import Student */}
<div className="flex flex-wrap gap-4 mt-4">
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("personalInfo")}
>
  Personal Info
</button>
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("parentsInfo")}
>
  Parents Info
</button>
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("documentInfo")}
>
  Document Info
</button>
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("previousCoachingInfo")}
>
  Previous Coaching Info
</button>
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("otherInfo")}
>
  Other Info
</button>
<button
  className="flex-grow bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm sm:text-base"
  onClick={() => handleSectionClick("customField")}
>
  Custom Field
</button>
</div>


 {/* Show only the selected section */}
{activeSection === "personalInfo" && (
  <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Personal Info</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700">First Name *</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Last Name *</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Gender *</label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Date of Birth *</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded p-2"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Religion</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          placeholder="Enter religion"
        />
      </div>
      <div>
        <label className="block text-gray-700">Caste</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="caste"
          value={formData.caste}
          onChange={handleChange}
          placeholder="Enter caste"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded p-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone"
        />
      </div>
      <div>
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
        />
      </div>
      <div>
        <label className="block text-gray-700">Student Photo</label>
        <input
          type="file"
          className="w-full border border-gray-300 rounded p-2"
          name="studentPhoto"
          onChange={handleFileChange}
        />
      </div>
    </div>

    {/* Save and Next buttons */}
    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={saveSection}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Save
      </button>
      <button
        onClick={nextSection}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Next
      </button>
    </div>
  </div>
)}


{activeSection === "parentsInfo" && (
  <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Parents & Guardian Info</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700">Father's Name *</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Enter father's name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Mother's Name *</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Enter mother's name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Guardian's Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="guardianName"
          value={formData.guardianName}
          onChange={handleChange}
          placeholder="Enter guardian's name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Father's Occupation</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
          placeholder="Enter father's occupation"
        />
      </div>
      <div>
        <label className="block text-gray-700">Mother's Occupation</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="motherOccupation"
          value={formData.motherOccupation}
          onChange={handleChange}
          placeholder="Enter mother's occupation"
        />
      </div>
      <div>
        <label className="block text-gray-700">Guardian's Phone</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          name="guardianPhone"
          value={formData.guardianPhone}
          onChange={handleChange}
          placeholder="Enter guardian's phone"
        />
      </div>
    </div>

    {/* Save and Next buttons */}
    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={saveSection}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Save
      </button>
      <button
        onClick={nextSection}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Next
      </button>
    </div>
  </div>
)}

{activeSection === "documentInfo" && (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Document Info</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Document Type</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
          placeholder="Enter document type"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Document Number</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="documentNumber"
          value={formData.documentNumber}
          onChange={handleChange}
          placeholder="Enter document number"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Issue Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Expiration Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
      </div>
    </div>

 {/* Save and Next buttons */}
 <div className="flex justify-end space-x-4 mt-6">
 <button
   onClick={saveSection}
   className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
 >
   Save
 </button>
 <button
   onClick={nextSection}
   className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
   >
   Next
 </button>
</div>
  </div>
)}

{activeSection === "previousCoachingInfo" && (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Previous Coaching Info</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Previous Coaching Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="previousCoachingName"
          value={formData.previousSchoolName}
          onChange={handleChange}
          placeholder="Enter previous school name"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Grade Completed</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="gradeCompleted"
          value={formData.gradeCompleted}
          onChange={handleChange}
          placeholder="Enter grade completed"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Coaching Address</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          placeholder="Enter coaching address"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm sm:text-base">Coaching Contact</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
          name="schoolContact"
          value={formData.schoolContact}
          onChange={handleChange}
          placeholder="Enter coaching contact"
        />
      </div>
    </div>

    {/* Save and Next buttons */}
    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={saveSection}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Save
      </button>
      <button
        onClick={nextSection}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Next
      </button>
    </div>
  </div>
)}

{activeSection === "otherInfo" && (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Other Info</h2>
    <div>
      <label className="block text-gray-700 text-sm sm:text-base">Additional Information</label>
      <textarea
        className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Enter any additional information"
        rows="4"
      />
    </div>

    {/* Save and Next buttons */}
    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={saveSection}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Save
      </button>
      <button
        onClick={nextSection}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Next
      </button>
    </div>
  </div>
)}


{activeSection === "customField" && (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded space-y-6 mt-4">
    <h2 className="text-lg text-gray-700 mb-4">Custom Field</h2>
    <div>
      <label className="block text-gray-700 text-sm sm:text-base">Custom Field 1</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded p-2 text-sm sm:text-base"
        name="customField1"
        value={formData.customField1}
        onChange={handleChange}
        placeholder="Enter custom field value"
      />
    </div>
  </div>
)}

{/* Submit Button: Only Show on the Custom Field Section */}
{activeSection === "customField" && (
  <div className="flex justify-center sm:justify-end mt-6">
    <button
      onClick={handleSubmit}
      className="bg-purple-500 hover:bg-blue-600 mr-2 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base"
    >
      Submit
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default AddStudentForm;
