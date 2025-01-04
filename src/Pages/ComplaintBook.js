import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile sidebar toggle icons

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      setComplaintList([...complaintList, response.data.complaint]);

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

  const currentComplaints = complaintList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(complaintList.length / itemsPerPage);

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
          <h1 className="text-lg font-bold">Complaint Book</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Complaint Book</h2>

        {/* Form Section */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-lg text-gray-700 mb-4">Add Complaint</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
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
          </form>
        </div>

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

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-sm bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400"
            >
              Previous
            </button>
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-sm bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintBook;
