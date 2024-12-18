import React, { useState } from 'react';

const AddNewStaffPage = () => {
  const [formData, setFormData] = useState({
    staffNo: '',
    role: '',
    department: '',
    designation: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    dateOfJoining: '',
    mobile: '',
    maritalStatus: '',
    emergencyMobile: '',
    drivingLicense: '',
    staffPhoto: null,
    currentAddress: '',
    permanentAddress: '',
    qualifications: '',
    experience: '',
    epfNo: '',
    basicSalary: '',
    contractType: 'Permanent',
    location: '',
    bankAccountName: '',
    accountNo: '',
    bankName: '',
    branchName: '',
    facebookUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
    instagramUrl: '',
    resume: null,
    joiningLetter: null,
    otherDocument: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Add New Staff</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">

        {/* Basic Info Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Basic Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Staff No *</label>
              <input
                type="text"
                name="staffNo"
                value={formData.staffNo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Department *</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Designation *</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Father Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Mother Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Date Of Joining *</label>
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Mobile *</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Marital Status</label>
              <input
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Emergency Mobile</label>
              <input
                type="text"
                name="emergencyMobile"
                value={formData.emergencyMobile}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Driving License</label>
              <input
                type="text"
                name="drivingLicense"
                value={formData.drivingLicense}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Staff Photo</label>
              <input
                type="file"
                name="staffPhoto"
                onChange={handleFileChange}
                accept="image/jpg, image/jpeg, image/png"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <p className="text-sm text-gray-500">JPG, JPEG, PNG are allowed for upload</p>
            </div>
          </div>
        </section>

        {/* Payroll Details Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Payroll Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">EPF NO</label>
              <input
                type="text"
                name="epfNo"
                value={formData.epfNo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Basic Salary *</label>
              <input
                type="text"
                name="basicSalary"
                value={formData.basicSalary}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Contract Type *</label>
              <select
                name="contractType"
                value={formData.contractType}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              >
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </section>

        {/* Bank Info Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Bank Info Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Bank Account Name</label>
              <input
                type="text"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Account No</label>
              <input
                type="text"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Branch Name</label>
              <input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Social Links Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Facebook Url</label>
              <input
                type="url"
                name="facebookUrl"
                value={formData.facebookUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Twitter Url</label>
              <input
                type="url"
                name="twitterUrl"
                value={formData.twitterUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">LinkedIn Url</label>
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Instagram Url</label>
              <input
                type="url"
                name="instagramUrl"
                value={formData.instagramUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </section>

        {/* Document Info Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Document Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Joining Letter</label>
              <input
                type="file"
                name="joiningLetter"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Other Document</label>
              <input
                type="file"
                name="otherDocument"
                onChange={handleFileChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>
        </section>

        {/* Custom Field */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Custom Field</h2>
          <div>
            <input
              type="text"
              name="customField"
              value={formData.customField}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Custom Field"
            />
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Save Staff
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStaffPage;
