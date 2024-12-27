import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ExamSchedule = () => {
  const [exam, setExam] = useState('');
  const [classType, setClassType] = useState('');
  const [section, setSection] = useState('');
  const [scheduleData, setScheduleData] = useState([
    {
      id: 1,
      examTitle: 'Final Exam',
      class: 'Class 1',
      section: 'A',
      subject: 'Math',
      examDate: '12/20/2024',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
    },
    {
      id: 2,
      examTitle: 'Mid-Term Exam',
      class: 'Class 2',
      section: 'B',
      subject: 'Science',
      examDate: '12/22/2024',
      startTime: '11:00 AM',
      endTime: '1:00 PM',
    },
  ]);

  // State for the Add Exam form
  const [examTitle, setExamTitle] = useState('');
  const [examClass, setExamClass] = useState('');
  const [examSection, setExamSection] = useState('');
  const [subject, setSubject] = useState('');
  const [examDate, setExamDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
    };

    try {
      const response = await fetch('http://localhost:4000/api/admin/add-exam-schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExam),
      });

      if (response.ok) {
        const data = await response.json();
        setScheduleData([...scheduleData, data.examSchedule]);
        alert('Exam schedule added successfully!');
        // Reset form fields
        setExamTitle('');
        setExamClass('');
        setExamSection('');
        setSubject('');
        setExamDate('');
        setStartTime('');
        setEndTime('');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding exam schedule:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleSearch = () => {
    console.log({ exam, classType, section });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
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
                placeholder="Class"
                value={examClass}
                onChange={(e) => setExamClass(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Section"
                value={examSection}
                onChange={(e) => setExamSection(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                required
              />
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
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white mt-4 px-4 py-2 rounded hover:bg-purple-600"
            >
              Add Exam Schedule
            </button>
          </form>
        </div>

        {/* Select Criteria Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex gap-8 mb-4">
            <div className="w-1/3">
              <label htmlFor="exam" className="block text-sm text-gray-600 mb-1">
                Exam *
              </label>
              <select
                id="exam"
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Exam</option>
                <option value="mid-term">Mid-Term</option>
                <option value="final">Final</option>
                <option value="semester">Semester</option>
              </select>
            </div>
            <div className="w-1/3">
              <label htmlFor="class" className="block text-sm text-gray-600 mb-1">
                Class *
              </label>
              <select
                id="class"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Class</option>
                <option value="class-1">Class 1</option>
                <option value="class-2">Class 2</option>
                <option value="class-3">Class 3</option>
              </select>
            </div>
            <div className="w-1/3">
              <label htmlFor="section" className="block text-sm text-gray-600 mb-1">
                Section *
              </label>
              <select
                id="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
          >
            Search
          </button>
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
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((schedule, index) => (
                  <tr key={schedule.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{schedule.examTitle}</td>
                    <td className="px-4 py-2">{schedule.class}</td>
                    <td className="px-4 py-2">{schedule.section}</td>
                    <td className="px-4 py-2">{schedule.subject}</td>
                    <td className="px-4 py-2">{schedule.examDate}</td>
                    <td className="px-4 py-2">{schedule.startTime}</td>
                    <td className="px-4 py-2">{schedule.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
