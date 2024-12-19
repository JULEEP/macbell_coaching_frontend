import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MarksheetReport = () => {
  const [exam, setExam] = useState('');
  const [subject, setSubject] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');

  const handleSearch = () => {
    // Logic to fetch and show marksheet report
    console.log('Search triggered with criteria:', { exam, subject, className, section });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Marksheet Report</h1>

      {/* Select Criteria */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-6 items-center">
          {/* Select Exam */}
          <div className="w-1/4">
            <label htmlFor="exam" className="block text-sm text-gray-600 mb-1">Select Exam</label>
            <select
              id="exam"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Exam</option>
              <option value="mid-term">Mid Term</option>
              <option value="final-term">Final Term</option>
            </select>
          </div>

          {/* Select Subject */}
          <div className="w-1/4">
            <label htmlFor="subject" className="block text-sm text-gray-600 mb-1">Select Subject</label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="english">English</option>
              <option value="science">Science</option>
            </select>
          </div>

          {/* Select Class */}
          <div className="w-1/4">
            <label htmlFor="className" className="block text-sm text-gray-600 mb-1">Select Class</label>
            <select
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Class</option>
              <option value="one">Class One</option>
              <option value="two">Class Two</option>
            </select>
          </div>

          {/* Select Section */}
          <div className="w-1/4">
            <label htmlFor="section" className="block text-sm text-gray-600 mb-1">Select Section</label>
            <select
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Section</option>
              <option value="a">Section A</option>
              <option value="b">Section B</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-1/4">
            <button
              onClick={handleSearch}
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results or Report Section */}
      <div className="mt-6">
        {/* You can show the report after the search button is clicked */}
        <div className="text-center text-gray-700">Marksheet Report will appear here after search</div>
      </div>
    </div>
    </div>
  );
};

export default MarksheetReport;
