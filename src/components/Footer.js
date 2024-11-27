import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        © {currentYear} Giacomo Calcara. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
