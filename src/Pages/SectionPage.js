import React, { useState } from 'react';

const SectionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const [sections, setSections] = useState([]); // Empty array to hold sections

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveSection = () => {
    if (formData.name) {
      setSections([
        ...sections,
        { id: sections.length + 1, name: formData.name },
      ]);
      setFormData({ name: '' }); // Clear form after saving
    }
  };

  const handleEditSection = (id) => {
    const section = sections.find((s) => s.id === id);
    setFormData({ name: section.name });
  };

  const handleRemoveSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <div className="flex gap-8 p-8">
      {/* Left side - Form */}
      <div className="w-1/3 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg text-gray-700 mb-4">Add Section</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="text-sm text-gray-600">Name *</label>
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

          {/* Save Section Button */}
          <div>
            <button
              type="button"
              onClick={handleSaveSection}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Save Section
            </button>
          </div>
        </form>
      </div>

      {/* Right side - Section List */}
      <div className="w-2/3 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg text-gray-700 mb-4">Section List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">SL</th>
              <th className="px-4 py-2 text-gray-600">Name</th>
              <th className="px-4 py-2 text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {sections.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              sections.map((section, index) => (
                <tr key={section.id} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-600">{section.name}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <button
                      onClick={() => handleEditSection(section.id)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveSection(section.id)}
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
  );
};

export default SectionPage;
