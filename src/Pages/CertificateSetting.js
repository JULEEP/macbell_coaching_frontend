import React, { useState } from "react";

const CertificateSettings = () => {
  const [certificatePrefix, setCertificatePrefix] = useState("");
  const [pageBreakOption, setPageBreakOption] = useState("");

  const handleUpdateSettings = () => {
    console.log("Certificate Number Prefix:", certificatePrefix);
    console.log("Page Break Option:", pageBreakOption);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Certificate Settings</h2>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Update Settings</h3>

        {/* Certificate Number Prefix */}
        <div className="mb-6">
          <label
            htmlFor="certificatePrefix"
            className="block text-sm font-medium text-gray-700"
          >
            Certificate Number Prefix
          </label>
          <input
            type="text"
            id="certificatePrefix"
            value={certificatePrefix}
            onChange={(e) => setCertificatePrefix(e.target.value)}
            placeholder="Enter Certificate Number Prefix"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Page Break After Certificate */}
        <div className="mb-6">
          <label
            htmlFor="pageBreakOption"
            className="block text-sm font-medium text-gray-700"
          >
            Page Break After Certificate (Custom Layout)
          </label>
          <select
            id="pageBreakOption"
            value={pageBreakOption}
            onChange={(e) => setPageBreakOption(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Auto">Auto</option>
          </select>
        </div>

        {/* Update Settings Button */}
        <button
          onClick={handleUpdateSettings}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Update Settings
        </button>
      </div>
    </div>
  );
};

export default CertificateSettings;
