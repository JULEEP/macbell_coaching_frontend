import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [lessons, setLessons] = useState([]);

  // Fetch data for dropdowns and topics list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        setClasses(classResponse.data.classes || []);

        const sectionResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(sectionResponse.data.sections || []);

        const subjectResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-subjects-names');
        const uniqueSubjects = [...new Set(subjectResponse.data.subjectNames.filter((name) => name))];
        setSubjects(uniqueSubjects || []);

        const lessonResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-lesson');
        setLessons(lessonResponse.data.lessons || []);

        // Fetch topics
        const topicResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-topic');
        setTopics(topicResponse.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSaveTopic = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    // Validate fields
    if (!selectedClass || !selectedSection || !selectedSubject || !selectedLesson || !topicTitle) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/add-topic', {
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
          <div className="w-full bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Topic</h2>

            <div className="grid grid-cols-4 gap-6">
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
                  {classes.map((cls, index) => (
                    <option key={index} value={cls.className}>
                      {cls.className}
                    </option>
                  ))}
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
                  {sections.map((section, index) => (
                    <option key={index} value={section.name}>
                      {section.name}
                    </option>
                  ))}
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
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
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
                  {lessons.map((lesson, index) => (
                    <option key={index} value={lesson.lessonName}>
                      {lesson.lessonName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Topic Title */}
              <div className="col-span-4">
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
              <div className="col-span-4 mt-6">
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
                <div className="col-span-4 mt-4 text-red-600 text-sm">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="col-span-4 mt-4 text-green-600 text-sm">{successMessage}</div>
              )}
            </div>

            {/* Topic List */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Topic List</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;
