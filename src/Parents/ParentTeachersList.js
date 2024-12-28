import React, { useEffect, useState } from "react";
import ParentSidebar from "./ParentSidebar";
import axios from "axios";

const ParentTeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      const parentId = "676f98625b442721a56ee770";
      const studentId = "676bb21bd06928a8432c676a";

      try {
        const response = await axios.get(
          `https://school-backend-1-2xki.onrender.com/api/parent/my-child-teacher/${parentId}/${studentId}`
        );
        const teacherNames = response.data.subjects.map((subject) => subject.teacher);
        setTeachers(teacherNames);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch teachers");
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <ParentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-xl font-semibold text-blue-500 mb-4">Teachers List</h1>
        <h2 className="text-xs font-medium text-gray-700 mb-6">Nine (A)</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-500 mb-4">Teacher Names</h3>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : teachers.length > 0 ? (
            <ul className="space-y-4">
              {teachers.map((teacher, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <span className="text-xs text-gray-700">{teacher}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-gray-600 text-center mt-4">No Teachers Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentTeachersList;
