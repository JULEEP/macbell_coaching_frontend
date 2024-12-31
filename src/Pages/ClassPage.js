import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const ClassPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    section: '', // Store the selected section
  });

  const [sections, setSections] = useState([]); // State for fetched sections
  const [selectedSections, setSelectedSections] = useState([]); // Store selected sections as an array
  const [classes, setClasses] = useState([]);

  // Fetch sections from the backend
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-section');
        setSections(response.data.sections); // Assuming the response contains an array of sections
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };

    fetchSections();
  }, []);

  // Fetch classes data from backend
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-classes');
        setClasses(response.data.classes); // Assuming the response contains an array of classes
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'section') {
      const newSelectedSections = [...selectedSections, value];
      setSelectedSections(newSelectedSections); // Add the selected section to the array
      setFormData({
        ...formData,
        section: '', // Reset the dropdown after selecting a section
      });
    }
  };

  const handleSaveClass = async () => {
    if (formData.name && selectedSections.length > 0) {
      try {
        // Make the POST request to the backend API
        const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/add-class', {
          className: formData.name,
          sections: selectedSections, // Send the selected sections as an array
        });

        // If class added successfully, update the classes state
        setClasses([
          ...classes,
          {
            _id: response.data.class._id, // Use the actual ID from the response
            className: formData.name,
            sections: selectedSections, // Show multiple sections
            students: 0,
          },
        ]);
        setFormData({ name: '', section: '' }); // Clear form after saving
        setSelectedSections([]); // Clear the selected sections
      } catch (error) {
        console.error('Error adding class:', error);
        // Handle error (e.g., show an error message)
      }
    }
  };

  const handleEditClass = (id) => {
    const classItem = classes.find((c) => c._id === id);
    setFormData({ name: classItem.className, section: classItem.section });
    setSelectedSections(classItem.sections);
  };

  const handleRemoveClass = async (id) => {
    try {
      // Make the DELETE request to the backend API to remove the class
      await axios.delete(`https://school-backend-1-2xki.onrender.com/api/admin/remove-class/${id}`);

      // After successful deletion, update the state to remove the class from the list
      setClasses(classes.filter((classItem) => classItem._id !== id));
    } catch (error) {
      console.error('Error removing class:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="space-y-6">
          {/* Add Class Form */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 mb-4">Add Class</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                {/* Class Name Input */}
                <div>
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Class Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                {/* Section Dropdown */}
                <div>
                  <label htmlFor="section" className="text-sm text-gray-600">
                    Section *
                  </label>
                  <select
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="" disabled>
                      Select a section
                    </option>
                    {sections.map((section) => (
                      <option key={section._id} value={section.name}>
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Display Selected Sections */}
              {selectedSections.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-sm text-gray-600">Selected Sections:</h3>
                  <ul>
                    {selectedSections.map((section, index) => (
                      <li key={index} className="text-gray-600">{section}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Save Class Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSaveClass}
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Save Class
                </button>
              </div>
            </form>
          </div>

          {/* Class List */}
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg text-gray-700 mb-4">Class List</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">Class</th>
                  <th className="px-4 py-2 text-gray-600">Sections</th>
                  <th className="px-4 py-2 text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {classes.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  classes.map((classItem) => (
                    <tr key={classItem._id} className="border-t border-gray-300">
                      <td className="px-4 py-2 text-gray-600 text-center">{classItem.className}</td>
                      <td className="px-4 py-2 text-gray-600 text-center">{classItem.sections.join(', ')}</td>
                      <td className="px-4 py-2 text-gray-600 text-center">
                        <button
                          onClick={() => handleEditClass(classItem._id)}
                          className="text-blue-600 hover:text-blue-800 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleRemoveClass(classItem._id)}
                          className="text-red-600 hover:text-red-800 ml-4"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
