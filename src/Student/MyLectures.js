import React, { useState, useEffect } from "react";
import StudentSidebar from "../Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import VideoPopup from "./VideoPopup"; // Import custom video player

const MyLectures = () => {
  const [lectures, setLectures] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [videoId, setVideoId] = useState(""); // Store YouTube Video ID

  useEffect(() => {
    const fetchLectures = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://school-backend-1-2xki.onrender.com/api/students/lectures/677904859d0da6e3bee4ba2e");
        const data = await response.json();
        setLectures(data.lectures);
      } catch (err) {
        setError("An error occurred while fetching lectures.");
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  // ✅ Extract YouTube Video ID (for clean embed without controls)
  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/v\/|.*\/embed\/|.*\/watch\?v=))([^#\&\?]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ Background Overlay for Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* ✅ Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <StudentSidebar />
      </div>

      {/* ✅ Main Content */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <div className="flex items-center justify-between bg-blue-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">My Lectures</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="p-6">
          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-center text-blue-600 mb-4">My Lectures</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-purple-600 text-white">
                    <th className="px-6 py-3 text-left">#</th>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Description</th>
                    <th className="px-6 py-3 text-left">Subject</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Duration</th>
                    <th className="px-6 py-3 text-left">Lecture Link</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center p-4">Loading lectures...</td>
                    </tr>
                  ) : lectures.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center p-4">No lectures available</td>
                    </tr>
                  ) : (
                    lectures.map((lecture, index) => (
                      <tr key={lecture._id} className="border-t">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{lecture.title}</td>
                        <td className="px-6 py-4">{lecture.description}</td>
                        <td className="px-6 py-4">{lecture.subject}</td>
                        <td className="px-6 py-4">{new Date(lecture.date).toLocaleDateString()}</td>
                        <td className="px-6 py-4">{lecture.duration}</td>
                        <td className="px-6 py-4">
                          {lecture.link.includes("youtube.com") || lecture.link.includes("youtu.be") ? (
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => setVideoId(getYouTubeVideoId(lecture.link))}
                            >
                              Watch Lecture
                            </button>
                          ) : (
                            <a href={lecture.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                              Open Link
                            </a>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ✅ Popup for YouTube Video */}
        {videoId && <VideoPopup videoId={videoId} onClose={() => setVideoId("")} />}
      </div>
    </div>
  );
};

export default MyLectures;
