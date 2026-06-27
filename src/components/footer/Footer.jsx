import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h1 className='font-bold text-3xl'><span className='text-[#7c3aed] font-serif'>Z</span>aptro</h1>

            <p className="text-gray-400 leading-7">
              Your trusted online grocery store. Fresh
              products delivered to your doorstep with
              quality and care.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                className="bg-gray-800 p-3 rounded-full hover:bg-[#7c3aed] transition"
              >
                <FaFacebookF />
              </a>

              <a
                className="bg-gray-800 p-3 rounded-full hover:bg-[#7c3aed] transition"
              >
                <FaInstagram />
              </a>

              <a
                className="bg-gray-800 p-3 rounded-full hover:bg-[#7c3aed] transition"
              >
                <FaTwitter />
              </a>

              <a
                className="bg-gray-800 p-3 rounded-full hover:bg-[#7c3aed] transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Shop</Link></li>
                <li><Link to="#">Categories</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Customer Service
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>My Account</li>
                <li> <Link to="/wishlist">Wishlist</Link></li>
                <li>Orders</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Contact Us
              </h3>

              <div className="space-y-4 text-gray-400">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-[#7c3aed] mt-1" />
                  <span>Mumbai, India</span>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt className="text-[#7c3aed] mt-1" />
                  <span>+91 9876543210</span>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="text-[#7c3aed] mt-1" />
                  <span>support@grocify.com</span>
                </div>
              </div>
            </div>
          
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center">
            © 2026 Grocify. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt="Visa"
              className="h-8"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="MasterCard"
              className="h-8"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"
              alt="Paypal"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;