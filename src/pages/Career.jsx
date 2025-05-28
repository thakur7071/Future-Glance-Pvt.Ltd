import React from 'react';
import { careerbanner, HomepageImg2, jobopening } from '../Assets'; // Replace with your actual image path

function Career() {
  return (
    <div className="space-y-10">

      {/* Top Banner */}
      <div className="w-full overflow-hidden">
        <img
          src={careerbanner}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Work Culture */}
      <section className="bg-white py-5 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#33277B] mb-6">Our Work Culture</h2>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            At Future Glance Pvt. Ltd, we foster a culture built on collaboration, innovation, and respect.
            Our team members are empowered to grow, contribute ideas, and be part of something meaningful.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            With a focus on transparent communication, work-life balance, and continuous improvement, 
            we ensure that every individual feels valued and supported throughout their journey with us.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#33277B] mb-4">Current Openings</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Join our growing team at Future Glance Pvt. Ltd. We’re looking for passionate and talented individuals
              to help shape the future of our organization.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-lg">
              <li>Software Developer</li>
              <li>Marketing Executive</li>
              <li>HR Manager</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={jobopening}
              alt="Current Openings"
              className="w-full max-h-96 md:max-h-[28rem] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Apply Online */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#33277B] mb-6 text-center">Apply Online</h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm md:text-base">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#33277B]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm md:text-base">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#33277B]"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm md:text-base">Contact Number</label>
              <input
                type="tel"
                placeholder="e.g. +91-9876543210"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#33277B]"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm md:text-base">Upload Resume</label>
              <input
                type="file"
                className="w-full border border-gray-300 px-4 py-2 rounded bg-white"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm md:text-base">Comments</label>
              <textarea
                rows="4"
                placeholder="Write something..."
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#33277B]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#33277B] text-white px-6 py-2 rounded hover:bg-[#2a2065] transition duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Career;
