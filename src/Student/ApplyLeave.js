import React from "react";
import StudentSidebar from "../Sidebar";

const ApplyLeave = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Apply Leave</h1>
        
        {/* Remaining Leaves Section */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">My Remaining Leaves</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Remaining Days</th>
                  <th className="py-3 px-4">Extra Taken</th>
                  <th className="py-3 px-4">Leave Taken</th>
                  <th className="py-3 px-4">Leave Days</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 border-b">
                  <td className="py-3 px-4">Sick Leave</td>
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">8</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="py-3 px-4">Annual Leave</td>
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">0</td>
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
