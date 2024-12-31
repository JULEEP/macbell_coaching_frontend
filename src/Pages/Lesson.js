import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const AddLesson = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [lessonName, setLessonName] = useState('');
  const [title, setTitle] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [lessons, setLessons] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // Fetch lessons, classes, sections, and subjects on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-lesson');
        setLessons(lessonResponse.data.lessons || []);

        const classResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        setClasses(classResponse.data.classes || []);

        const sectionResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(sectionResponse.data.sections || []);

        const subjectResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-subjects-names');
        const uniqueSubjects = [...new Set(subjectResponse.data.subjectNames.filter((name) => name))];
        setSubjects(uniqueSubjects || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSaveLesson = async () => {
    if (!selectedClass || !selectedSection || !selectedSubject || !lessonName || !title || !postedBy) {
      alert('All fields are required');
      return;
    }

    try {
      const payload = {
        class: selectedClass,
        section: selectedSection,
        subject: selectedSubject,
        lessonName,
        title,
        postedBy,
      };

      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/add-lesson', payload);

      if (response.status === 201) {
        alert('Lesson added successfully');
        // Reset fields and refresh lesson list
        setSelectedClass('');
        setSelectedSection('');
        setSelectedSubject('');
        setLessonName('');
        setTitle('');
        setPostedBy('');

        const updatedLessons = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-lesson');
        setLessons(updatedLessons.data.lessons || []);
      }
    } catch (error) {
      console.error('Error adding lesson:', error);
      alert('Failed to add lesson. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Form */}
        <div className="w-full bg-white p-6 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Lesson</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="class" className="block text-sm text-gray-600">Class *</label>
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls.className}>
                    {cls.className}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="section" className="block text-sm text-gray-600">Section *</label>
              <select
                id="section"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Section</option>
                {sections.map((section) => (
                  <option key={section._id} value={section.name}>
                    {section.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-600">Subject *</label>
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
            <div>
              <label htmlFor="lessonName" className="block text-sm text-gray-600">Lesson Name *</label>
              <input
                type="text"
                id="lessonName"
                value={lessonName}
                onChange={(e) => setLessonName(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="title" className="block text-sm text-gray-600">Title *</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="postedBy" className="block text-sm text-gray-600">Posted By *</label>
              <input
                type="text"
                id="postedBy"
                value={postedBy}
                onChange={(e) => setPostedBy(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSaveLesson}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Save Lesson
            </button>
          </div>
        </div>

        {/* Lesson List */}
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Lesson List</h2>
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2">SL</th>
                <th className="text-left px-4 py-2">Class</th>
                <th className="text-left px-4 py-2">Section</th>
                <th className="text-left px-4 py-2">Subject</th>
                <th className="text-left px-4 py-2">Lesson Name</th>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">Posted By</th>
              </tr>
            </thead>
            <tbody>
              {lessons.length > 0 ? (
                lessons.map((lesson, index) => (
                  <tr key={lesson._id} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{lesson.class}</td>
                    <td className="px-4 py-2">{lesson.section || 'N/A'}</td>
                    <td className="px-4 py-2">{lesson.subject}</td>
                    <td className="px-4 py-2">{lesson.lessonName}</td>
                    <td className="px-4 py-2">{lesson.title}</td>
                    <td className="px-4 py-2">{lesson.postedBy || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">No lessons available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
