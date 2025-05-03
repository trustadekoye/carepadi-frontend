import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C3B8B] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Carepadi Info */}
          <div>
            <Link to="/" className="flex items-center mb-2">
              <p className="text-white font-semibold text-[20px]">CAREPADI</p>
            </Link>
            <p className="text-indigo-200 mb-6">
              Providing quality healthcare solutions at affordable prices for
              over a decade. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Telemedicine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Family Medicine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Chronic Disease Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Preventive Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  Mental Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-indigo-200">
                  123 Healthcare Avenue, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span className="text-indigo-200">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span className="text-indigo-200">contact@mediconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-indigo-200 text-sm mb-4 md:mb-0">
            © {currentYear} CarePadi. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-indigo-200 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-indigo-200 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-indigo-200 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
