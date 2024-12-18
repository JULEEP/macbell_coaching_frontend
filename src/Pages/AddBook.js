import React from "react";

const AddBook = () => {
  return (
    <div className="p-6 shadow-lg bg-white rounded-lg space-y-6">
      {/* Title */}
      <h1 className="text-xl text-gray-700">Add Book</h1>

      {/* Form Container */}
      <div className="p-6 bg-gray-100 rounded shadow">
        <form>
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Book Title */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Book Title *
              </label>
              <input
                type="text"
                placeholder="Enter Book Title"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Book Categories */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Book Categories *
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Category</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Subject *</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select Subject</option>
                <option>Math</option>
                <option>Science</option>
                <option>Literature</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Book No */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Book No</label>
              <input
                type="text"
                placeholder="Enter Book No"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* ISBN No */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">ISBN No</label>
              <input
                type="text"
                placeholder="Enter ISBN No"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Publisher Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Publisher Name
              </label>
              <input
                type="text"
                placeholder="Enter Publisher Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Author Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Author Name
              </label>
              <input
                type="text"
                placeholder="Enter Author Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Rack Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Rack Number
              </label>
              <input
                type="text"
                placeholder="Enter Rack Number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Quantity</label>
              <input
                type="number"
                placeholder="Enter Quantity"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Book Price */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Book Price
              </label>
              <input
                type="number"
                placeholder="Enter Book Price"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter Description"
                className="w-full p-2 border border-gray-300 rounded h-20"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
            >
              Save Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
