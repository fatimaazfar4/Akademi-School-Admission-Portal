import React from 'react';

const AddTeacher = () => {
  return (
    <div className="min-h-screen bg-[#f5f7ff] p-6 font-sans">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold text-[#384078] mb-6">Add New Teacher</h1>

      {/* Personal Details */}
      <div className="bg-white shadow-md rounded-lg mt-6 mb-10">
        <div className="bg-[#4d44b5] text-white px-6 py-3 rounded-t-lg font-semibold">
          Personal Details
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">First Name *</label>
            <input
              type="text"
              placeholder="Maria"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Last Name *</label>
            <input
              type="text"
              placeholder="Historia"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Email *</label>
            <input
              type="email"
              placeholder="historia@gmail.com"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Phone *</label>
            <input
              type="text"
              placeholder="+1234567890"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[50%] flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Address *</label>
              <textarea

                placeholder="Enter address here..."
                className="h-32 resize-none border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              ></textarea>
            </div>
            <div className="flex flex-col items-start justify-end">
              <label className="text-[#384078] font-bold mb-1">Photo *</label>
              <div className="w-32 aspect-square border border-dashed border-[#b9b2c3] text-[#b9b2c3] rounded-lg flex items-center justify-center text-sm">
                Upload here..
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Date of Birth *</label>
            <input
              type="text"
              placeholder="12 Jan 1985"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Place of Birth *</label>
            <input
              type="text"
              placeholder="Jakarta, Indonesia"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white shadow-md rounded-lg mt-10 mb-10">
        <div className="bg-[#4d44b5] text-white px-6 py-3 rounded-t-lg font-semibold">
          Education
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">University *</label>
            <input
              type="text"
              placeholder="University Academi Historia"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Degree *</label>
            <input
              type="text"
              placeholder="History Major"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:col-span-2">
            <div className="flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Start Date *</label>
              <input
                type="text"
                placeholder="2013"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#384078] font-bold mb-1">End Date *</label>
              <input
                type="text"
                placeholder="2017"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#384078] font-bold mb-1">City *</label>
            <input
              type="text"
              placeholder="Yogya, Indonesia"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 rounded-full border border-[#4d44b5] text-[#4d44b5] font-semibold">
          Save as Draft
        </button>
        <button className="px-4 py-2 rounded-full bg-[#4d44b5] text-white font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTeacher;
