import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SubjectPage = () => {
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectType: 'Theory', // Default to Theory
    subjectCode: '',
  });

  const [subjects, setSubjects] = useState([]);

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

  const handleSaveSubject = () => {
    if (formData.subjectName && formData.subjectCode) {
      setSubjects([
        ...subjects,
        { id: subjects.length + 1, ...formData },
      ]);
      setFormData({ subjectName: '', subjectType: 'Theory', subjectCode: '' }); // Reset form after save
    }
  };

  const handleEditSubject = (id) => {
    const subject = subjects.find((s) => s.id === id);
    setFormData({
      subjectName: subject.subjectName,
      subjectType: subject.subjectType,
      subjectCode: subject.subjectCode,
    });
  };

  const handleRemoveSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

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
            >
              Save Subject
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
              <th className="px-4 py-2 text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              subjects.map((subject, index) => (
                <tr key={subject.id} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-600">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-600">{subject.subjectName}</td>
                  <td className="px-4 py-2 text-gray-600">{subject.subjectType}</td>
                  <td className="px-4 py-2 text-gray-600">{subject.subjectCode}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <button
                      onClick={() => handleEditSubject(subject.id)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveSubject(subject.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
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
