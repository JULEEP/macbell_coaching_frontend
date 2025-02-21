import React, { useState } from "react";
import { FaBars, FaTimes, FaCheckCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";

const CreateLecture = () => {
    const [lecture, setLecture] = useState({
        title: "",
        description: "",
        date: "",
        duration: "",
        link: "",
        class: "",
        section: "",
        subject: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleChange = (e) => {
        setLecture({ ...lecture, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!lecture.title || !lecture.description || !lecture.date || !lecture.duration || !lecture.class || !lecture.section || !lecture.subject) {
            setError("Please fill in all required fields.");
            return;
        }
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await fetch("https://school-backend-1-2xki.onrender.com/api/admin/create-lecture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(lecture),
            });
            if (response.ok) {
                setSuccess(true);
                setLecture({ title: "", description: "", date: "", duration: "", link: "", class: "", section: "", subject: "" });
            } else {
                setError("Failed to create lecture. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`} onClick={() => setIsSidebarOpen(false)}></div>
            <div className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Sidebar />
            </div>
            <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                <div className="flex items-center justify-between bg-purple-600 text-white p-4 shadow-lg lg:hidden">
                    <h1 className="text-lg font-bold">Create Lecture</h1>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl focus:outline-none">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className="space-y-4 mt-4 max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                    <input type="text" name="title" value={lecture.title} onChange={handleChange} placeholder="Lecture Title *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <textarea name="description" value={lecture.description} onChange={handleChange} placeholder="Lecture Description *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="date" name="date" value={lecture.date} onChange={handleChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="text" name="duration" value={lecture.duration} onChange={handleChange} placeholder="Duration (e.g., 1 hour) *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="text" name="class" value={lecture.class} onChange={handleChange} placeholder="Class *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="text" name="section" value={lecture.section} onChange={handleChange} placeholder="Section *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="text" name="subject" value={lecture.subject} onChange={handleChange} placeholder="Subject *" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    <input type="url" name="link" value={lecture.link} onChange={handleChange} placeholder="Lecture Link (if online)" className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-500" />
                    {loading && <p className="text-gray-500 text-sm">Saving...</p>}
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-end mt-4">
                        <button onClick={handleSubmit} className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 text-sm">
                            Create Lecture
                        </button>
                    </div>
                </div>
            </div>
            {success && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
                        <p className="text-lg font-semibold mt-2">Lecture Created Successfully!</p>
                        <button onClick={() => setSuccess(false)} className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:ring-2 focus:ring-purple-500">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateLecture;
