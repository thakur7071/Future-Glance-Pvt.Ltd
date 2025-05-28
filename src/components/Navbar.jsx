import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { logo } from "../Assets";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
        setOpenMobileDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    {
      label: "Project",
      submenu: [
        { href: "/project/skyline", label: "Skyline Residency" },
        { href: "/project/green-valley", label: "Green Valley Towers" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/media", label: "Media" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#33277B] p-1 text-white">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-2 md:gap-4 px-4 text-sm md:text-base">
          <span>Support: +91-9876543210</span>
          <Link to="/login">
            <button className="bg-white text-[#33277B] px-3 py-1 rounded hover:bg-gray-200">Login</button>
          </Link>
          <button className="hidden md:inline border border-white px-3 py-1 rounded hover:bg-white hover:text-[#33277B]">Download Brochure</button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b p-2 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="Future Glance Pvt. Ltd" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[180px] object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 font-medium text-black">
            {navLinks.map((link, i) => (
              <div key={i} className="relative" ref={link.submenu ? dropdownRef : null}>
                {link.submenu ? (
                  <>
                    <button onClick={() => setOpenDropdown(!openDropdown)} className="flex items-center gap-2">
                      {link.label}
                      <FaChevronDown className={`${openDropdown ? "rotate-180" : ""} transition`} />
                    </button>
                    {openDropdown && (
                      <div className="absolute top-full mt-2 bg-white shadow rounded w-48">
                        {link.submenu.map((s, j) => (
                          <Link key={j} to={s.href} className="block px-4 py-2 hover:bg-gray-100">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.href}>{link.label}</Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Render only if open */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 transition-transform duration-300 translate-x-0">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-6 font-medium text-lg text-black">
              {navLinks.map((link, i) => (
                <div key={i} ref={link.submenu ? mobileDropdownRef : null}>
                  {link.submenu ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
                        className="flex items-center gap-2"
                      >
                        {link.label}
                        <FaChevronDown className={`${openMobileDropdown ? "rotate-180" : ""} transition`} />
                      </button>
                      {openMobileDropdown && (
                        <div className="ml-6 flex flex-col space-y-1 text-base text-gray-700">
                          {link.submenu.map((s, j) => (
                            <Link key={j} to={s.href} onClick={() => setIsMenuOpen(false)}>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={link.href} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
