import React, { useState } from "react";

const StudentAdmission = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle the form

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Student Admission</h1>

      {/* Buttons: Add Student & Import Student */}
      <div className="flex gap-4">
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          Add Student
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
          Import Student
        </button>
      </div>

      {/* Sections */}
      <div className="flex gap-4 overflow-x-auto">
        <div
          className="w-[200px] bg-white p-4 shadow-md rounded cursor-pointer"
          onClick={() => setShowForm(!showForm)}
        >
          <h2 className="text-gray-700 text-sm">Personal Info</h2>
        </div>
        <div className="w-[200px] bg-white p-4 shadow-md rounded">
          <h2 className="text-gray-700 text-sm">Parents & Guardian Info</h2>
        </div>
        <div className="w-[200px] bg-white p-4 shadow-md rounded">
          <h2 className="text-gray-700 text-sm">Document Info</h2>
        </div>
        <div className="w-[200px] bg-white p-4 shadow-md rounded">
          <h2 className="text-gray-700 text-sm">Previous School Info</h2>
        </div>
        <div className="w-[200px] bg-white p-4 shadow-md rounded">
          <h2 className="text-gray-700 text-sm">Other Info</h2>
        </div>
        <div className="w-[200px] bg-white p-4 shadow-md rounded">
          <h2 className="text-gray-700 text-sm">Custom Field</h2>
        </div>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white p-6 shadow-md rounded space-y-6">
          {/* Academic Information */}
          <div>
            <h2 className="text-lg text-gray-700 mb-4">Academic Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Academic Year *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter year"
                />
              </div>
              <div>
                <label className="block text-gray-700">Class *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter class"
                />
              </div>
              <div>
                <label className="block text-gray-700">Section *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter section"
                />
              </div>
              <div>
                <label className="block text-gray-700">Admission Number *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  value="89964"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">Admission Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2"
                  value="2024-12-16"
                />
              </div>
              <div>
                <label className="block text-gray-700">Roll</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter roll"
                />
              </div>
              <div>
                <label className="block text-gray-700">Group</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter group"
                />
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <h2 className="text-lg text-gray-700 mb-4">Personal Info</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Gender *</label>
                <select className="w-full border border-gray-300 rounded p-2">
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
                  value="2024-12-16"
                />
              </div>
              <div>
                <label className="block text-gray-700">Religion</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter religion"
                />
              </div>
              <div>
                <label className="block text-gray-700">Caste</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter caste"
                />
              </div>
              <div>
                <label className="block text-gray-700">Student Photo</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg text-gray-700 mb-4">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700">Current Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter current address"
                />
              </div>
              <div>
                <label className="block text-gray-700">Permanent Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter permanent address"
                />
              </div>
            </div>
          </div>

          {/* Medical Record */}
          <div>
            <h2 className="text-lg text-gray-700 mb-4">Medical Record</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Blood Group</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter blood group"
                />
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label className="block text-gray-700">Height (In)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter height"
                />
              </div>
              <div>
                <label className="block text-gray-700">Weight (KG)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2"
                  placeholder="Enter weight"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">
              Save Student
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAdmission;
