import React, { useState } from "react";
import Sidebar from "./Sidebar";

const OptionalSubject = () => {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    subject: "",
  });

  const classes = ["Class 1", "Class 2", "Class 3"];
  const sections = ["Section A", "Section B", "Section C"];
  const subjects = ["Math", "Science", "History"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearchClick = () => {
    console.log("Searching...");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 bg-white shadow-lg w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-72 flex-1">
        {/* Main Wrapper */}
        <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-lg mt-4 ml-16">
          {/* Select Criteria Section */}
          <div className="mb-8">
            <h2 className="text-lg text-gray-500 mb-4">Select Criteria</h2>
            <form className="space-y-4">
              <div className="flex flex-row gap-6">
                {/* Class Dropdown */}
                <div className="flex-1">
                  <label htmlFor="class" className="text-sm text-gray-600">
                    Class *
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map((classItem, index) => (
                      <option key={index} value={classItem}>
                        {classItem}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Section Dropdown */}
                <div className="flex-1">
                  <label htmlFor="section" className="text-sm text-gray-600">
                    Section *
                  </label>
                  <select
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  >
                    <option value="">Select Section</option>
                    {sections.map((section, index) => (
                      <option key={index} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Dropdown */}
                <div className="flex-1">
                  <label htmlFor="subject" className="text-sm text-gray-600">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 w-full"
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Search Section */}
          <div className="mb-4 flex justify-end">
            <button
              onClick={handleSearchClick}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalSubject;
