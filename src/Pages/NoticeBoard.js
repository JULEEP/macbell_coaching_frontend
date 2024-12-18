import React from "react";

const NoticeBoardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Notice Board
      </h1>

      {/* All Notices Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">All Notices</h2>

        {/* Add Notice, Feedback, and Details */}
        <div className="space-y-4">
          {/* Align Add Notice button to the right */}
          <div className="flex justify-end">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Add Notice
            </button>
          </div>

          {/* Text and Details aligned to the left */}
          <div className="text-left">
            <p className="text-gray-600 text-sm">
              We value your feedback and suggestions. If you have any ideas or concerns you would like to share, please feel free to reach out to the school administration.
            </p>

            <div className="space-y-2 text-sm text-gray-500 mt-4">
              <p><strong>Publish Date:</strong></p>
              <p><strong>Notice Date:</strong></p>
              <p><strong>Created By:</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Notices List Section (one notice per row) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Notices</h2>

        {/* Notices in single column */}
        <div className="space-y-4">
          {[
            "Winter Break",
            "Safety and Security",
            "Uniform and Dress Code",
            "School Timings",
            "Upcoming Events",
            "Parent-Teacher Meeting (PTM)",
            "This is another sample notice 5",
            "This is another sample notice 4",
            "This is another sample notice 3",
            "This is another sample notice 2",
            "This is a sample notice 1",
          ].map((notice, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-sm rounded-lg p-4 space-y-2"
            >
              <h3 className="text-gray-800 font-medium">{notice}</h3>

              {/* Edit and Delete Buttons aligned to the right */}
              <div className="flex justify-end space-x-4">
                <button className="text-purple-500 border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white">
                  Edit
                </button>
                <button className="text-purple-500 border border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoardPage;
