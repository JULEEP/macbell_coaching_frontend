import React, { useState } from "react";

const EventListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const events = [
    {
      id: 1,
      title: "Winter Break Celebration",
      role: "Admin",
      date: "12/20/2024 - 12/22/2024",
      location: "Main Auditorium",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      role: "Teacher",
      date: "12/25/2024",
      location: "Room 101",
    },
    {
      id: 3,
      title: "School Sports Day",
      role: "Admin",
      date: "12/30/2024",
      location: "Sports Ground",
    },
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 flex">
      {/* Left Side - Add Event Form */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Add Event</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Title *</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Event Title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role *</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Select</option>
              <option>Admin</option>
              <option>Teacher</option>
              <option>Student</option>
              <option>Parent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Location *</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Event Location"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From Date *</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">To Date *</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Event Description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Event URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">File</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <small className="text-gray-500">JPG, JPEG, PNG, GIF are allowed for upload</small>
          </div>

          <div className="flex justify-end">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600">
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Event List */}
      <div className="w-2/3 bg-white shadow-md rounded-lg p-6 space-y-6 ml-6">
        <h2 className="text-xl font-semibold text-gray-800">Event List</h2>

        {/* Quick Search */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Quick Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Event List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border-b text-left">SL</th>
                <th className="px-4 py-2 border-b text-left">Event Title</th>
                <th className="px-4 py-2 border-b text-left">Role</th>
                <th className="px-4 py-2 border-b text-left">Date</th>
                <th className="px-4 py-2 border-b text-left">Location</th>
                <th className="px-4 py-2 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {events
                .filter(
                  (event) =>
                    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    event.location.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((event, index) => (
                  <tr key={event.id}>
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{event.title}</td>
                    <td className="px-4 py-2 border-b">{event.role}</td>
                    <td className="px-4 py-2 border-b">{event.date}</td>
                    <td className="px-4 py-2 border-b">{event.location}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-purple-500 hover:text-purple-700">Edit</button> |{" "}
                      <button className="text-red-500 hover:text-red-700">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventListPage;
