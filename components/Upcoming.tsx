'use client';

import { useEffect, useRef, useState } from "react";
import EventCard from "./ui/EventCard";

const activities = [
  {
    title: "Tech Conference 2024",
    description: "A conference showcasing the latest in tech and innovation.",
    date: "January 20, 2024",
    time: "10:00 AM",
    venue: "Tech Auditorium, City Center",
    image: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    registrationLink: "https://example.com/register-tech-conference",
  },
  {
    title: "T-Shirt Distribution Drive",
    description: "Get your exclusive event t-shirts!",
    date: "January 25, 2024",
    time: "2:00 PM",
    venue: "Community Hall, Block A",
    image: "https://example.com/tshirt-distribution.jpg", // Replace with actual image
  },
  {
    title: "Hackathon 2024",
    description: "Join us for an exciting weekend of coding and collaboration.",
    date: "February 15, 2024",
    time: "9:00 AM",
    venue: "Innovation Hub, Downtown",
    image: "https://example.com/hackathon.jpg", // Replace with actual image
    registrationLink: "https://example.com/register-hackathon",
  },
];

export function Upcoming() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = direction === "left" ? -800 : 800; // Scroll amount in pixels
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const checkScrollPosition = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setIsLeftDisabled(scrollLeft === 0);
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
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-4xl font-bold text-white mb-4">Upcoming Activities</p>
        <p className="text-neutral-400 text-lg">
          Stay up to date with our upcoming events and activities.
        </p>
      </div>

      {/* Scrollable Container */}
      <div ref={containerRef} className="flex overflow-x-hidden space-x-6 py-4">
        {activities.map((activity, index) => (
          <EventCard
            key={index}
            title={activity.title}
            description={activity.description}
            date={activity.date}
            time={activity.time}
            venue={activity.venue}
            image={activity.image}
            registrationLink={activity.registrationLink}
          />
        ))}
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        disabled={isLeftDisabled}
        className={`absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none ${
          isLeftDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &lt;
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        disabled={isRightDisabled}
        className={`absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none ${
          isRightDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
