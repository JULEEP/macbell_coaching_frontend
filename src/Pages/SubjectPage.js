// AddSubjectPage.js
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the sidebar toggle
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing the toast styles

const SubjectPage = () => {
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectType: 'Theory', // Default to Theory
    subjectCode: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      subjectType: e.target.value,
    });
  };

  const handleSaveSubject = async () => {
    if (!formData.subjectName || !formData.subjectCode) {
      toast.error('Please fill in all required fields.'); // Toast error
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        'https://school-backend-1-2xki.onrender.com/api/admin/add-subject',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subjectName: formData.subjectName,
            subjectType: formData.subjectType,
            subjectCode: formData.subjectCode,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success('Subject added successfully.'); // Toast success
        setFormData({ subjectName: '', subjectType: 'Theory', subjectCode: '' }); // Reset form
      } else {
        toast.error(data.message || 'Failed to add subject.'); // Toast error
      }
    } catch (error) {
      console.error('Error adding subject:', error);
      toast.error('An error occurred while adding the subject.'); // Toast error
    } finally {
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">Add Subject</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Add Subject Form */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6 mx-4 mt-4 lg:mx-0">
          <h2 className="text-lg text-gray-700 mb-4">Add Subject</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="subjectName" className="text-sm text-gray-600">
                  Subject Name *
                </label>
                <input
                  type="text"
                  id="subjectName"
                  name="subjectName"
                  value={formData.subjectName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Subject Type *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subjectType"
                      value="Theory"
                      checked={formData.subjectType === 'Theory'}
                      onChange={handleRadioChange}
                      className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    Theory
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subjectType"
                      value="Practical"
                      checked={formData.subjectType === 'Practical'}
                      onChange={handleRadioChange}
                      className="focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    Practical
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="subjectCode" className="text-sm text-gray-600">
                  Subject Code *
                </label>
                <input
                  type="text"
                  id="subjectCode"
                  name="subjectCode"
                  value={formData.subjectCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSaveSubject}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Subject'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default SubjectPage;
