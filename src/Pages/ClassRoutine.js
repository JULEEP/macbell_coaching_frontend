import React, { useState } from 'react';

const ClassRoutineCreate = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', { selectedClass, selectedSection });
  };

  return (
    <div className="p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Class Routine Create</h2>
        <h4 className="text-xl text-gray-700 mb-4">Select Criteria</h4>

        {/* Select Criteria Section */}
        <div className="space-y-4">
          <div className="flex gap-8">
            {/* Class Dropdown */}
            <div className="w-1/2">
              <label htmlFor="class" className="block text-sm text-gray-600">Class *</label>
              <select
                id="class"
                name="class"
                value={selectedClass}
                onChange={handleClassChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Class</option>
                <option value="Class A">Class A</option>
                <option value="Class B">Class B</option>
                <option value="Class C">Class C</option>
                {/* Add more class options as needed */}
              </select>
            </div>

            {/* Section Dropdown */}
            <div className="w-1/2">
              <label htmlFor="section" className="block text-sm text-gray-600">Section *</label>
              <select
                id="section"
                name="section"
                value={selectedSection}
                onChange={handleSectionChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                {/* Add more section options as needed */}
              </select>
            </div>
          </div>

          {/* Search Button aligned to the right */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSearch}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutineCreate;
