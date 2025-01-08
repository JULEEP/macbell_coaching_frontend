import React from "react";
import Sidebar from "./Sidebar"; // Import your Sidebar component

const ImageDisplay = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-6 ml-40">
        <img
          src="https://t3.ftcdn.net/jpg/02/48/39/78/360_F_248397818_Wey1l20OH5SdyDslNe7pUgkYiEmp5koS.jpg"
          alt="Beautiful Image"
          className="w-full max-w-3xl ml-40 mt-4 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
