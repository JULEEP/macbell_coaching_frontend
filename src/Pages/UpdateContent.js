import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const UploadContent = () => {
  const [contentTitle, setContentTitle] = useState('');
  const [contentType, setContentType] = useState('');
  const [availableFor, setAvailableFor] = useState('All');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [date, setDate] = useState('2024-12-15');
  const [description, setDescription] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [message, setMessage] = useState('');
  const [contentList, setContentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-content');
        if (response.data.message === 'Content retrieved successfully.') {
          setContentList(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  const handleSave = async () => {
    const formData = {
      contentTitle,
      contentType,
      availableFor,
      class: selectedClass,
      section: selectedSection,
      date,
      description,
      sourceURL: sourceUrl,
    };

    try {
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/upload-content', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.message === 'Content uploaded successfully.') {
        setContentTitle('');
        setContentType('');
        setAvailableFor('All');
        setSelectedClass('');
        setSelectedSection('');
        setDate('2024-12-15');
        setDescription('');
        setSourceUrl('');
        setMessage(response.data.message);

        const contentResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-content');
        if (contentResponse.data.message === 'Content retrieved successfully.') {
          setContentList(contentResponse.data.data);
        }
      }
    } catch (error) {
      console.error('Error uploading content:', error);
      setMessage('Error uploading content');
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contentList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(contentList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Content</h2>
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Content Title"
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            />
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            >
              <option value="">Select Content Type</option>
              <option value="Document">Document</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
            </select>
            <select
              value={availableFor}
              onChange={(e) => setAvailableFor(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            >
              <option value="All">All</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-3"
            />
          </div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full mt-4"
          ></textarea>
          <input
            type="text"
            placeholder="Source URL"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full mt-4"
          />
          <button
            type="button"
            onClick={handleSave}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md"
          >
            Save
          </button>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Content List</h2>
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
              {currentItems.map((content, index) => (
                <tr key={content._id}>
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{content.contentTitle}</td>
                  <td className="px-4 py-2">{content.contentType}</td>
                  <td className="px-4 py-2">{new Date(content.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{content.availableFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadContent;
