import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StudentAdmission = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
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

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:4000/api/admin/add-student", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Student added successfully!");
        // Reset the form data after successful submission
        setFormData({
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
      } else {
        const error = await response.json();
        alert("Error: " + error.error);
      }
    } catch (error) {
      alert("Error: " + error.error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Title */}
        <h1 className="text-xl text-gray-700">Student Admission</h1>

        {/* Buttons: Add Student & Import Student */}
        <div className="flex gap-4">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("personalInfo")}
          >
            Personal Info
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("parentsInfo")}
          >
            Parents Info
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("documentInfo")}
          >
            Document Info
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("previousSchoolInfo")}
          >
            Previous School Info
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("otherInfo")}
          >
            Other Info
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            onClick={() => handleSectionClick("customField")}
          >
            Custom Field
          </button>
        </div>

        {/* Show only the selected section */}
        {activeSection === "personalInfo" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        )}

        {activeSection === "parentsInfo" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Parents & Guardian Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        )}

        {activeSection === "documentInfo" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Document Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Document Type</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleChange}
                  placeholder="Enter document type"
                />
              </div>
              <div>
                <label className="block text-gray-700">Document Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                  placeholder="Enter document number"
                />
              </div>
              <div>
                <label className="block text-gray-700">Issue Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Expiration Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === "previousSchoolInfo" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Previous School Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Previous School Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="previousSchoolName"
                  value={formData.previousSchoolName}
                  onChange={handleChange}
                  placeholder="Enter previous school name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Grade Completed</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="gradeCompleted"
                  value={formData.gradeCompleted}
                  onChange={handleChange}
                  placeholder="Enter grade completed"
                />
              </div>
              <div>
                <label className="block text-gray-700">School Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                  placeholder="Enter school address"
                />
              </div>
              <div>
                <label className="block text-gray-700">School Contact</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  name="schoolContact"
                  value={formData.schoolContact}
                  onChange={handleChange}
                  placeholder="Enter school contact"
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === "otherInfo" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Other Info</h2>
            <div>
              <label className="block text-gray-700">Additional Information</label>
              <textarea
                className="w-full border border-gray-300 rounded p-2"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Enter any additional information"
              />
            </div>
          </div>
        )}

        {activeSection === "customField" && (
          <div className="bg-white p-6 shadow-md rounded space-y-6 mt-4">
            <h2 className="text-lg text-gray-700 mb-4">Custom Field</h2>
            <div>
              <label className="block text-gray-700">Custom Field 1</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                name="customField1"
                value={formData.customField1}
                onChange={handleChange}
                placeholder="Enter custom field value"
              />
            </div>
          </div>
        )}

        {/* Submit Button: Only Show on the Last Section */}
        {(activeSection === "customField" || activeSection === "otherInfo") && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-purple-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAdmission;
