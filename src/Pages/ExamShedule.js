import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const ExamSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [examTitle, setExamTitle] = useState('');
  const [examCenter, setExamCenter] = useState('');
  const [examClass, setExamClass] = useState('');
  const [examSection, setExamSection] = useState('');
  const [subject, setSubject] = useState('');
  const [examDate, setExamDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [examType, setExamType] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); // Display 10 items per page

  // Fetch data for dropdowns and exam schedules
  useEffect(() => {
    const fetchData = async () => {
      try {
        const scheduleResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-exam-schedule');
        setScheduleData(scheduleResponse.data.examSchedules || []);

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

  // Handle adding new exam
  const handleAddExam = async (e) => {
    e.preventDefault();

    const newExam = {
      examTitle,
      class: examClass,
      section: examSection,
      subject,
      examDate,
      startTime,
      endTime,
      examType,
      examCenter
    };

    try {
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/add-exam-schedule', newExam);

      if (response.status === 200) {
        setScheduleData([...scheduleData, response.data.examSchedule]);
        alert('Exam schedule added successfully!');
        setExamTitle('');
        setExamClass('');
        setExamSection('');
        setSubject('');
        setExamDate('');
        setStartTime('');
        setEndTime('');
        setExamType('');
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error adding exam schedule:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Handle generate admit card
  const handleGenerateAdmitCard = async (scheduleId) => {
    try {
      const response = await axios.post(`https://school-backend-1-2xki.onrender.com/api/admin/generate-admit-cards/${scheduleId}`);

      if (response.status === 200) {
        setScheduleData(scheduleData.map(schedule =>
          schedule._id === scheduleId ? { ...schedule, isAdmitCardGenerated: true } : schedule
        ));
        alert('Admit card generated successfully!');
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error generating admit card:', error);
      alert('An error occurred while generating the admit card.');
    }
  };

  // Get current items for the page
  const indexOfLastSchedule = currentPage * perPage;
  const indexOfFirstSchedule = indexOfLastSchedule - perPage;
  const currentSchedules = scheduleData.slice(indexOfFirstSchedule, indexOfLastSchedule);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 ml-64">
        <h1 className="text-xl text-gray-700 font-semibold mb-4">Exam Schedule</h1>

        {/* Add Exam Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg text-gray-700 font-semibold mb-4">Add New Exam Schedule</h2>
          <form onSubmit={handleAddExam}>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Exam Title"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
              type="text"
              placeholder="Exam Center"
              value={examCenter}
              onChange={(e) => setExamCenter(e.target.value)}
              className="border border-gray-300 p-2 rounded"
              required
            />
              <select
                value={examClass}
                onChange={(e) => setExamClass(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls.className}>
                    {cls.className}
                  </option>
                ))}
              </select>
              <select
                value={examSection}
                onChange={(e) => setExamSection(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Section</option>
                {sections.map((sec) => (
                  <option key={sec._id} value={sec.name}>
                    {sec.name}
                  </option>
                ))}
              </select>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Exam Type</option>
                <option value="Mid-Term">Mid-Term</option>
                <option value="Final">Final</option>
                <option value="Semester">Semester</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white mt-4 px-4 py-2 rounded hover:bg-purple-600"
            >
              Add Exam Schedule
            </button>
          </form>
        </div>

        {/* Exam Schedule Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-gray-700 font-semibold mb-4">Exam Schedule List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">SL</th>
                  <th className="px-4 py-2 text-left">Exam Title</th>
                  <th className="px-4 py-2 text-left">Class</th>
                  <th className="px-4 py-2 text-left">Section</th>
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Exam Date</th>
                  <th className="px-4 py-2 text-left">Start Time</th>
                  <th className="px-4 py-2 text-left">End Time</th>
                  <th className="px-4 py-2 text-left">Exam Type</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentSchedules.map((schedule, index) => (
                  <tr key={schedule._id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{schedule.examTitle || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.class || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.section || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.subject || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.examDate || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.startTime || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.endTime || 'N/A'}</td>
                    <td className="px-4 py-2">{schedule.examType || 'N/A'}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleGenerateAdmitCard(schedule._id)}
                        className={`${
                          schedule.isAdmitCardGenerated
                            ? 'bg-green-500 text-white'
                            : 'bg-purple-500 text-white'
                        } px-2 py-2 rounded hover:bg-blue-600`}
                      >
                        {schedule.isAdmitCardGenerated ? 'Generated' : 'Generate Admit Card'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-l hover:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastSchedule >= scheduleData.length}
              className="px-4 py-2 bg-gray-200 rounded-r hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
