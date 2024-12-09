"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Ayush Lenka",
    designation: "Secretary(Music)",
    image: "/ayush.PNG",
  },
  {
    id: 2,
    name: "Omm Prakash Yashwant Panda",
    designation: "Secretary(Theatre)",
    image: "/omm.jpg",
  },
  {
    id: 3,
    name: "Snehasish Acaharya",
    designation: "Nominated Representative",
    image: "/sneha.jpg",
  },
  {
    id: 4,
    name: "Snigdha Mohapatra",
    designation: "Executive Advisory(Dance)",
    image: "/snigdha.jpg",
  },
  {
    id: 5,
    name: "Aniket Singh",
    designation: "Executive Advisory(Music)",
    image: "/aniket.jpg",
  },
  {
    id: 6,
    name: "Puja Kumari",
    designation: "Executive Advisory(Theatre)",
    image: "/puja.jpg",
  },
  {
    id: 7,
    name: "Preeti Pragnya Samantaray",
    designation: "PR/Social Media and Content Lead",
    image: "/preeti.jpg",
  },
  {
    id: 8,
    name: "Umesh Satpathi",
    designation: "Graphics Designer",
    image: "/umesh.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-32 mt-16 text-white text-center">
        CORE MEMBERS
      </h1>

      {/* Members */}
      <div className="flex items-center justify-center gap-0 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}


