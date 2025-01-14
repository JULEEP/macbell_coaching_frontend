import React, { useState } from "react";
import axios from "axios"; // For making API requests
import Sidebar from "./Sidebar";

const Setting = () => {
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const [schoolImage, setSchoolImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
    }
  };

  const handleSchoolImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSchoolImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
  
    // Append form data (school details)
    formData.append("schoolName", schoolName);
    formData.append("address", address);
    formData.append("contact", contact);
    formData.append("email", email); // Append email
    formData.append("description", description); // Append description
  
    // Append image files (if available)
    if (logo) {
      formData.append("logo", logo);
    }
    if (schoolImage) {
      formData.append("schoolImage", schoolImage); // Append school image
    }
  
    try {
      const response = await axios.post(
        "https://school-backend-1-2xki.onrender.com/api/admin/settings", // Backend URL
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSuccessMessage("School details updated successfully!");
      setErrorMessage("");
  
      // Clear form fields after successful submission
      setSchoolName("");
      setAddress("");
      setContact("");
      setEmail("");
      setDescription("");
      setLogo(null);
      setSchoolImage(null);
  
    } catch (error) {
      console.error("Error updating school details:", error);
      setErrorMessage("Failed to update school details.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 w-full px-5">
        <div className="bg-white p-8 ml-40 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Coaching Details</h2>

          {/* Success/Error Message */}
          {successMessage && (
            <div className="mb-4 text-center text-green-600">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-center text-red-600">{errorMessage}</div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* School Name */}
              <div>
                <label className="block text-gray-600">Coaching Name</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-600">Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              {/* Contact */}
              <div>
                <label className="block text-gray-600">Contact</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-600">Coaching Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              {/* Logo Image Upload */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <label className="block text-gray-600">Upload Logo</label>
                <input
                  type="file"
                  onChange={handleLogoChange}
                  className="w-full mt-2 border-2 border-dashed border-gray-300 p-6 text-center rounded-md cursor-pointer"
                  accept="image/*"
                />
                {logo && (
                  <div className="mt-4 text-center">
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="Logo"
                      className="w-32 h-32 object-cover rounded-full mx-auto"
                    />
                  </div>
                )}
              </div>

              {/* School Image Upload */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <label className="block text-gray-600">Upload Coaching Image</label>
                <input
                  type="file"
                  onChange={handleSchoolImageChange}
                  className="w-full mt-2 border-2 border-dashed border-gray-300 p-6 text-center rounded-md cursor-pointer"
                  accept="image/*"
                />
                {schoolImage && (
                  <div className="mt-4 text-center">
                    <img
                      src={URL.createObjectURL(schoolImage)}
                      alt="School Image"
                      className="w-32 h-32 object-cover rounded-md mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-purple-600 text-white rounded-md focus:outline-none ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
                }`}
              >
                {loading ? "Updating..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
