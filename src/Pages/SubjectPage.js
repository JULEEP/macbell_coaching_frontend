import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SubjectPage = () => {
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectType: 'Theory', // Default to Theory
    subjectCode: '',
  });

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

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
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/admin/add-subject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.subjectName,
          subjectType: formData.subjectType,
          subjectCode: formData.subjectCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubjects([...subjects, data.subject]);
        alert('Subject added successfully.');
        setFormData({ subjectName: '', subjectType: 'Theory', subjectCode: '' }); // Reset form
      } else {
        alert(data.message || 'Failed to add subject.');
      }
    } catch (error) {
      console.error('Error adding subject:', error);
      alert('An error occurred while adding the subject.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <div className="flex gap-6">
          <div className="w-1/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg text-gray-700 mb-4">Add Subject</h2>
            <form className="space-y-4">
              {/* Subject Name Input */}
              <div>
                <label htmlFor="subjectName" className="text-sm text-gray-600">Subject Name *</label>
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

              {/* Subject Type (Radio buttons for Theory / Practical) */}
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

              {/* Subject Code Input */}
              <div>
                <label htmlFor="subjectCode" className="text-sm text-gray-600">Subject Code *</label>
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

              {/* Save Subject Button */}
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

          {/* Right side - Subject List */}
          <div className="w-2/3 bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg text-gray-700 mb-4">Subject List</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-gray-600">SL</th>
                  <th className="px-4 py-2 text-gray-600">Subject</th>
                  <th className="px-4 py-2 text-gray-600">Subject Type</th>
                  <th className="px-4 py-2 text-gray-600">Subject Code</th>
                </tr>
              </thead>
              <tbody>
                {subjects.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  subjects.map((subject, index) => (
                    <tr key={subject._id || index} className="border-t border-gray-300">
                      <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                      <td className="px-4 py-2 text-gray-600">{subject.name}</td>
                      <td className="px-4 py-2 text-gray-600">{subject.subjectType}</td>
                      <td className="px-4 py-2 text-gray-600">{subject.subjectCode}</td>
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

export default SubjectPage;
