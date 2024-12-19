import React, { useState } from "react";
import Sidebar from "./Sidebar";

const VideoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [sharedVideos, setSharedVideos] = useState([]);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleAddVideo = () => {
    setModalOpen(true);
  };

  const handleSave = () => {
    const newVideo = {
      id: sharedVideos.length + 1,
      class: selectedClass,
      section: selectedSection,
      title,
      videoLink,
      description,
    };

    setSharedVideos([...sharedVideos, newVideo]);
    setModalOpen(false);
    // Reset fields
    setSelectedClass("");
    setSelectedSection("");
    setTitle("");
    setVideoLink("");
    setDescription("");
  };

  const handleCancel = () => {
    setModalOpen(false);
    // Reset fields
    setSelectedClass("");
    setSelectedSection("");
    setTitle("");
    setVideoLink("");
    setDescription("");
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Video</h2>

      {/* Search Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full p-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Search
        </button>
      </div>

      {/* Add Video Button */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleAddVideo}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          + ADD
        </button>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Class Drop-down */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Class</option>
            <option value="class-1">Class 1</option>
            <option value="class-2">Class 2</option>
            <option value="class-3">Class 3</option>
          </select>
        </div>

        {/* Section Drop-down */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Section</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* Title Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Placeholder for Video List */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left text-sm font-medium text-gray-700">SL</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Title</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Class</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Section</th>
              <th className="p-2 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {sharedVideos.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No Data Available In Table
                </td>
              </tr>
            ) : (
              sharedVideos.map((video, index) => (
                <tr key={video.id}>
                  <td className="p-2 text-sm text-gray-700">{index + 1}</td>
                  <td className="p-2 text-sm text-gray-700">{video.title}</td>
                  <td className="p-2 text-sm text-gray-700">{video.class}</td>
                  <td className="p-2 text-sm text-gray-700">{video.section}</td>
                  <td className="p-2 text-sm text-gray-700">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        Showing {sharedVideos.length} to {sharedVideos.length} of {sharedVideos.length} entries
      </div>

      {/* Modal for Adding Video */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Add Video</h3>
              <button
                onClick={handleCancel}
                className="text-gray-500 text-xl font-semibold"
              >
                ×
              </button>
            </div>

            {/* Video Form */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Class *</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Class</option>
                <option value="class-1">Class 1</option>
                <option value="class-2">Class 2</option>
                <option value="class-3">Class 3</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Section *</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Video Link *</label>
              <input
                type="url"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="Enter Video Link"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default VideoPage;
