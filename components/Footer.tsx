'use client';

import React from "react";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(270deg, #02a0a6, #f73b83);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 8s ease infinite;
  color: white;
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <>
      <div>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section - CSS Logo */}
        <div className="flex items-center space-x-2">
          <img
            src=""
            alt="CSS Logo"
            className="w-10 h-10"
          />
          <p className="text-sm text-gray-300">Powered by CSS</p>
        </div>

        {/* Center Section - Social Media Links & Contact Button */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500" aria-label="Facebook">
              <p>Facebook</p>
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Twitter">
            <p>Twitter</p>
            </a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram">
            <p>Instagram</p>
            </a>
            <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">
            <p>LinkedIn</p>
            </a>
          </div>
          <button
            onClick={() => window.location.href = "/contact-us"} // Replace with your Contact Us page URL
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Right Section - Silicon Logo */}
        <div className="flex items-center">
          <img
            src=""
            alt="Silicon Logo"
            className="w-10 h-10"
          />
        </div>
      </div>
      </div>
      <FooterContainer>
        <FooterText>© 2024 Silicon University, Bhubaneswar. All rights reserved.</FooterText>
      </FooterContainer>
    </>
  );
};

export default Footer;
