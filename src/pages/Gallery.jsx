import React from 'react'
import { gallerybanner } from '../Assets'

function Gallery() {
  return (
  <>
  
 {/* Banner */}
      <div className="overflow-hidden">
        <img
          src={gallerybanner}
          alt="Contact Banner"
          className="object-cover "
        />
work in progress
      </div>

  </>
  )
}

export default Gallery
