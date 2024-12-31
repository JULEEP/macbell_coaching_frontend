import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

const ClassRoutineCreate = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [routine, setRoutine] = useState([{ day: '', time: '', subject: '', teacher: '' }]);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // State for dropdown options
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Routine data to show below the form
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        // Fetching class data
        const classResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        setClasses(classResponse.data.classes || []);

        // Fetching section data
        const sectionResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(sectionResponse.data.sections || []);

        // Fetching subject data
        const subjectResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-subjects-names');
        setSubjects(subjectResponse.data.subjectNames || []);

        // Fetching teacher data
        const teacherResponse = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-teacher');
        const teacherData = teacherResponse.data.data.map((teacher) => teacher.teacher);
        setTeachers(teacherData || []);

        setIsDataLoaded(true);
      } catch (error) {
        setError('Error fetching data');
        setIsDataLoaded(true);
      }
    };

    fetchDropdownData();
  }, []);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleRoutineChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRoutine = [...routine];
    updatedRoutine[index][name] = value;
    setRoutine(updatedRoutine);
  };

  const addNewRoutine = () => {
    setRoutine([...routine, { day: '', time: '', subject: '', teacher: '' }]);
  };

  const removeRoutine = (index) => {
    const updatedRoutine = routine.filter((_, i) => i !== index);
    setRoutine(updatedRoutine);
  };

  const fetchRoutineData = async () => {
    try {
      const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-routine');
      setRoutines(response.data.routine || []); // Update the routine state
    } catch (error) {
      setError('Error fetching routine data');
    }
  };

  const handleSubmit = async () => {
    if (!selectedClass || !selectedSection || routine.some(r => !r.day || !r.time || !r.subject || !r.teacher)) {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    const routineData = {
      class: selectedClass,
      section: selectedSection,
      routine: routine,
    };

    try {
      const response = await fetch('https://school-backend-1-2xki.onrender.com/api/admin/create-routine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(routineData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage('Routine created successfully!');
        setError('');
        fetchRoutineData(); // Fetch the updated routine data
      } else {
        setError(result.message || 'Failed to create routine.');
        setSuccessMessage('');
      }
    } catch (error) {
      setError('An error occurred while creating the routine.');
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    // Fetch routine data when class and section are selected
    if (selectedClass && selectedSection) {
      fetchRoutineData();
    }
  }, [selectedClass, selectedSection]); // Trigger when class or section changes

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
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
                  {classes.map((cls, idx) => (
                    <option key={idx} value={cls._id}>{cls.className}</option> 
                  ))}
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
                  {sections.map((section, idx) => (
                    <option key={idx} value={section._id}>{section.name}</option> 
                  ))}
                </select>
              </div>
            </div>

            {/* Routine Entries */}
            <div>
              {routine.map((r, index) => (
                <div key={index} className="flex gap-6 mb-4">
                  <div className="w-1/4">
                    <label htmlFor={`day-${index}`} className="block text-sm text-gray-600">Day *</label>
                    <select
                      id={`day-${index}`}
                      name="day"
                      value={r.day}
                      onChange={(e) => handleRoutineChange(index, e)}
                      className="border border-gray-300 rounded-md p-3 w-full"
                      required
                    >
                      <option value="">Select Day</option>
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                        <option key={idx} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-1/4">
                    <label htmlFor={`time-${index}`} className="block text-sm text-gray-600">Time *</label>
                    <select
                      id={`time-${index}`}
                      name="time"
                      value={r.time}
                      onChange={(e) => handleRoutineChange(index, e)}
                      className="border border-gray-300 rounded-md p-3 w-full"
                      required
                    >
                      <option value="">Select Time</option>
                      {[ 
                        "09:00 AM - 09:45 AM", "10:00 AM - 10:45 AM", "11:00 AM - 11:45 AM", 
                        "12:00 PM - 12:45 PM", "01:00 PM - 01:45 PM", "02:00 PM - 02:45 PM", 
                        "03:00 PM - 03:45 PM"
                      ].map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-1/4">
                    <label htmlFor={`subject-${index}`} className="block text-sm text-gray-600">Subject *</label>
                    <select
                      id={`subject-${index}`}
                      name="subject"
                      value={r.subject}
                      onChange={(e) => handleRoutineChange(index, e)}
                      className="border border-gray-300 rounded-md p-3 w-full"
                      required
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((subject, idx) => (
                        <option key={idx} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-1/4">
                    <label htmlFor={`teacher-${index}`} className="block text-sm text-gray-600">Teacher *</label>
                    <select
                      id={`teacher-${index}`}
                      name="teacher"
                      value={r.teacher}
                      onChange={(e) => handleRoutineChange(index, e)}
                      className="border border-gray-300 rounded-md p-3 w-full"
                      required
                    >
                      <option value="">Select Teacher</option>
                      {teachers.map((teacher, idx) => (
                        <option key={idx} value={teacher}>{teacher}</option>
                      ))}
                    </select>
                  </div>

                  {/* Remove Routine Button */}
                  <button
                    type="button"
                    onClick={() => removeRoutine(index)}
                    className="text-red-600 hover:text-red-800 mt-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addNewRoutine}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-4"
              >
                Add Another Routine
              </button>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Submit Routine
              </button>
            </div>
          </div>

          {/* Error or Success Message */}
          {error && <div className="text-red-600 mt-2">{error}</div>}
          {successMessage && <div className="text-green-600 mt-2">{successMessage}</div>}

          {/* Display Fetched Routine Data */}
          <div className="mt-8">
            <h4 className="text-xl text-gray-700 mb-4">Existing Routine</h4>
            {routines.length > 0 ? (
              <ul className="space-y-4">
                {routines.map((routine, idx) => (
                  <li key={idx} className="border-b pb-4">
                    <h5 className="font-semibold text-lg">Section: {routine.section}</h5>
                    <ul className="space-y-2">
                      {routine.routine.map((r, index) => (
                        <li key={index}>
                          <div>Day: {r.day}</div>
                          <div>Time: {r.time}</div>
                          <div>Subject: {r.subject}</div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No routines available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoutineCreate;
