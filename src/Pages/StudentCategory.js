import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StudentCategory = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    if (category) {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar /> {/* Sidebar added here */}

    {/* Main Content */}
    <div className="flex-1 p-6 ml-64"> {/* Add ml-64 to shift the content right */}      {/* Left Side: Add Student Category Form */}
      <div className="w-1/3 bg-white p-4 shadow-md rounded">
        <h2 className="mb-4 text-gray-700">Add Student Category</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">
            Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 text-gray-700"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAddCategory}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            Save Category
          </button>
        </div>
      </div>

      {/* Right Side: Student Category List */}
      <div className="w-2/3 bg-white p-4 shadow-md rounded">
        <h2 className="mb-4 text-gray-700">Student Category List</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 text-gray-700"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left text-gray-600">SL</th>
              <th className="border border-gray-300 p-2 text-left text-gray-600">Category</th>
              <th className="border border-gray-300 p-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories
              .filter((cat) =>
                cat.toLowerCase().includes(search.toLowerCase())
              )
              .map((cat, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-gray-700">{index + 1}</td>
                  <td className="border border-gray-300 p-2 text-gray-700">{cat}</td>
                  <td className="border border-gray-300 p-2 text-gray-700">
                    <button
                      onClick={() =>
                        setCategories(categories.filter((_, i) => i !== index))
                      }
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default StudentCategory;
