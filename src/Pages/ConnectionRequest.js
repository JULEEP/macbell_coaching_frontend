import React from "react";

const ConnectionRequestsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Connection Requests
      </h1>

      {/* Two sections in the first row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Your Request Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Your Request</h2>
          <p className="text-gray-500">No Connection Request Found!</p>
        </div>

        {/* People Request You To Connect Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            People Request You To Connect
          </h2>
          <p className="text-gray-500">No Connection Request Found!</p>
        </div>
      </div>

      {/* Third section with reduced width aligned to the left */}
      <div className="mt-6">
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Connection Connected With You
          </h2>
          <p className="text-gray-500">No Connection Connected Request Found!</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequestsPage;
