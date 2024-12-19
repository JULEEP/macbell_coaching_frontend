import React from "react";
import Sidebar from "./Sidebar";

const ChatListPage = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Chat List
        </h1>

        {/* New Chat Section */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">New Chat</h2>
          <input
            type="text"
            placeholder="Search People or Group"
            className="w-full px-3 py-2 border rounded-md text-gray-700"
          />
        </div>

        {/* Group Section */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Group</h2>
          {/* Create Group Button */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500">No groups available</span>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              Create Group
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatListPage;
