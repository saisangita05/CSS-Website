"use client";
import Image from "next/image";
import { CSSMembers } from "@/components/CSSMembers";
import { Navbar } from "@/components/ui/Navbar";


export default function CSSPage() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5 gap-10">
      <Navbar />
      {/* Club Summary and Logo Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        {/* Club Logo with Animation */}
        <div className="lg:w-1/2 flex justify-center mt-40 relative">
          {/* Background Bubble GIF */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/gif/bubble.gif"
              alt="Bubble Animation"
              width={400}
              height={400}
              className="object-cover animate-bubble"
            />
          </div>
          {/* CSS Logo */}
          <Image
            src="/CSS BG remved.png"
            alt="CSS Logo"
            width={400}
            height={400}
            className="animate-logoAppearance object-contain relative z-10"
          />
        </div>

        {/* Club Summary */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mt-36 text-fuchsia-400">Cultural Society of Silicon</h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
            The Cultural Society of Silicon (CSS) is a vibrant community of
            creativity and talent. Our mission is to celebrate art, culture, and
            diversity, bringing together students who are passionate about music,
            dance, drama, and more. Join us to experience the magic of cultural
            expression and collaboration!
          </p>
        </div>
      </div>

      {/* CSS Members Section */}
      <CSSMembers />

      {/* Custom Tailwind Styles */}
      <style jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer utilities {
          .animate-logoAppearance {
            animation: logoAppearance 1.5s ease-in-out forwards;
          }

          .animate-bubble {
            animation: bubbleFade 2s ease-in-out forwards;
          }

          @keyframes logoAppearance {
            0% {
              transform: scale(0.5);
              filter: blur(10px);
              opacity: 0.5;
            }
            50% {
              filter: blur(5px);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              filter: blur(0);
              opacity: 1;
            }
          }

          @keyframes bubbleFade {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      `}</style>
    </main>
  );
}
