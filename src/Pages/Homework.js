import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AddHomework = () => {
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    section: "",
    select: "",
    homeworkDate: "2024-12-17",
    submissionDate: "2024-12-17",
    marks: "",
    file: null,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Homework Submitted: ", formData);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Add Homework</h1>

      {/* Add Homework Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row */}
        <div className="flex gap-6">
          {/* Class */}
          <div className="w-1/3">
            <label className="block text-sm text-gray-600 mb-1">Class *</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
            </select>
          </div>

          {/* Subject */}
          <div className="w-1/3">
            <label className="block text-sm text-gray-600 mb-1">Subject *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
            </select>
          </div>

          {/* Section */}
          <div className="w-1/3">
            <label className="block text-sm text-gray-600 mb-1">Section *</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-6">
          {/* Select */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Select</label>
            <input
              type="text"
              name="select"
              placeholder="Select"
              value={formData.select}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Homework Date */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">
              Homework Date *
            </label>
            <input
              type="date"
              name="homeworkDate"
              value={formData.homeworkDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Submission Date */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">
              Submission Date *
            </label>
            <input
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Marks */}
          <div className="w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Marks *</label>
            <input
              type="number"
              name="marks"
              placeholder="Enter Marks"
              value={formData.marks}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="space-y-4">
          {/* Attach File */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Attach File</label>
            <input
              type="file"
              name="file"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              placeholder="Enter description here"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            Save Homework
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddHomework;
