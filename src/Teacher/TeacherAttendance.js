import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';

const TeacherAttendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedSubject, setSelectedSubject] = useState('Math');
    const [subjects, setSubjects] = useState(['Math', 'Science', 'English']); // Example subjects
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        fetchAttendanceData();
    }, [selectedDate, selectedSubject]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to fetch attendance data from the backend
    const fetchAttendanceData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/teacher/get-attendance', {
                params: {
                    class: '5', // Example class
                    section: 'A', // Example section
                    date: selectedDate,
                    subject: selectedSubject,
                }
            });
            setAttendanceData(response.data); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching attendance data', error);
        }
    };

    // Function to toggle attendance status for a student
    const toggleAttendance = async (studentId, attendanceId, currentStatus) => {
        const newStatus = currentStatus === 'Present' ? 'Absent' : 'Present'; // Toggle status

        try {
            const response = await axios.put(`http://localhost:4000/api/teacher/update-attendance/${studentId}/${attendanceId}`, {
                date: selectedDate,
                subject: selectedSubject,
                attendanceStatus: newStatus,
            });

            if (response.data.message === 'Attendance updated successfully') {
                fetchAttendanceData(); // Re-fetch the updated attendance data
            }
        } catch (error) {
            console.error('Error updating attendance', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full z-20 bg-white shadow-lg transition-transform transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:static lg:shadow-none w-64`}
            >
                <TeacherSidebar />
            </div>

            {/* Overlay for small screens */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
                    <h1 className="text-lg font-bold">Attendance Management</h1>
                    <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 bg-gray-100 flex-1">
                    <div className="font-sans">
                        <h1 className="text-center text-2xl font-bold mb-6">Teacher Attendance Management</h1>

                        {/* Date and Subject Selectors */}
                        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4">
                            <div className="flex items-center gap-2">
                                <label className="font-semibold">Select Date:</label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="p-2 border rounded-lg text-gray-700"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="font-semibold">Select Subject:</label>
                                <select
                                    value={selectedSubject}
                                    onChange={(e) => setSelectedSubject(e.target.value)}
                                    className="p-2 border rounded-lg text-gray-700"
                                >
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Attendance Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border text-center">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border p-2">Name</th>
                                        <th className="border p-2">Class</th>
                                        <th className="border p-2">Section</th>
                                        <th className="border p-2">Subject</th>
                                        <th className="border p-2">Attendance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceData.map((student) => {
                                        const studentAttendance = Array.isArray(student.attendance) ? student.attendance : [];
                                        const todayRecord = studentAttendance.find(
                                            (record) =>
                                                record.date === selectedDate && record.subject === selectedSubject
                                        ) || { attendanceStatus: 'Absent', subject: selectedSubject };

                                        return (
                                            <tr key={student.id} className="even:bg-gray-100">
                                                <td className="border p-2">{student.firstName}</td>
                                                <td className="border p-2">{student.class}</td>
                                                <td className="border p-2">{student.section}</td>
                                                <td className="border p-2">{todayRecord.subject}</td>
                                                <td className="border p-2">
                                                    <button
                                                        onClick={() => toggleAttendance(student.id, todayRecord._id, todayRecord.attendanceStatus)}
                                                        className={`px-4 py-2 rounded-lg text-white ${
                                                            todayRecord.attendanceStatus === 'Present'
                                                                ? 'bg-green-500'
                                                                : 'bg-red-500'
                                                        }`}
                                                    >
                                                        {todayRecord.attendanceStatus}
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherAttendance;
