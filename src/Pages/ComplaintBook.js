import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios'

const ComplaintBook = () => {
  const [formData, setFormData] = useState({
    complaintBy: '',
    complaintType: '',
    complaintSource: '',
    phone: '',
    date: '',
    actionsTaken: '',
    assigned: '',
    description: '',
    file: null,
  });

  const [complaintList, setComplaintList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    try {
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/complaints', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);

      // Update the complaint list with the new entry
      setComplaintList([...complaintList, response.data.complaint]);

      // Reset the form
      setFormData({
        complaintBy: '',
        complaintType: '',
        complaintSource: '',
        phone: '',
        date: '',
        actionsTaken: '',
        assigned: '',
        description: '',
        file: null,
      });
    } catch (error) {
      console.error('Error adding complaint:', error);
      alert('Failed to add complaint.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        <h2 className="text-lg text-gray-700 mb-4">Add Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="complaintBy" className="text-sm text-gray-600">Complaint By *</label>
            <input
              type="text"
              id="complaintBy"
              name="complaintBy"
              value={formData.complaintBy}
              onChange={handleChange}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="complaintType" className="text-sm text-gray-600">Complaint Type *</label>
            <input
              type="text"
              id="complaintType"
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              placeholder="Enter Type"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="complaintSource" className="text-sm text-gray-600">Complaint Source *</label>
            <input
              type="text"
              id="complaintSource"
              name="complaintSource"
              value={formData.complaintSource}
              onChange={handleChange}
              placeholder="Enter Source"
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
            <label htmlFor="actionsTaken" className="text-sm text-gray-600">Actions Taken</label>
            <input
              type="text"
              id="actionsTaken"
              name="actionsTaken"
              value={formData.actionsTaken}
              onChange={handleChange}
              placeholder="Enter Actions Taken"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="assigned" className="text-sm text-gray-600">Assigned</label>
            <input
              type="text"
              id="assigned"
              name="assigned"
              value={formData.assigned}
              onChange={handleChange}
              placeholder="Enter Assigned To"
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
<h2 className="text-lg text-gray-700 mb-4">Complaint List</h2>
<div className="overflow-x-auto">
  <table className="min-w-full table-auto ml-4"> {/* Added ml-4 for left margin */}
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 text-gray-600 text-left">SL</th> {/* Added text-left */}
        <th className="px-4 py-2 text-gray-600 text-left">Complaint By</th>
        <th className="px-4 py-2 text-gray-600 text-left">Complaint Type</th>
        <th className="px-4 py-2 text-gray-600 text-left">Source</th>
        <th className="px-4 py-2 text-gray-600 text-left">Phone</th>
      </tr>
    </thead>
    <tbody>
      {complaintList.map((complaint, index) => (
        <tr key={index} className="border-t border-gray-300">
          <td className="px-4 py-2 text-gray-600">{index + 1}</td>
          <td className="px-4 py-2 text-gray-600">{complaint.complaintBy}</td>
          <td className="px-4 py-2 text-gray-600">{complaint.complaintType}</td>
          <td className="px-4 py-2 text-gray-600">{complaint.complaintSource}</td>
          <td className="px-4 py-2 text-gray-600">{complaint.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>

  );
};

export default ComplaintBook;
