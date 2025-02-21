import React, { useEffect } from "react";
import YouTube from "react-youtube";

const VideoPopup = ({ videoId, onClose }) => {
  useEffect(() => {
    // ✅ Remove Share & Branding with CSS
    const style = document.createElement("style");
    style.innerHTML = `
      iframe {
        pointer-events: none !important;  /* Disable click events on YouTube overlay */
      }
      .ytp-chrome-top, .ytp-share-button, .ytp-button {
        display: none !important; /* Hide Share Button & Top UI */
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style); // Cleanup on close
    };
  }, []);

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,         // Auto-play video
      controls: 0,         // Hide controls
      modestbranding: 1,   // Minimize branding
      rel: 0,              // No related videos
      disablekb: 1,        // Disable keyboard controls
      fs: 1,               // Disable fullscreen button
      iv_load_policy: 3,   // Disable annotations & overlays
      playsinline: 1,      // Force inline playback on mobile
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Lecture Video</h2>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="mt-4 relative">
          <YouTube videoId={videoId} opts={opts} />
          {/* ✅ Transparent overlay to block YouTube clicks */}
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
