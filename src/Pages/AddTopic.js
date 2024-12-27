import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddTopic = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLesson, setSelectedLesson] = useState('');
  const [topicTitle, setTopicTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [topics, setTopics] = useState([]);

  const handleSaveTopic = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    // Validate fields
    if (!selectedClass || !selectedSection || !selectedSubject || !selectedLesson || !topicTitle) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/admin/add-topic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          className: selectedClass,
          section: selectedSection,
          subject: selectedSubject,
          lesson: selectedLesson,
          topic: topicTitle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Topic added successfully.');
        setTopics((prevTopics) => [
          ...prevTopics,
          {
            className: selectedClass,
            section: selectedSection,
            subject: selectedSubject,
            lesson: selectedLesson,
            topic: topicTitle,
          },
        ]);
        setSelectedClass('');
        setSelectedSection('');
        setSelectedSubject('');
        setSelectedLesson('');
        setTopicTitle('');
      } else {
        setErrorMessage(data.message || 'Failed to add topic.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while adding the topic.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="flex gap-6">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Topic</h2>
            <div className="space-y-4">
              {/* Class Dropdown */}
              <div>
                <label htmlFor="class" className="block text-sm text-gray-600">
                  Class <span className="text-red-500">*</span>
                </label>
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
                <label htmlFor="section" className="block text-sm text-gray-600">
                  Section <span className="text-red-500">*</span>
                </label>
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

              {/* Subject Dropdown */}
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-600">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                </select>
              </div>

              {/* Lesson Dropdown */}
              <div>
                <label htmlFor="lesson" className="block text-sm text-gray-600">
                  Lesson <span className="text-red-500">*</span>
                </label>
                <select
                  id="lesson"
                  value={selectedLesson}
                  onChange={(e) => setSelectedLesson(e.target.value)}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Lesson</option>
                  <option value="Algebra">Algebra</option>
                  <option value="Geometry">Geometry</option>
                  <option value="Trigonometry">Trigonometry</option>
                </select>
              </div>

              {/* Topic Title */}
              <div>
                <label htmlFor="topicTitle" className="block text-sm text-gray-600">
                  Add Topic <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="topicTitle"
                  value={topicTitle}
                  onChange={(e) => setTopicTitle(e.target.value)}
                  placeholder="Title"
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Save Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleSaveTopic}
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Save Topic
                </button>
              </div>

              {/* Feedback Messages */}
              {errorMessage && (
                <div className="mt-4 text-red-600 text-sm">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="mt-4 text-green-600 text-sm">{successMessage}</div>
              )}
            </div>
          </div>

          {/* Right Side: Topic List */}
          <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Topic List</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Quick Search"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <table className="w-full border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left px-4 py-2">SL</th>
                  <th className="text-left px-4 py-2">Class</th>
                  <th className="text-left px-4 py-2">Section</th>
                  <th className="text-left px-4 py-2">Subject</th>
                  <th className="text-left px-4 py-2">Lesson</th>
                  <th className="text-left px-4 py-2">Topic</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {topics.length > 0 ? (
                  topics.map((topic, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{topic.className}</td>
                      <td className="px-4 py-2">{topic.section}</td>
                      <td className="px-4 py-2">{topic.subject}</td>
                      <td className="px-4 py-2">{topic.lesson}</td>
                      <td className="px-4 py-2">{topic.topic}</td>
                      <td className="px-4 py-2">
                        <button className="text-red-600 hover:underline">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center px-4 py-2">
                      No Data Available In Table
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="mt-4 text-gray-600">
              Showing {topics.length} to {topics.length} of {topics.length} entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;
