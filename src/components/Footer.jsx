import React from "react";

const Footer = () => (
  <footer id="contact" className="w-full bg-black py-20 mt-16">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-3">
      <p className="text-white text-sm md:text-base font-light">
        &copy; {new Date().getFullYear()} T-Works. All rights reserved.
      </p>
      <p className="text-white text-sm md:text-base font-light">
        Contact:{" "}
        <a
          href="mailto:info@tworks.in"
          className="underline hover:text-red-400 transition"
        >
          info@tworks.in
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
