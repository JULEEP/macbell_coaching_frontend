import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

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
  });

  const [complaintList, setComplaintList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch complaints on page load
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-complaints');
        setComplaintList(response.data.complaints);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };
    fetchComplaints();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/complaints', formData, {
        headers: {
          'Content-Type': 'application/json',
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
      });
    } catch (error) {
      console.error('Error adding complaint:', error);
      alert('Failed to add complaint.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the complaints for the current page
  const currentComplaints = complaintList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(complaintList.length / itemsPerPage);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar /> {/* Sidebar added here */}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}
        {/* Form Section */}
        <h2 className="text-lg text-gray-700 mb-4">Add Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            <div className="col-span-4">
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

            <div className="col-span-4">
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </div>
        </form>

        {/* Complaint List Section */}
        <div className="mt-8">
          <h2 className="text-lg text-gray-700 mb-4">Complaint List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600 text-left">SL</th>
                  <th className="px-4 py-2 text-gray-600 text-left">Complaint By</th>
                  <th className="px-4 py-2 text-gray-600 text-left">Complaint Type</th>
                  <th className="px-4 py-2 text-gray-600 text-left">Source</th>
                  <th className="px-4 py-2 text-gray-600 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {currentComplaints.map((complaint, index) => (
                  <tr key={complaint._id} className="border-t border-gray-300">
                    <td className="px-4 py-2 text-gray-600">{(currentPage - 1) * itemsPerPage + index + 1}</td>
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

        {/* Pagination Section */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-purple-600 text-white rounded-md mr-2"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-600">{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-purple-600 text-white rounded-md ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintBook;
