import React, { useState } from "react";

const AddFeesInvoice = () => {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    createDate: "",
    dueDate: "",
    paymentStatus: "",
  });

  const [feesTypeList, setFeesTypeList] = useState([
    {
      id: 1,
      feesType: "Tuition Fee",
      amount: 5000,
      waiver: 500,
      subTotal: 4500,
      paidAmount: 4500,
    },
    {
      id: 2,
      feesType: "Lab Fee",
      amount: 1000,
      waiver: 0,
      subTotal: 1000,
      paidAmount: 1000,
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Handle save logic (e.g., send form data to API or server)
    console.log("Saved Fees Invoice:", formData);
  };

  return (
    <div className="p-6 space-y-6 shadow-lg bg-white rounded-lg">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Add Fees Invoice</h1>

      <div className="flex gap-6">
        {/* Left Form */}
        <div className="w-1/3 bg-gray-50 p-4 rounded shadow-sm">
          <h2 className="text-lg text-gray-600 mb-4">Add Fees Invoice</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Invoice-
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Class *</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Class</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Section *</label>
              <select
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Create Date *</label>
              <input
                type="date"
                name="createDate"
                value={formData.createDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Due Date *</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Payment Status *</label>
              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>

            <div>
              <button
                onClick={handleSave}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Fees Type List */}
        <div className="w-2/3 bg-gray-50 p-4 rounded shadow-sm">
          <h2 className="text-lg text-gray-600 mb-4">Fees Type List</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">SL</th>
                  <th className="px-4 py-2 text-left">Fees Type</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Waiver</th>
                  <th className="px-4 py-2 text-left">Sub Total</th>
                  <th className="px-4 py-2 text-left">Paid Amount</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {feesTypeList.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Data Available In Table
                    </td>
                  </tr>
                ) : (
                  feesTypeList.map((fee, index) => (
                    <tr key={fee.id}>
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{fee.feesType}</td>
                      <td className="px-4 py-2">{fee.amount}</td>
                      <td className="px-4 py-2">{fee.waiver}</td>
                      <td className="px-4 py-2">{fee.subTotal}</td>
                      <td className="px-4 py-2">{fee.paidAmount}</td>
                      <td className="px-4 py-2">
                        <button className="text-purple-600 hover:text-purple-800">Edit</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeesInvoice;
