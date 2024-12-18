import React from "react";
import StudentSidebar from "../Sidebar"; // Import the StudentSidebar component

const NoticeBoard = () => {
  const notices = [
    {
      title: "Mr.",
      description:
        "Hic quia explicabo vero qui vel. Incidunt voluptatem natus dolor ea quo sequi ut. Et ut illo ad commodi.",
      publishDate: "16th Jun, 1983",
    },
    { title: "Miss", description: "Sample Notice Description", publishDate: "10th Mar, 1995" },
    { title: "Dr.", description: "Another Notice Description", publishDate: "22nd Aug, 2005" },
    { title: "Prof.", description: "Detailed Notice Information", publishDate: "5th Jan, 2010" },
    { title: "Miss", description: "Short Notice Text Here", publishDate: "30th Sep, 2020" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 sticky top-0 h-screen">
        <StudentSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Notice Board</h1>

        {/* Notices Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">All Notices</h2>

          {/* Notice Cards */}
          <div className="space-y-4">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 bg-gray-50 hover:shadow-md flex justify-between items-start h-24"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{notice.title}</h3>
                  <p className="text-gray-700 mt-2">{notice.description}</p>
                </div>
                <div className="text-sm text-gray-500 mt-4 ml-4 flex flex-col items-end">
                  <span className="font-medium">Publish Date:</span>
                  <span>{notice.publishDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
