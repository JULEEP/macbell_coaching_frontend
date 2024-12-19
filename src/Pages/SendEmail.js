import React, { useState } from "react";
import Sidebar from "./Sidebar";

const SendEmailSMSPage = () => {
  const [sendThrough, setSendThrough] = useState("email"); // State to track email or SMS selection
  const [sendTo, setSendTo] = useState("group"); // State to track if sending to Group or Individual
  const [messageToRole, setMessageToRole] = useState("teacher"); // State to handle Group selection for roles
  const [selectedName, setSelectedName] = useState(""); // State to handle name selection for Individual

  const handleSendThroughChange = (event) => {
    setSendThrough(event.target.value);
  };

  const handleSendToChange = (event) => {
    setSendTo(event.target.value);
  };

  const handleMessageToRoleChange = (event) => {
    setMessageToRole(event.target.value);
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Send Email/SMS
      </h1>

      <div className="flex space-x-12">
        {/* Left Side: Form */}
        <div className="w-1/2 bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Send Email/SMS</h2>

          <div className="space-y-4">
            {/* Title Field */}
            <div>
              <label className="block text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter Title"
              />
            </div>

            {/* Send Through Radio Button */}
            <div>
              <label className="block text-gray-700 mb-2">Send Through *</label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="email"
                    name="sendThrough"
                    value="email"
                    onChange={handleSendThroughChange}
                    checked={sendThrough === "email"}
                    className="mr-2"
                  />
                  <label htmlFor="email" className="text-gray-700">Email</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="sms"
                    name="sendThrough"
                    value="sms"
                    onChange={handleSendThroughChange}
                    checked={sendThrough === "sms"}
                    className="mr-2"
                  />
                  <label htmlFor="sms" className="text-gray-700">SMS</label>
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-gray-700 mb-2">Description *</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Side: Group or Individual */}
        <div className="w-1/2 bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Recipient</h2>

          <div className="space-y-4">
            {/* Group or Individual Radio Button */}
            <div>
              <label className="block text-gray-700 mb-2">Group or Individual *</label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="group"
                    name="sendTo"
                    value="group"
                    onChange={handleSendToChange}
                    checked={sendTo === "group"}
                    className="mr-2"
                  />
                  <label htmlFor="group" className="text-gray-700">Group</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="individual"
                    name="sendTo"
                    value="individual"
                    onChange={handleSendToChange}
                    checked={sendTo === "individual"}
                    className="mr-2"
                  />
                  <label htmlFor="individual" className="text-gray-700">Individual</label>
                </div>
              </div>
            </div>

            {/* Message To for Group */}
            {sendTo === "group" && (
              <div>
                <label className="block text-gray-700 mb-2">Message To *</label>
                <div className="flex space-x-4">
                  {["Teacher", "Student", "Super Admin", "Admin", "Driver", "Accountant"].map((role) => (
                    <div key={role} className="flex items-center">
                      <input
                        type="radio"
                        id={role.toLowerCase()}
                        name="messageTo"
                        value={role.toLowerCase()}
                        onChange={handleMessageToRoleChange}
                        checked={messageToRole === role.toLowerCase()}
                        className="mr-2"
                      />
                      <label htmlFor={role.toLowerCase()} className="text-gray-700">{role}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Role Dropdown for Individual */}
            {sendTo === "individual" && (
              <div>
                <label className="block text-gray-700 mb-2">Role *</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={messageToRole}
                  onChange={handleMessageToRoleChange}
                >
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                  <option value="driver">Driver</option>
                  <option value="accountant">Accountant</option>
                </select>
              </div>
            )}

            {/* Name Dropdown for Individual */}
            {sendTo === "individual" && (
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={selectedName}
                  onChange={handleNameChange}
                >
                  <option value="">Select Name</option>
                  <option value="johnDoe">John Doe</option>
                  <option value="janeDoe">Jane Doe</option>
                  <option value="mikeSmith">Mike Smith</option>
                  <option value="susanLee">Susan Lee</option>
                  {/* Add more names as needed */}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600">
          Save Content
        </button>
      </div>
    </div>
    </div>
  );
};

export default SendEmailSMSPage;
