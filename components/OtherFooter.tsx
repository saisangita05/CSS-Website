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
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
`;

const OneMoreFooter: React.FC = () => {
  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    alert(`Link copied to clipboard: ${url}`);
  };

  return (
    <div className="bg-transparent text-white flex flex-col gap-6">
     
      {/* Footer Text */}
      <FooterContainer>
        <FooterText>© 2024 Silicon University, Bhubaneswar. All rights reserved.</FooterText>
      </FooterContainer>
    </div>
  );
};

export default OneMoreFooter;
