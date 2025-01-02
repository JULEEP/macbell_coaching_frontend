import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
import TeacherSidebar from "./TeacherSidebar";

const AddHomeworkByTeacher = () => {
  const [formData, setFormData] = useState({
    class: "5",  // Default class set to 5
    subject: "Math", // Default subject set to Math
    section: "A", // Default section set to A
    homeworkDate: "",
    submissionDate: "",
    marks: 50, // Default marks
    description: "This is a sample homework description.",
    homeworkTitle: "Math Homework - Chapter 1", // Default homework title
  });

  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for classes, sections, and subjects
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.homeworkDate || !formData.submissionDate || !formData.homeworkTitle) {
      alert("Please fill all required fields.");
      return;
    }

    // Prepare the data for API submission in the correct format
    const homeworkData = {
      class: formData.class,
      subject: formData.subject,
      section: formData.section,
      homeworkDate: formData.homeworkDate,
      submissionDate: formData.submissionDate,
      marks: formData.marks,
      marksObtained: 0,  // Default marks obtained is set to 0
      description: formData.description,
      homeworkTitle: formData.homeworkTitle,
    };

    try {
      // Make the API request to add homework
      const response = await axios.post("http://localhost:4000/api/teacher/add-homework", homeworkData);
      alert("Homework added successfully!");
      console.log("Homework added successfully:", response.data);
    } catch (error) {
      alert("Error adding homework!");
      console.error("Error adding homework:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <TeacherSidebar /> {/* Sidebar added here */}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Title */}
        <h1 className="text-xl text-purple-700">Add Homework</h1>

        {/* Add Homework Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="flex gap-6">
            {/* Class */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1">Class *</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {classes.map((cls) => (
                  <option key={cls._id} value={cls.className}>
                    {cls.className}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Section */}
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1">Section *</label>
              <select
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                {sections.map((section) => (
                  <option key={section._id} value={section.name}>
                    {section.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date and Marks */}
          <div className="flex gap-6">
            {/* Homework Date */}
            <div className="w-1/4">
              <label className="block text-sm text-gray-600 mb-1">Homework Date *</label>
              <input
                type="date"
                name="homeworkDate"
                value={formData.homeworkDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submission Date */}
            <div className="w-1/4">
              <label className="block text-sm text-gray-600 mb-1">Submission Date *</label>
              <input
                type="date"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Marks */}
            <div className="w-1/4">
              <label className="block text-sm text-gray-600 mb-1">Marks *</label>
              <input
                type="number"
                name="marks"
                value={formData.marks}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Homework Title */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Homework Title *</label>
            <input
              type="text"
              name="homeworkTitle"
              value={formData.homeworkTitle}
              onChange={handleInputChange}
              placeholder="Enter homework title"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Description *</label>
              <textarea
                name="description"
                placeholder="Enter description here"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Save Homework
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHomeworkByTeacher;
