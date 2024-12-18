import React, { useState } from 'react';

const AssignSubjectPage = () => {
  const [formData, setFormData] = useState({
    className: '',
    sectionName: '',
  });

  const classOptions = ['Class A', 'Class B', 'Class C']; // Example class options
  const sectionOptions = ['Section A', 'Section B', 'Section C']; // Example section options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    // Logic to handle search based on selected class and section
    console.log('Search for:', formData.className, formData.sectionName);
  };

  return (
    <div className="p-8">
      {/* Left side - Criteria Selection */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-md shadow-lg mx-auto">
        <h2 className="text-lg text-gray-700 mb-4">Select Criteria</h2>
        <form className="space-y-4">
          {/* Class and Section Dropdowns in same row with increased width */}
          <div className="flex gap-8">
            <div className="w-full">
              <label htmlFor="className" className="text-sm text-gray-600">Class *</label>
              <select
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Class</option>
                {classOptions.map((classOption, index) => (
                  <option key={index} value={classOption}>{classOption}</option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="sectionName" className="text-sm text-gray-600">Section *</label>
              <select
                id="sectionName"
                name="sectionName"
                value={formData.sectionName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Section</option>
                {sectionOptions.map((sectionOption, index) => (
                  <option key={index} value={sectionOption}>{sectionOption}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button - Smaller and aligned to the right */}
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleSearch}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignSubjectPage;
