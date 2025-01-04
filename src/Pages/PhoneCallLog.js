import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Sidebar from './Sidebar';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile sidebar toggle icons

const PhoneCallLog = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '12/15/2024',
    followUpDate: '12/15/2024',
    callDuration: '',
    description: '',
    type: 'Incoming', // Default type as Incoming
  });

  const [phoneCallList, setPhoneCallList] = useState([]);
  const [message, setMessage] = useState(''); // To display feedback
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      type: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the API to add a phone call
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/add-phones', formData);

      // Update the phone call list with the newly added entry
      setPhoneCallList([...phoneCallList, response.data.phoneCall]);

      // Clear the form and show success message
      setFormData({
        name: '',
        phone: '',
        date: '12/15/2024',
        followUpDate: '12/15/2024',
        callDuration: '',
        description: '',
        type: 'Incoming',
      });
      setMessage('Phone call added successfully!');
    } catch (error) {
      // Show error message
      setMessage(error.response?.data?.message || 'Error adding phone call.');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Mobile View: Header and Sidebar Toggle Icon */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Phone Call Log</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Add Phone Call</h2>
        {message && (
          <div
            className={`p-4 mb-4 text-sm ${
              message.includes('success') ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            } rounded-md`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm text-gray-600">Phone *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
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
            <label htmlFor="followUpDate" className="text-sm text-gray-600">Follow Up Date</label>
            <input
              type="date"
              id="followUpDate"
              name="followUpDate"
              value={formData.followUpDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="callDuration" className="text-sm text-gray-600">Call Duration</label>
            <input
              type="text"
              id="callDuration"
              name="callDuration"
              value={formData.callDuration}
              onChange={handleChange}
              placeholder="Enter Call Duration"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm text-gray-600">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Type</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Incoming"
                  checked={formData.type === 'Incoming'}
                  onChange={handleRadioChange}
                  className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                Incoming
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Outgoing"
                  checked={formData.type === 'Outgoing'}
                  onChange={handleRadioChange}
                  className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                Outgoing
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm w-full"
            >
              Save Phone Call
            </button>
          </div>
        </form>

        {/* Phone Call List */}
        <div className="mt-8">
          <h2 className="text-lg text-gray-700 mb-4">Phone Call List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">SL</th>
                  <th className="px-4 py-2 text-gray-600">Name</th>
                  <th className="px-4 py-2 text-gray-600">Phone</th>
                  <th className="px-4 py-2 text-gray-600">Date</th>
                  <th className="px-4 py-2 text-gray-600">Follow Up Date</th>
                  <th className="px-4 py-2 text-gray-600">Call Duration</th>
                </tr>
              </thead>
              <tbody>
                {phoneCallList.length === 0 ? (
                  <tr className="h-8">
                    <td colSpan="6" className="text-center text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  phoneCallList.map((call, index) => (
                    <tr key={index} className="border-t border-gray-300">
                      <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                      <td className="px-4 py-2 text-gray-600">{call.name}</td>
                      <td className="px-4 py-2 text-gray-600">{call.phone}</td>
                      <td className="px-4 py-2 text-gray-600">{call.date}</td>
                      <td className="px-4 py-2 text-gray-600">{call.followUpDate}</td>
                      <td className="px-4 py-2 text-gray-600">{call.callDuration}</td>
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

export default PhoneCallLog;
