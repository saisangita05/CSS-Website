'use client';

import { useRef, useState, useEffect } from "react";
import { GlareCard } from "./ui/GlareCard";

const achievementsData = [
  {
    title: "The greatest trick",
    description: "The greatest trick the devil ever pulled was to convince the world that he didn't exist.",
    image: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D", // Replace with a valid image URL
  },
  {
    title: "Another milestone",
    description: "A significant achievement that deserves recognition.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
  {
    title: "Yet another feat",
    description: "Reaching new heights in our journey.",
    image: "", // Replace with a valid image URL
  },
];

export function Achievement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = direction === "left" ? -800 : 800; // Scroll amount in pixels
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    // Update button states based on scroll position
    setIsLeftDisabled(scrollLeft <= 0);
    setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    checkScrollPosition(); // Initial check

    const handleScroll = () => {
      checkScrollPosition();
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="px-8 pb-20 max-w-[1280px] relative">
      <div className="text-center mb-12">
        <p className="text-4xl font-bold text-white mb-4">Achievements</p>
        <p className="text-neutral-400 text-lg">
          A showcase of accomplishments and milestones.
        </p>
      </div>

      {/* Achievement container with navigation buttons */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden space-x-6 py-4"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {achievementsData.map((achievement, index) => (
          <GlareCard
            key={index}
            className="flex-shrink-0 w-[320px] relative flex flex-col items-start justify-end py-8 px-6 bg-gray-800 rounded-lg shadow-lg"
          >
            {/* Background Image */}
            <div className="abbsolute h-full w-full">
              <img
                className="h-full w-full absolute inset-0 object-cover z-0"
                src={achievement.image}
                alt={achievement.title}
              />
              <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-20">
              <p className="font-bold text-white text-lg">{achievement.title}</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                {achievement.description}
              </p>
            </div>
          </GlareCard>
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        disabled={isLeftDisabled}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none ${isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        &lt;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        disabled={isRightDisabled}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none ${isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        &gt;
      </button>
    </div>
  );
}
