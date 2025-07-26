import React from 'react';

const AddStudent = () => {
  return (
    <div className="min-h-screen bg-[#f5f7ff] p-6 font-sans">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold text-[#384078] mb-6">Add New Student</h1>

      {/* Student Details */}
      <div className="bg-white shadow-md rounded-lg mt-6 mb-10">
        <div className="bg-[#4d44b5] text-white px-6 py-3 rounded-t-lg font-semibold">
          Student Details
        </div>

        {/* Form Content */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
  
          <div className="w-full md:w-52 flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Photo *</label>
            <div className="border border-dashed border-[#b9b2c3] text-[#b9b2c3] rounded-lg flex items-center justify-center aspect-square">
              Upload Photo
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-[#384078] font-bold mb-1">First Name *</label>
              <input
                type="text"
                placeholder="Samantha"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Last Name *</label>
              <input
                type="text"
                placeholder="William"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Date of Birth *</label>
              <input
                type="text"
                placeholder="24 Februari 1997"
                className="w-full border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>
            <div className="md:col-span-1 flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Place of Birth *</label>
              <input
                type="text"
                placeholder="Jakarta"
                className="w-full border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#384078] font-bold mb-1">Parent Name *</label>
              <input
                type="text"
                placeholder="Mona William"
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

            <div className="flex flex-col md:col-span-2">
              <label className="text-[#384078] font-bold mb-1">Email *</label>
              <input
                type="email"
                placeholder="william@gmail.com"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-[#384078] font-bold mb-1">Address *</label>
              <textarea
                placeholder="Enter address here..."
                rows="3"
                className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Details */}
      <div className="bg-white shadow-md rounded-lg mt-10 mb-10">
        <div className="bg-[#4d44b5] text-white px-6 py-3 rounded-t-lg font-semibold">
          Parent Details
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">First Name *</label>
            <input
              type="text"
              placeholder="Mana"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Last Name *</label>
            <input
              type="text"
              placeholder="William"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Email *</label>
            <input
              type="email"
              placeholder="mana@gmail.com"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#384078] font-bold mb-1">Phone *</label>
            <input
              type="text"
              placeholder="+9876543210"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#384078] font-bold mb-1">Address *</label>
            <textarea
              placeholder="Enter address here..."
              rows="3"
              className="border border-[#b9b2c3] text-[#384078] placeholder-[#b9b2c3] rounded px-3 py-2"
            ></textarea>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[#384078] font-bold mb-1 mb-2">Payments *</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-[#384078]">
                <input type="radio" name="payment" value="cash" />
                Cash
              </label>
              <label className="flex items-center gap-2 text-[#384078]">
                <input type="radio" name="payment" value="debit" />
                Debit
              </label>
            </div>
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

export default AddStudent;
