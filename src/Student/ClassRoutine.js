import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const ClassRoutinePage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Class Routine</h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {/* Class Routine Header */}
          <h2 className="text-xl font-semibold text-gray-800">Class Routine - Nine (A)</h2>
          <p className="text-sm text-gray-500">Class Routine</p>

          {/* Class Routine Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-400">Saturday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Sunday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Monday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Tuesday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Wednesday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Thursday</th>
                  <th className="px-4 py-2 text-left text-gray-400">Friday</th>
                </tr>
              </thead>
              <tbody>
                {/* First Row */}
                <tr>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                  <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                  <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Repeat the same data for the next 5 times */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-400">Saturday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Sunday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Monday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Tuesday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Wednesday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Thursday</th>
                      <th className="px-4 py-2 text-left text-gray-400">Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                      <td className="px-4 py-2 text-center text-gray-400">Time: 09:00 AM - 09:45 AM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                      <td className="px-4 py-2 text-center text-gray-400">Bangla (ENG-123)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr className="my-4 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassRoutinePage;
