import React from 'react';
import {
  media1, media2, media3, media4,
  media5, media6, media7, media8,
  media9, media10, media11, media12,
  mediabanner
} from '../Assets';

const images = [
  media1, media2, media3, media4,
  media5, media6, media7, media8,
  media9, media10, media11, media12,
];

function Media() {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden">
        <img
          src={mediabanner}
          alt="Media Banner"
          className="w-full"
        />
      </div>

      {/* Media Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden w-full h-[250px] flex items-center justify-center border border-[#1f1b4d]"
          >
            <img
              src={img}
              alt={`Media ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Media;
