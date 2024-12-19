import React, { useState } from 'react';
import Sidebar from './Sidebar';

const PostalReceive = () => {
  const [formData, setFormData] = useState({
    fromTitle: '',
    referenceNo: '',
    address: '',
    note: '',
    toTitle: '',
    date: '',
    file: null,
  });

  const [postalList, setPostalList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostalList([...postalList, formData]);
    setFormData({
      fromTitle: '',
      referenceNo: '',
      address: '',
      note: '',
      toTitle: '',
      date: '',
      file: null,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        <h2 className="text-lg text-gray-700 mb-4">Add Postal Receive</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fromTitle" className="text-sm text-gray-600">From Title *</label>
            <input
              type="text"
              id="fromTitle"
              name="fromTitle"
              value={formData.fromTitle}
              onChange={handleChange}
              placeholder="Enter From Title"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="referenceNo" className="text-sm text-gray-600">Reference No *</label>
            <input
              type="text"
              id="referenceNo"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              placeholder="Enter Reference No"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="text-sm text-gray-600">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="note" className="text-sm text-gray-600">Note</label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter Note"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            />
          </div>

          <div>
            <label htmlFor="toTitle" className="text-sm text-gray-600">To Title *</label>
            <input
              type="text"
              id="toTitle"
              name="toTitle"
              value={formData.toTitle}
              onChange={handleChange}
              placeholder="Enter To Title"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="text-sm text-gray-600">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="file" className="text-sm text-gray-600">File</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-gray-500 mt-2">(PDF, DOC, DOCX, JPG, JPEG, PNG, TXT are allowed for upload)</p>
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-3/4 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg text-gray-700 mb-4">Postal Receive List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">SL</th>
              <th className="px-4 py-2 text-gray-600">From Title</th>
              <th className="px-4 py-2 text-gray-600">Reference No</th>
              <th className="px-4 py-2 text-gray-600">Address</th>
              <th className="px-4 py-2 text-gray-600">To Title</th>
              <th className="px-4 py-2 text-gray-600">Note</th>
            </tr>
          </thead>
          <tbody>
            {postalList.map((postal, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-gray-600">{postal.fromTitle}</td>
                <td className="px-4 py-2 text-gray-600">{postal.referenceNo}</td>
                <td className="px-4 py-2 text-gray-600">{postal.address}</td>
                <td className="px-4 py-2 text-gray-600">{postal.toTitle}</td>
                <td className="px-4 py-2 text-gray-600">{postal.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostalReceive;
