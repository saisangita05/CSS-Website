'use client';

import React from "react";
import styled, { keyframes } from "styled-components";
import MagicButton from "./ui/MagicButton";

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
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => {
  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    alert(`Link copied to clipboard: ${url}`);
  };

  return (
    <div className="bg-transparent text-white flex flex-col gap-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Left Section - CSS Logo */}
        <a className="flex items-center" href="/">
          <img
            src="/image/css.png"
            alt="CSS Logo"
            className="w-40 h-10 sm:h-40"
          />
        </a>

        <a className="w-2/3 flex justify-center items-center" href="/contact">
          <MagicButton title="Contact Us" />
        </a>

        {/* Right Section - Silicon Logo */}
        <a className="flex items-center" href="https://silicon.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/image/silicon.png"
            alt="Silicon Logo"
            className="w-40 h-10 sm:h-40 "
          />
        </a>
      </div>

      {/* Footer Text */}
      <FooterContainer>
        <FooterText>© 2024 Silicon University, Bhubaneswar. All rights reserved.</FooterText>
      </FooterContainer>
    </div>
  );
};

export default Footer;
