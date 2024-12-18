import React, { useState } from 'react';

const AdmissionQuery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-gray-700">Admission Query</h2>
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-md shadow-md mb-8">
        {/* Select Criteria */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 text-lg">Select Criteria</p>
          <button
            onClick={toggleModal}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
          >
            + ADD
          </button>
        </div>

        {/* Input Fields Row */}
        <div className="flex flex-wrap gap-4 items-end mb-8">
          {/* Date From */}
          <div className="flex flex-col w-1/5 min-w-[180px]">
            <label className="text-gray-600 text-sm mb-2" htmlFor="date-from">Date From</label>
            <input
              type="date"
              id="date-from"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            />
          </div>

          {/* Date To */}
          <div className="flex flex-col w-1/5 min-w-[180px]">
            <label className="text-gray-600 text-sm mb-2" htmlFor="date-to">Date To</label>
            <input
              type="date"
              id="date-to"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            />
          </div>

          {/* Source */}
          <div className="flex flex-col w-1/5 min-w-[180px]">
            <label className="text-gray-600 text-sm mb-2" htmlFor="source">Source</label>
            <select
              id="source"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            >
              <option value="">Select Source</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="referral">Referral</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col w-1/5 min-w-[180px]">
            <label className="text-gray-600 text-sm mb-2" htmlFor="status">Status</label>
            <select
              id="status"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            >
              <option value="">Select Status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end">
          <button className="px-8 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm">
            Search
          </button>
        </div>
      </div>

      {/* Query List Table Section */}
      <div className="bg-white p-8 rounded-md shadow-md">
        <h3 className="text-xl text-gray-700 mb-4">Query List</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-gray-600">SL</th>
              <th className="px-4 py-2 text-gray-600">Name</th>
              <th className="px-4 py-2 text-gray-600">Phone</th>
              <th className="px-4 py-2 text-gray-600">Source</th>
              <th className="px-4 py-2 text-gray-600">Query Date</th>
              <th className="px-4 py-2 text-gray-600">Last Follow-up Date</th>
              <th className="px-4 py-2 text-gray-600">Next Follow-up Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data Row */}
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-gray-600">1</td>
              <td className="px-4 py-2 text-gray-600">John Doe</td>
              <td className="px-4 py-2 text-gray-600">123-456-7890</td>
              <td className="px-4 py-2 text-gray-600">Online</td>
              <td className="px-4 py-2 text-gray-600">2024-12-10</td>
              <td className="px-4 py-2 text-gray-600">2024-12-11</td>
              <td className="px-4 py-2 text-gray-600">2024-12-15</td>
            </tr>
            {/* You can add more rows here */}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding a New Query */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[700px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-gray-700">Admission Query</h2>
              <button onClick={toggleModal} className="text-2xl text-gray-600">×</button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="text-gray-600 text-sm">Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-gray-600 text-sm">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter Phone"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-600 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="address" className="text-gray-600 text-sm">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="text-gray-600 text-sm">Description</label>
                  <textarea
                    id="description"
                    placeholder="Enter Description"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date-from" className="text-gray-600 text-sm">Date From *</label>
                  <input
                    type="date"
                    id="date-from"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="next-follow-up" className="text-gray-600 text-sm">Next Follow-Up Date *</label>
                  <input
                    type="date"
                    id="next-follow-up"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="source" className="text-gray-600 text-sm">Source</label>
                  <select
                    id="source"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Source</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="referral">Referral</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label htmlFor="status" className="text-gray-600 text-sm">Status</label>
                  <select
                    id="status"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Status</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="query-date" className="text-gray-600 text-sm">Query Date</label>
                  <input
                    type="date"
                    id="query-date"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  </div>
                  <div>
                    <label htmlFor="last-follow-up" className="text-gray-600 text-sm">Last Follow-Up Date</label>
                    <input
                      type="date"
                      id="last-follow-up"
                      className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
  
              {/* Modal Actions */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={toggleModal}
                  className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors text-sm mr-4"
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default AdmissionQuery;
  