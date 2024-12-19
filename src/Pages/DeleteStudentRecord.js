import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DeleteStudentRecord = () => {
  const [students, setStudents] = useState([]);
  
  // Sample student data, can be replaced with real data.
  const studentData = [
    { admissionNo: "89964", rollNo: "1", name: "John Doe", classSection: "10-A", fatherName: "Mr. Doe", dob: "2005-10-15", phone: "1234567890" },
    { admissionNo: "89965", rollNo: "2", name: "Jane Smith", classSection: "9-B", fatherName: "Mr. Smith", dob: "2006-08-22", phone: "2345678901" },
    // Add more sample students as needed
  ];

  // Setting the initial student data into state
  React.useEffect(() => {
    setStudents(studentData);
  }, []);

  const deleteRecord = (admissionNo) => {
    const updatedStudents = students.filter(student => student.admissionNo !== admissionNo);
    setStudents(updatedStudents);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h1 className="text-xl text-gray-700">Delete Student Record</h1>

      {/* Table Section */}
      <div className="bg-white p-6 shadow-md rounded space-y-6">
        <h2 className="text-lg text-gray-700 mb-4">Student Records</h2>

        {/* Table */}
        {students.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">Admission No</th>
                <th className="px-4 py-2 text-left border-b">Roll No</th>
                <th className="px-4 py-2 text-left border-b">Name</th>
                <th className="px-4 py-2 text-left border-b">Class (Section)</th>
                <th className="px-4 py-2 text-left border-b">Father Name</th>
                <th className="px-4 py-2 text-left border-b">Date Of Birth</th>
                <th className="px-4 py-2 text-left border-b">Phone</th>
                <th className="px-4 py-2 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500">No Data Available In Table</div>
        )}
        <div className="text-sm text-gray-500 mt-4">
          {students.length > 0
            ? `Showing ${students.length} entries`
            : "Showing 0 to 0 of 0 entries"}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteStudentRecord;
