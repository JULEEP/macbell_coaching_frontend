import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const VisitorBook = () => {
  const [formData, setFormData] = useState({
    purpose: "",
    name: "",
    phone: "",
    id: "",
    noOfPersons: "",
    date: "",
    inTime: "",
    outTime: "",
  });

  const [visitorList, setVisitorList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch Visitors on Component Mount
  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const response = await axios.get("https://school-backend-1-2xki.onrender.com/api/admin/get-visits");
      setVisitorList(response.data.visits || []);
    } catch (error) {
      console.error("Error fetching visitors:", error);
      alert("Error fetching visitors. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://school-backend-1-2xki.onrender.com/api/admin/add-visit", {
        purpose: formData.purpose,
        name: formData.name,
        phone: formData.phone,
        id: formData.id,
        no_of_persons: parseInt(formData.noOfPersons, 10),
        date: formData.date,
        in_time: formData.inTime,
        out_time: formData.outTime,
      });

      // Update visitor list with the newly added visitor
      setVisitorList([...visitorList, response.data.visitor]);

      // Reset form after successful submission
      setFormData({
        purpose: "",
        name: "",
        phone: "",
        id: "",
        noOfPersons: "",
        date: "",
        inTime: "",
        outTime: "",
      });

      alert("Visitor added successfully!");
    } catch (error) {
      console.error("Error adding visitor:", error);
      alert("Error adding visitor. Please try again.");
    }
  };

  // Pagination Logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVisitors = visitorList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(visitorList.length / itemsPerPage);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 ml-64">
        <h2 className="text-lg text-gray-700 mb-4">Add Visitor</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Purpose", name: "purpose", type: "text", placeholder: "Enter Purpose" },
            { label: "Name", name: "name", type: "text", placeholder: "Enter Name" },
            { label: "Phone", name: "phone", type: "text", placeholder: "Enter Phone" },
            { label: "ID", name: "id", type: "text", placeholder: "Enter ID" },
            { label: "No. of Persons", name: "noOfPersons", type: "number", placeholder: "Enter No. of Persons" },
            { label: "Date", name: "date", type: "date" },
            { label: "In Time", name: "inTime", type: "time" },
            { label: "Out Time", name: "outTime", type: "time" },
          ].map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name} className="text-sm text-gray-600">
                {field.label} {["purpose", "name", "id", "noOfPersons", "date", "inTime", "outTime"].includes(field.name) && "*"}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                required={["purpose", "name", "id", "noOfPersons", "date", "inTime", "outTime"].includes(field.name)}
              />
            </div>
          ))}

          <div className="col-span-4">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Save
            </button>
          </div>
        </form>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg text-gray-700 mb-4">Visitor List</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-gray-600">SL</th>
                <th className="px-4 py-2 text-gray-600">Purpose</th>
                <th className="px-4 py-2 text-gray-600">Name</th>
                <th className="px-4 py-2 text-gray-600">Phone</th>
                <th className="px-4 py-2 text-gray-600">Date</th>
                <th className="px-4 py-2 text-gray-600">In Time</th>
                <th className="px-4 py-2 text-gray-600">Out Time</th>
              </tr>
            </thead>
            <tbody>
            {currentVisitors.length > 0 ? (
              currentVisitors.map((visitor, index) => (
                <tr key={visitor._id} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-gray-600">{startIndex + index + 1}</td>
                  <td className="px-4 py-2 text-gray-600">{visitor?.purpose || "N/A"}</td>
                  <td className="px-4 py-2 text-gray-600">{visitor?.name || "N/A"}</td>
                  <td className="px-4 py-2 text-gray-600">{visitor?.phone || "N/A"}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {visitor?.date ? new Date(visitor.date).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{visitor?.in_time || "N/A"}</td>
                  <td className="px-4 py-2 text-gray-600">{visitor?.out_time || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center text-gray-600">
                  No visitors found
                </td>
              </tr>
            )}
          </tbody>          
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 mx-1 border rounded-md ${currentPage === i + 1 ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorBook;
