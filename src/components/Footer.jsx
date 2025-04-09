import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import bgImage from "../home_assets/43ce3aaf058246c23cc8be771da48566.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="bg-black text-white px-6 py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* 1st Column */}
          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span role="img" aria-label="logo">
                ✈️
              </span>{" "}
              NAME
            </h2>
            <p className="text-sm mb-4">
              Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
              sit egestas enim consectetur donec faucibus...
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> (610) 366-7883
            </p>
            <p className="text-sm mb-4">
              <strong>Address:</strong> 8911 Tanglewood Ave. Capitol Heights, MD
              20743
            </p>
            <div className="flex gap-4 text-lg">
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
              <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* 2nd Column - About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Causes</li>
              <li>Volunteers</li>
              <li>Partners</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* 3rd Column - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>F.A.Q</li>
              <li>News</li>
              <li>Reports</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* 4th Column - Causes */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Causes</h3>
            <div className="grid grid-cols-3 gap-2">
              <img
            src={bgImage}
                alt="Cause 1"
                className="rounded-md w-full h-16 object-cover"
              />
              <img
            src={bgImage}
                alt="Cause 2"
                className="rounded-md w-full h-16 object-cover"
              />
              <img
            src={bgImage}
                alt="Cause 3"
                className="rounded-md w-full h-16 object-cover"
              />
              <img
            src={bgImage}
                alt="Cause 4"
                className="rounded-md w-full h-16 object-cover"
              />
              <img
            src={bgImage}
                alt="Cause 5"
                className="rounded-md w-full h-16 object-cover"
              />
              <img
            src={bgImage}
                alt="Cause 6"
                className="rounded-md w-full h-16 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          © Copyright Charity 2024. Design by Shashank
        </div>
      </div>
    </footer>
  );
};

export default Footer;
