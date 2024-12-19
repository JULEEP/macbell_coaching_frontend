import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ClassPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    sections: [], // Changed to array to handle multiple selections
  });

  const [classes, setClasses] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'sections') {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData.sections, value]
          : formData.sections.filter((section) => section !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSaveClass = () => {
    if (formData.name && formData.sections.length > 0) {
      setClasses([
        ...classes,
        { id: classes.length + 1, name: formData.name, sections: formData.sections, students: 0 },
      ]);
      setFormData({ name: '', sections: [] }); // Clear form after saving
    }
  };

  const handleEditClass = (id) => {
    const classItem = classes.find((c) => c.id === id);
    setFormData({ name: classItem.name, sections: classItem.sections });
  };

  const handleRemoveClass = (id) => {
    setClasses(classes.filter((classItem) => classItem.id !== id));
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Left side - Form */}
      <div className="w-1/3 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg text-gray-700 mb-4">Add Class</h2>
        <form className="space-y-4">
          {/* Class Name Input */}
          <div>
            <label htmlFor="name" className="text-sm text-gray-600">Class Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Section Checkboxes - each in its own column */}
          <div>
            <label className="text-sm text-gray-600">Section *</label>
            <div className="grid grid-cols-5 gap-4">
              {['A', 'B', 'C', 'D', 'E'].map((section) => (
                <label key={section} className="flex items-center">
                  <input
                    type="checkbox"
                    name="sections"
                    value={section}
                    checked={formData.sections.includes(section)}
                    onChange={handleChange}
                    className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {section}
                </label>
              ))}
            </div>
          </div>

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

      {/* Right side - Class List */}
      <div className="w-2/3 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg text-gray-700 mb-4">Class List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">Class</th>
              <th className="px-4 py-2 text-gray-600">Section(s)</th>
              <th className="px-4 py-2 text-gray-600">Students</th>
              <th className="px-4 py-2 text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              classes.map((classItem, index) => (
                <tr key={classItem.id} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-600">{classItem.name}</td>
                  <td className="px-4 py-2 text-gray-600">{classItem.sections.join(', ')}</td>
                  <td className="px-4 py-2 text-gray-600">{classItem.students}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <button
                      onClick={() => handleEditClass(classItem.id)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveClass(classItem.id)}
                      className="text-red-600 hover:text-red-800"
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
  );
};

export default ClassPage;
