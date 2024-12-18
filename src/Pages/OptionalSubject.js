import React, { useState } from 'react';

const OptionalSubject = () => {
  const [formData, setFormData] = useState({
    class: '',
    section: '',
    subject: '',
  });

  const classes = ['Class 1', 'Class 2', 'Class 3']; // Example class options
  const sections = ['Section A', 'Section B', 'Section C']; // Example section options
  const subjects = ['Math', 'Science', 'History']; // Example subject options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearchClick = () => {
    // Perform search action (e.g., filtering data or fetching data)
    console.log("Searching...");
  };

  return (
    <div className="p-8 flex justify-center">
      {/* Main Wrapper with rounded corners and shadow */}
      <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-lg">
        {/* Select Criteria Section */}
        <div className="mb-8">
          <h2 className="text-lg text-gray-500 mb-4">Select Criteria</h2>
          <form className="space-y-4">
            {/* Class, Section, and Subject in one row */}
            <div className="flex gap-6">
              {/* Class Dropdown */}
              <div className="flex-1">
                <label htmlFor="class" className="text-sm text-gray-600">Class *</label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                <label htmlFor="section" className="text-sm text-gray-600">Section *</label>
                <select
                  id="section"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                <label htmlFor="subject" className="text-sm text-gray-600">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
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

        {/* Search Section - Only the button now */}
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
  );
};

export default OptionalSubject;
