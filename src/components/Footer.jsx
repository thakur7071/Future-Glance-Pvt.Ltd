import { bgImg } from "../Assets";

function Footer() {
  return (
    <footer
      className="text-white py-10 px-6 bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Future Glance Pvt. Ltd</h2>
          <p className="text-sm text-gray-300">
            Shaping the future of real estate with innovative, sustainable solutions that prioritize community and quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: info@futureglance.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300">Location: New Delhi, India</p>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Future Glance Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
