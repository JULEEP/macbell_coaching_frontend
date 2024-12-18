import React, { useState } from 'react';

const GenerateCertificate = () => {
  const [formData, setFormData] = useState({
    class: '',
    section: '',
    certificate: '',
  });

  const classes = ['Class 1', 'Class 2', 'Class 3']; // Example class options
  const sections = ['Section A', 'Section B', 'Section C']; // Example section options
  const certificates = ['Certificate A', 'Certificate B', 'Certificate C']; // Example certificate options

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your certificate generation logic here
    console.log('Generating Certificate with:', formData);
  };

  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg text-gray-700 mb-4">Generate Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Class, Section, and Certificate in one row */}
          <div className="flex gap-4">
            {/* Class Dropdown */}
            <div className="flex-1">
              <label htmlFor="class" className="text-sm text-gray-600">Class *</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Class</option>
                {classes.map((cls, index) => (
                  <option key={index} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Section Dropdown */}
            <div className="flex-1">
              <label htmlFor="section" className="text-sm text-gray-600">Section</label>
              <select
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Section</option>
                {sections.map((sec, index) => (
                  <option key={index} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>

            {/* Certificate Dropdown */}
            <div className="flex-1">
              <label htmlFor="certificate" className="text-sm text-gray-600">Certificate *</label>
              <select
                id="certificate"
                name="certificate"
                value={formData.certificate}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Certificate</option>
                {certificates.map((cert, index) => (
                  <option key={index} value={cert}>
                    {cert}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Generate Button aligned to right */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
            >
              Generate Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateCertificate;
