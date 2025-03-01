import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      setIsVisible(isAtBottom); // Show the footer when user scrolls to bottom
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full py-4 px-6 bg-gray-900 text-white text-center shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Title and Copyright */}
        <div className="flex flex-col items-start space-y-2">
          <span className="text-2xl font-semibold text-red-600">Medflow</span>
          <span className="text-lg text-blue-500 opacity-80">
            © {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-8">
          <a
            href="#"
            className="text-white text-lg hover:underline hover:text-yellow-400 transition-all"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white text-lg hover:underline hover:text-yellow-400 transition-all"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-white text-lg hover:underline hover:text-yellow-400 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
