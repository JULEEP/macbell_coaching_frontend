import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white overflow-y-auto fixed">
      <div className="p-4">
        {/* Dashboard Section */}
        <h2 className="text-lg font-bold border-gray-700 pb-2">Dashboard</h2>
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Dashboard</a></li>
          <li className="text-lg mt-2 pb-2">Sidebar Manager</li>
        </ul>

        {/* Sidebar Manager Section */}
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Administration</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Admin Section</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Study Material</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Download Center</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Lesson Plan</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Bulk Print</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Certificate Addon</a></li>
        </ul>

        {/* Student Section */}
        <h2 className="text-lg font mt-6 pb-2 pl-2">Student</h2>
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Student Info</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Fees</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Behaviour Records</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Homework</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Library</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Transport</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Dormitory</a></li>
        </ul>

        {/* Exam Section */}
        <h2 className="text-lg font-bold mt-6 pb-2 pl-2">Exam</h2>
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Examination</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Exam Plan</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Online Exam</a></li>
        </ul>

        {/* HR Section */}
        <h2 className="text-lg font-bold mt-6 pb-2 pl-2">HR</h2>
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:text-gray-400">Human Resource</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Teacher Evaluation</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Leave</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Role & Permission</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
