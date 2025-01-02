import React, { useState, useEffect } from 'react';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';

const TeacherAttendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedSubject, setSelectedSubject] = useState('Math');
    const [subjects, setSubjects] = useState(['Math', 'Science', 'English']); // Example subjects

    useEffect(() => {
        fetchAttendanceData();
    }, [selectedDate, selectedSubject]);

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
        <div className="flex">
            {/* Sidebar */}
            <TeacherSidebar />

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen ml-64">
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                    <h1 style={{ textAlign: 'center' }}>Teacher Attendance Management</h1>

                    {/* Date and Subject Selectors */}
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Select Date:</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            style={{
                                padding: '5px',
                                fontSize: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginRight: '20px',
                            }}
                        />
                        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Select Subject:</label>
                        <select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            style={{
                                padding: '5px',
                                fontSize: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        >
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Attendance Table */}
                    <table
                        border="1"
                        cellPadding="10"
                        cellSpacing="0"
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            textAlign: 'center',
                            fontSize: '16px',
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map((student) => {
                                // Ensure attendance is an array
                                const studentAttendance = Array.isArray(student.attendance) ? student.attendance : [];

                                // Find today's attendance record for the selected date and subject
                                const todayRecord = studentAttendance.find(
                                    (record) =>
                                        record.date === selectedDate && record.subject === selectedSubject
                                ) || { attendanceStatus: 'Absent', subject: selectedSubject };

                                return (
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.class}</td>
                                        <td>{student.section}</td>
                                        <td>{todayRecord.subject}</td>
                                        <td>
                                            <button
                                                onClick={() => toggleAttendance(student.id, todayRecord._id, todayRecord.attendanceStatus)}
                                                style={{
                                                    backgroundColor:
                                                        todayRecord.attendanceStatus === 'Present'
                                                            ? 'green'
                                                            : 'red',
                                                    color: 'white',
                                                    padding: '5px 10px',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                }}
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
    );
};

export default TeacherAttendance;
