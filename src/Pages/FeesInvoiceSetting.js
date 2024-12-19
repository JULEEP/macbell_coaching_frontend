import React, { useState } from "react";
import Sidebar from "./Sidebar";

const FeesInvoiceSettings = () => {
  const [invoiceType, setInvoiceType] = useState("invoice");

  const handleUpdate = () => {
    console.log("Update triggered with Invoice Type:", invoiceType);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Title */}      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-gray-500 mb-6">
        Fees Invoice Settings
      </h2>

      {/* Invoice Type Section */}
      <div className="p-4 shadow-lg rounded-lg mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Invoice Type
        </label>

        {/* Radio Buttons for Invoice Type */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="invoice"
              name="invoiceType"
              value="invoice"
              checked={invoiceType === "invoice"}
              onChange={() => setInvoiceType("invoice")}
              className="form-radio text-blue-500"
            />
            <label htmlFor="invoice" className="ml-2 text-sm text-gray-700">
              Invoice
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="slip"
              name="invoiceType"
              value="slip"
              checked={invoiceType === "slip"}
              onChange={() => setInvoiceType("slip")}
              className="form-radio text-blue-500"
            />
            <label htmlFor="slip" className="ml-2 text-sm text-gray-700">
              Slip
            </label>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="text-center mb-6">
        <button
          className="bg-purple-600 text-white p-2 px-6 rounded-lg shadow-md hover:bg-purple-700"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
    </div>
  );
};

export default FeesInvoiceSettings;
