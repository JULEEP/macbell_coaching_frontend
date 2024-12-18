import React, { useState } from 'react';

const UploadContent = () => {
  const [contentTitle, setContentTitle] = useState('');
  const [contentType, setContentType] = useState('');
  const [availableFor, setAvailableFor] = useState('All');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [date, setDate] = useState('2024-12-15');
  const [description, setDescription] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log({
      contentTitle,
      contentType,
      availableFor,
      selectedClass,
      selectedSection,
      date,
      description,
      sourceUrl,
      file,
    });
  };

  return (
    <div className="p-8 flex gap-8">
      {/* Left Side: Form */}
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Content</h2>

        <div className="space-y-4">
          {/* Content Title */}
          <div>
            <label htmlFor="contentTitle" className="block text-sm text-gray-600">Content Title *</label>
            <input
              type="text"
              id="contentTitle"
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Content Type */}
          <div>
            <label htmlFor="contentType" className="block text-sm text-gray-600">Content Type *</label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select Content Type</option>
              <option value="Document">Document</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
            </select>
          </div>

          {/* Available For */}
          <div>
            <label className="block text-sm text-gray-600">Available For *</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availableFor"
                  value="All"
                  checked={availableFor === 'All'}
                  onChange={(e) => setAvailableFor(e.target.value)}
                />
                All
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availableFor"
                  value="Admin"
                  checked={availableFor === 'Admin'}
                  onChange={(e) => setAvailableFor(e.target.value)}
                />
                Admin
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availableFor"
                  value="Student"
                  checked={availableFor === 'Student'}
                  onChange={(e) => setAvailableFor(e.target.value)}
                />
                Student
              </label>
            </div>
          </div>

          {/* Class Dropdown */}
          <div>
            <label htmlFor="class" className="block text-sm text-gray-600">Class</label>
            <select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Class</option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
              <option value="Class C">Class C</option>
            </select>
          </div>

          {/* Section Dropdown */}
          <div>
            <label htmlFor="section" className="block text-sm text-gray-600">Section</label>
            <select
              id="section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label htmlFor="date" className="block text-sm text-gray-600">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm text-gray-600">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            ></textarea>
          </div>

          {/* Source URL */}
          <div>
            <label htmlFor="sourceUrl" className="block text-sm text-gray-600">Source URL</label>
            <input
              type="text"
              id="sourceUrl"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-sm text-gray-600">File</label>
            <input
              type="file"
              id="file"
              accept=".jpg,.png,.jpeg,.pdf,.doc,.docx,.mp4,.mp3,.txt"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

     {/* Right Side: List */}
     <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg" style={{ height: '400px', overflowY: 'auto' }}>
     <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Content List</h2>
<div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2 text-left">SL</th>
        <th className="px-4 py-2 text-left">Content Title</th>
        <th className="px-4 py-2 text-left">Type</th>
        <th className="px-4 py-2 text-left">Date</th>
        <th className="px-4 py-2 text-left">Available For</th>
      </tr>
    </thead>
    <tbody>
      {/* Add rows here */}
      <tr>
        <td className="px-4 py-2">1</td>
        <td className="px-4 py-2">Sample Content</td>
        <td className="px-4 py-2">Document</td>
        <td className="px-4 py-2">2024-12-15</td>
        <td className="px-4 py-2">All</td>
      </tr>
      {/* Repeat similar rows */}
    </tbody>
  </table>
</div>
</div>

    </div>
  );
};

export default UploadContent;
