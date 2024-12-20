import React from "react";
import ParentSidebar from "./ParentSidebar";

const MyChildClassRoutinePage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-xl font-medium text-blue-500 mb-6">Class Routine</h1>

        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          {/* Class Routine Header */}
          <h2 className="text-lg font-medium text-gray-800">
            Class Routine - Nine (A)
          </h2>
          <p className="text-sm text-gray-500">Class Routine</p>

          {/* Class Routine Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Saturday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Sunday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Monday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Tuesday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Wednesday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Thursday
                  </th>
                  <th className="px-2 py-1 text-left text-sm text-gray-600">
                    Friday
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* First Row */}
                <tr>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Time: 09:00 AM - 09:45 AM
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
                  <td className="px-2 py-1 text-center text-sm text-gray-600">
                    Bangla (ENG-123)
                  </td>
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
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Saturday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Sunday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Monday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Tuesday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Wednesday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Thursday
                      </th>
                      <th className="px-2 py-1 text-left text-sm text-gray-600">
                        Friday
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Time: 09:00 AM - 09:45 AM
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
                      <td className="px-2 py-1 text-center text-sm text-gray-600">
                        Bangla (ENG-123)
                      </td>
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

export default MyChildClassRoutinePage;
