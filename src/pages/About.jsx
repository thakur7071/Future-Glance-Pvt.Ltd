import React from "react";
import { AboutPageImg, AboutBanner } from "../Assets";
import { FaBullseye, FaEye } from "react-icons/fa"; // React Icons

function About() {
  return (
    <>
      {/* Image Banner */}
      <div className=" lg:h-[22rem] overflow-hidden">
        <img
          src={AboutBanner}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-8 mb-[-20px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutPageImg}
            alt="About us"
            className="w-full max-w-[90%] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: Heading + Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#33277B]">
            Welcome to Future Glance Pvt. Ltd.
          </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
  We are a forward-thinking company dedicated to shaping the future
  through innovation and commitment. Our team of passionate
  professionals works tirelessly to bring creative ideas to life,
  ensuring customer satisfaction and technological excellence. At
  Future Glance, we value integrity, collaboration, and growth. Our
  mission is to build a sustainable future where technology bridges
  the gap between ideas and impact.  
  We believe in nurturing long-term partnerships with our clients by delivering consistent value.  
  Together, we envision a world where innovation drives meaningful change.
</p>

        </div>
      </div>

      {/* Mission & Vision Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#33277B] text-center mt-16 mb-8">
        Mission & Vision
      </h1>

      {/* Mission & Vision Cards */}
      <div className="px-4 sm:px-6 md:px-20 pt-5 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black/5">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-white via-white to-[#f3f4f6] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-[#33277B]/60">
          <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#33277B] mb-3">
            <FaBullseye className="w-6 h-6 text-[#33277B]" />
            Our Mission
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our mission is to empower businesses and individuals by providing
            forward-thinking solutions that embrace technology, sustainability,
            and excellence. We aim to be pioneers in delivering reliable
            services that create lasting value for our clients and the
            communities we serve.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-br from-white via-white to-[#f3f4f6] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-[#33277B]/60">
          <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#33277B] mb-3">
            <FaEye className="w-6 h-6 text-[#33277B]" />
            Our Vision
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our vision is to become a globally recognized brand synonymous with
            innovation and integrity. We envision a future where our work
            inspires progress, fosters opportunity, and contributes to a
            smarter, more connected world for generations to come.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
