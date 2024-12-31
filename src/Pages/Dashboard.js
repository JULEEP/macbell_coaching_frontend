import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Sidebar from './Sidebar';
import axios from 'axios'; // We'll use axios to make API calls

const Dashboard = () => {
  const [notices, setNotices] = useState([]); // State to store notices from API
  const [formVisible, setFormVisible] = useState(false); // State to manage form visibility
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    class: '',
    section: '',
    targetAudience: [],
    postedBy: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://school-backend-1-2xki.onrender.com/api/admin/notices', formData);
      // After submitting, fetch updated notices
      fetchNotices();
      setFormVisible(false); // Hide the form after submission
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  // Function to fetch notices from the API
  const fetchNotices = async () => {
    try {
      const response = await axios.get('https://school-backend-1-2xki.onrender.com/api/admin/get-notices');
      if (response.data.notices) {
        setNotices(response.data.notices);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  // Fetch notices when the component mounts
  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Student Section (Light Blue) */}
          <div className="bg-blue-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Students</h2>
            <p className="text-gray-500">Total Students</p>
            <p className="text-2xl font-bold">0</p>
          </div>

          {/* Teacher Section (Black) */}
          <div className="bg-black text-white p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Teachers</h2>
            <p className="text-gray-300">Total Teachers</p>
            <p className="text-2xl font-bold">50</p>
          </div>

          {/* Parent Section (Light Red) */}
          <div className="bg-red-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Parents</h2>
            <p className="text-gray-500">Total Parents</p>
            <p className="text-2xl font-bold">0</p>
          </div>

          {/* Staff Section (Light Green) */}
          <div className="bg-green-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Staffs</h2>
            <p className="text-gray-500">Total Staffs</p>
            <p className="text-2xl font-bold">0</p>
          </div>

          {/* Subjects Section (Light Yellow) */}
          <div className="bg-yellow-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Subjects</h2>
            <p className="text-gray-500">Total Subjects</p>
            <p className="text-2xl font-bold">10</p>
          </div>

          {/* Classes Section (Light Purple) */}
          <div className="bg-purple-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Classes</h2>
            <p className="text-gray-500">Total Classes</p>
            <p className="text-2xl font-bold">5</p>
          </div>

          {/* Sections Section (Light Orange) */}
          <div className="bg-orange-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Sections</h2>
            <p className="text-gray-500">Total Sections</p>
            <p className="text-2xl font-bold">8</p>
          </div>

          {/* Vehicles Section (Light Teal) */}
          <div className="bg-teal-100 p-4 shadow-md rounded-md">
            <h2 className="font-semibold text-lg">Vehicles</h2>
            <p className="text-gray-500">Total Vehicles</p>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>

        {/* Notice Board Section */}
        <div className="bg-white p-6 shadow-md mt-28 rounded-md mb-6">
          <h2 className="text-xl text-gray-500">Notice Board</h2>

          {/* Button for adding new item */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setFormVisible(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              + ADD
            </button>
          </div>

          {/* Modal for form */}
          {formVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-6 w-4/5 max-w-4xl">
                <h3 className="text-xl font-semibold mb-4">Create Notice</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Title"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      placeholder="Class"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      placeholder="Section"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <input
                      type="text"
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      placeholder="Target Audience"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="text"
                      name="postedBy"
                      value={formData.postedBy}
                      onChange={handleInputChange}
                      placeholder="Posted By"
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                      required
                    />
                    <div className="flex justify-end col-span-4 mt-4">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setFormVisible(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Table with gray borders */}
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Date</th>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Title</th>
                <th className="py-2 px-4 border border-gray-300 text-left bg-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-2 px-4 text-center">No notices available</td>
                </tr>
              ) : (
                notices.map((notice) => (
                  <tr key={notice._id}>
                    <td className="py-2 px-4 border border-gray-300">{new Date(notice.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border border-gray-300">{notice.title}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <button className="text-blue-600">View</button>
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

export default Dashboard;
