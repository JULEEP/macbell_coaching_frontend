import React from "react";
import Sidebar from "./Sidebar";

const BlockedUserPage = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Blocked User
      </h1>

      {/* Blocked User Section */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
        <h2 className="text-lg font-medium text-gray-700 mb-2">People</h2>
        <p className="text-gray-500">No User Found!</p>
      </div>
    </div>
    </div>
  );
};

export default BlockedUserPage;
