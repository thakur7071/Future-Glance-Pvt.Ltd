import React, { useState, useEffect } from 'react';
import { ReviewImg, ReviewImg2 } from '../../Assets';

const reviews = [
  {
    img: ReviewImg,
    text: '“Future Glance delivered exactly what we were hoping for—on time and with superb quality.”',
    name: 'Riya Sharma, Noida',
  },
  {
    img: ReviewImg2,
    text: '“Excellent project execution and great communication throughout. Highly recommend!”',
    name: 'Ankit Verma, Gurugram',
  },
];

function Review() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* Left Side - Single Review */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-2xl font-semibold text-[#33277B]">What People Say</h2>

          <div className="flex items-start gap-4">
            <img
              src={reviews[current].img}
              alt="Reviewer"
              className="w-16 h-16 rounded-full object-cover shadow"
            />
            <div>
              <p className="text-gray-700 mb-1">{reviews[current].text}</p>
              <span className="text-sm text-gray-500">— {reviews[current].name}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-[#33277B]' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Side - Download Section */}
        <div className="w-full md:w-1/3 bg-[#33277B] text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-3">Download Our Brochure</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Learn more about our services, team, and past projects in our digital brochure.
          </p>
          <button className="bg-white text-[#33277B] px-6 py-2 rounded font-medium hover:bg-gray-100 transition duration-300">
            Download PDF
          </button>
        </div>

      </div>
    </div>
  );
}

export default Review;
