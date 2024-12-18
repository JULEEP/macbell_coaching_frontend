import React, { useState } from 'react';

const SendMarksBySms = () => {
  const [exam, setExam] = useState('');
  const [className, setClassName] = useState('');
  const [receiver, setReceiver] = useState('students');
  const [message, setMessage] = useState('');

  const handleSendMarks = () => {
    // Logic to send marks via SMS
    console.log('Marks sent via SMS');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Send Marks By SMS</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Send Marks Via SMS</h2>

        {/* Main form container */}
        <div className="flex gap-6 items-center">
          {/* Select Exam */}
          <div className="w-1/4">
            <label htmlFor="exam" className="block text-sm text-gray-600 mb-1">Select Exam</label>
            <select
              id="exam"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Exam</option>
              <option value="mid-term">Mid Term</option>
              <option value="final-term">Final Term</option>
            </select>
          </div>

          {/* Select Class */}
          <div className="w-1/4">
            <label htmlFor="className" className="block text-sm text-gray-600 mb-1">Select Class</label>
            <select
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select Class</option>
              <option value="one">Class One</option>
              <option value="two">Class Two</option>
            </select>
          </div>

          {/* Select Receiver */}
          <div className="w-1/4">
            <label htmlFor="receiver" className="block text-sm text-gray-600 mb-1">Select Receiver</label>
            <select
              id="receiver"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="students">Students</option>
              <option value="parents">Parents</option>
            </select>
          </div>

          {/* Send Button */}
          <div className="w-1/4">
            <button
              onClick={handleSendMarks}
              className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
            >
              Send Marks Via SMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMarksBySms;
