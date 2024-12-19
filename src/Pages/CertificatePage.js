import React, { useState } from 'react';
import Sidebar from './Sidebar';

const CertificatePage = () => {
  const [formData, setFormData] = useState({
    certificateName: '',
    headerLeftText: '',
    date: '12/15/2024',
    body: '',
    bodyFont: 'Arial',
    fontSize: '2em',
    footerLeftText: '',
    footerCenterText: '',
    footerRightText: '',
    pageLayout: 'A4(Portrait)', // Default page layout
    height: '',
    width: '',
    studentPhoto: 'Yes',
    image: null,
  });

  const [certificateList, setCertificateList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCertificateList([
      ...certificateList,
      {
        ...formData,
        id: certificateList.length + 1,
      },
    ]);
    setFormData({
      certificateName: '',
      headerLeftText: '',
      date: '12/15/2024',
      body: '',
      bodyFont: 'Arial',
      fontSize: '2em',
      footerLeftText: '',
      footerCenterText: '',
      footerRightText: '',
      pageLayout: 'A4(Portrait)',
      height: '',
      width: '',
      studentPhoto: 'Yes',
      image: null,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64">
    <div className="flex gap-6">
    <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
    <h2 className="text-lg text-gray-700 mb-4">Add Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Certificate Name *</label>
            <input
              type="text"
              name="certificateName"
              value={formData.certificateName}
              onChange={handleChange}
              placeholder="Enter Certificate Name"
              required
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Header Left Text</label>
            <input
              type="text"
              name="headerLeftText"
              value={formData.headerLeftText}
              onChange={handleChange}
              placeholder="Enter Header Left Text"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Body</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Enter Body (Max 500 characters)"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              maxLength={500}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Body Font</label>
            <select
              name="bodyFont"
              value={formData.bodyFont}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Times New Roman">Times New Roman</option>
              {/* Add more fonts here */}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Font Size</label>
            <input
              type="text"
              name="fontSize"
              value={formData.fontSize}
              onChange={handleChange}
              placeholder="Ex: 2em"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Footer Left Text</label>
            <input
              type="text"
              name="footerLeftText"
              value={formData.footerLeftText}
              onChange={handleChange}
              placeholder="Enter Footer Left Text"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Footer Center Text</label>
            <input
              type="text"
              name="footerCenterText"
              value={formData.footerCenterText}
              onChange={handleChange}
              placeholder="Enter Footer Center Text"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Footer Right Text</label>
            <input
              type="text"
              name="footerRightText"
              value={formData.footerRightText}
              onChange={handleChange}
              placeholder="Enter Footer Right Text"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Page Layout</label>
            <select
              name="pageLayout"
              value={formData.pageLayout}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="A4(Portrait)">A4 (Portrait)</option>
              <option value="A4(Landscape)">A4 (Landscape)</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Height (mm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Width (mm)</label>
            <input
              type="number"
              name="width"
              value={formData.width}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Student Photo</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="studentPhoto"
                  value="Yes"
                  checked={formData.studentPhoto === 'Yes'}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="studentPhoto"
                  value="None"
                  checked={formData.studentPhoto === 'None'}
                  onChange={handleChange}
                  className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                None
              </label>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Image (1100 x 850)px</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
          >
            Save Certificate
          </button>
        </form>
      </div>

{/* List Section */}
<div className="w-2/3 bg-white p-6 rounded-md shadow-md max-h-[400px] overflow-auto">
  <h2 className="text-lg text-gray-700 mb-4">Certificate List</h2>
  <input
    type="text"
    placeholder="Search"
    className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <table className="min-w-full table-auto">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-gray-600">SL</th>
        <th className="px-4 py-2 text-gray-600">Name</th>
        <th className="px-4 py-2 text-gray-600">Background Image</th>
        <th className="px-4 py-2 text-gray-600">Default For</th>
      </tr>
    </thead>
    <tbody>
      {certificateList.length === 0 ? (
        <tr>
          <td colSpan="4" className="text-center text-gray-500">
            No Data Available In Table
          </td>
        </tr>
      ) : (
        certificateList.map((certificate, index) => (
          <tr key={index} className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">{index + 1}</td>
            <td className="px-4 py-2 text-gray-600">{certificate.certificateName}</td>
            <td className="px-4 py-2 text-gray-600">{certificate.image ? 'Uploaded' : 'None'}</td>
            <td className="px-4 py-2 text-gray-600">{certificate.pageLayout}</td>
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

export default CertificatePage;
