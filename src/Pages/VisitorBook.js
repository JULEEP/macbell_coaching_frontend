import React, { useState } from 'react';
import Sidebar from './Sidebar';

const VisitorBook = () => {
  const [formData, setFormData] = useState({
    purpose: '',
    name: '',
    phone: '',
    id: '',
    noOfPersons: '',
    date: '',
    inTime: '',
    outTime: '',
    file: null,
  });

  const [visitorList, setVisitorList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisitorList([...visitorList, formData]);
    setFormData({
      purpose: '',
      name: '',
      phone: '',
      id: '',
      noOfPersons: '',
      date: '',
      inTime: '',
      outTime: '',
      file: null,
    });
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        <h2 className="text-lg text-gray-700 mb-4">Add Visitor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="purpose" className="text-sm text-gray-600">Purpose *</label>
            <input
              type="text"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter Purpose"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="text-sm text-gray-600">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm text-gray-600">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="id" className="text-sm text-gray-600">Id *</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter ID"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="noOfPersons" className="text-sm text-gray-600">No Of Persons *</label>
            <input
              type="number"
              id="noOfPersons"
              name="noOfPersons"
              value={formData.noOfPersons}
              onChange={handleChange}
              placeholder="Enter No. of Persons"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="text-sm text-gray-600">Date *</label>
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
            <label htmlFor="inTime" className="text-sm text-gray-600">In Time *</label>
            <input
              type="time"
              id="inTime"
              name="inTime"
              value={formData.inTime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="outTime" className="text-sm text-gray-600">Out Time *</label>
            <input
              type="time"
              id="outTime"
              name="outTime"
              value={formData.outTime}
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
        <h2 className="text-lg text-gray-700 mb-4">Visitor List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-gray-600">SL</th>
              <th className="px-4 py-2 text-gray-600">Purpose</th>
              <th className="px-4 py-2 text-gray-600">Name</th>
              <th className="px-4 py-2 text-gray-600">Phone</th>
              <th className="px-4 py-2 text-gray-600">Date</th>
              <th className="px-4 py-2 text-gray-600">In Time</th>
              <th className="px-4 py-2 text-gray-600">Out Time</th>
            </tr>
          </thead>
          <tbody>
            {visitorList.map((visitor, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.purpose}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.name}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.phone}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.date}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.inTime}</td>
                <td className="px-4 py-2 text-gray-600">{visitor.outTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorBook;
