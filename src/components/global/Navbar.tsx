import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/images/carepadi-logo.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigation links
  const navItems = [
    { label: "Pricing", href: "/pricing" },
    {
      label: "What we do",
      href: "/whatwedo",
      dropdown: [
        { label: "Services", href: "/services" },
        { label: "Our Doctors", href: "/doctors" },
        { label: "Specialties", href: "/specialties" },
      ],
    },
    { label: "Book an Appointment", href: "/bookappointment" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4F1]/95 backdrop-blur-sm py-2 shadow-sm"
          : "bg-[#F7F4F1] py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 z-20"
            onClick={closeAllMenus}
          >
            <motion.p
              className="text-[#2C3B8B] "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={Logo} alt="Carepadi Logo" className="w-32" />
            </motion.p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center">
                    <button
                      className="text-sm font-normal text-[#2C3B8B] hover:text-[#2C3B8B]/80 transition-all duration-300 flex items-center gap-1"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-48 z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2C3B8B]"
                              onClick={closeAllMenus}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-normal text-[#2C3B8B] hover:text-[#2C3B8B]/80 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Login & Signup Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="p-5"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="p-5 bg-[#2C3B8B] hover:bg-[#1F2B6B]"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden z-20 text-[#2C3B8B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>

          {/* Mobile menu overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden"
                onClick={closeAllMenus}
              />
            )}
          </AnimatePresence>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-10 shadow-xl flex flex-col lg:hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 overflow-y-auto flex-1">
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={closeAllMenus}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <div key={item.href} className="py-2">
                        {item.dropdown ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(item.label)}
                              className="flex items-center justify-between w-full text-left text-lg font-medium text-[#2C3B8B]"
                            >
                              {item.label}
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${
                                  activeDropdown === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-2 pl-4 border-l-2 border-gray-200 space-y-2">
                                    {item.dropdown.map((dropdownItem) => (
                                      <Link
                                        key={dropdownItem.href}
                                        to={dropdownItem.href}
                                        className="block py-2 text-[#2C3B8B]/80 hover:text-[#2C3B8B]"
                                        onClick={closeAllMenus}
                                      >
                                        {dropdownItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            className="block text-lg font-medium text-[#2C3B8B]"
                            onClick={closeAllMenus}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile auth buttons */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-center p-5"
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="default"
                    className="w-full justify-center p-5 bg-[#2C3B8B] hover:bg-[#1F2B6B]"
                    onClick={() => {
                      window.location.href = "/signup";
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
