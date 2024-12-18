import React, { useState } from "react";

const AddNoticePage = () => {
  const [isPublished, setIsPublished] = useState(false);

  const handlePublishChange = (event) => {
    setIsPublished(event.target.value === "published");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Add Notice
      </h1>

      {/* Add Notice Form */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Notice Board</h2>

        <div className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 mb-2">Title *</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter Title"
            />
          </div>

          {/* Notice Message Field */}
          <div>
            <label className="block text-gray-700 mb-2">Notice *</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter Notice"
            ></textarea>
          </div>

          {/* Notice Date Field */}
          <div>
            <label className="block text-gray-700 mb-2">Notice Date *</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Publish On Radio Button */}
          <div>
            <label className="block text-gray-700 mb-2">Publish On *</label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="published"
                  name="publish"
                  value="published"
                  onChange={handlePublishChange}
                  checked={isPublished}
                  className="mr-2"
                />
                <label htmlFor="published" className="text-gray-700">
                  Is Published
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="not-published"
                  name="publish"
                  value="not-published"
                  onChange={handlePublishChange}
                  checked={!isPublished}
                  className="mr-2"
                />
                <label htmlFor="not-published" className="text-gray-700">
                  Not Published
                </label>
              </div>
            </div>
          </div>

          {/* Message To Radio Button */}
          <div>
            <label className="block text-gray-700 mb-2">Message To *</label>
            <div className="flex flex-wrap space-x-4">
              {[
                "Super Admin",
                "Admin",
                "Parents",
                "Students",
                "Teacher",
                "Reception",
                "Librarian",
                "Driver",
                "Accountant",
              ].map((role, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={role}
                    name="messageTo"
                    value={role}
                    className="mr-2"
                  />
                  <label htmlFor={role} className="text-gray-700">
                    {role}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Save Content Button */}
          <div className="flex justify-end">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600">
              Save Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoticePage;
