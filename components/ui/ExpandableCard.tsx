"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-60 p-6">
      {/* Dimmed Background */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] w-full">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-15"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
  layoutId={`card-${active.title}-${id}`}
  ref={ref}
  className="w-[90vw] max-w-[500px] h-[90vh] max-h-[500px] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg"
>
  <motion.div
    layoutId={`image-${active.title}-${id}`} // Layout consistency
    className="relative flex items-center justify-center w-full h-[200px]" // Centered container
  >
    <Image
      priority
      width={200} // Adjust for full-circle aspect
      height={200} // Ensure height equals width
      src={active.src || "/default-placeholder.png"}
      alt={active.title}
      className="rounded-full border-8 border-white object-cover object-center"
    />
  </motion.div>
  <div className="flex flex-col p-4 overflow-auto">
    <div className="flex justify-between items-start mb-4">
      <motion.h3
        layoutId={`title-${active.title}-${id}`}
        className="font-bold text-lg text-neutral-700 dark:text-neutral-200"
      >
        {active.title}
      </motion.h3>
      <motion.p
        layoutId={`description-${active.description}-${id}`}
        className="text-sm text-neutral-600 dark:text-neutral-400"
      >
        {active.description}
      </motion.p>
    </div>

    <motion.div
      layout
      className="text-sm text-neutral-600 dark:text-neutral-400 h-full overflow-y-auto"
    >
      {typeof active.content === "function"
        ? active.content()
        : active.content}
    </motion.div>
  </div>
</motion.div>

          </div>
        ) : null}
      </AnimatePresence>

      {/* Main Card */}
      <motion.div
        layoutId={`card-${cards[0].title}-${id}`}
        onClick={() => setActive(cards[0])}
        className="flex flex-col items-center p-6 rounded-2xl overflow-hidden cursor-pointer bg-black-100 shadow-lg hover:shadow-xl border border-neutral-200 mb-8"
        style={{ width: "300px", height: "400px" }}
      >
        <div className="relative mb-4">
          <Image
            width={200}
            height={200}
            src={cards[0].src || "/default-placeholder.png"}
            alt={cards[0].title}
            className="w-40 h-40 object-cover rounded-full border-8 border-white"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-purple">
            {cards[0].title}
          </h3>
          <p className="text-sm text-purple-600 mb-4">{cards[0].description}</p>
          <button className="px-6 py-2 text-sm rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-700">
            {cards[0].ctaText}
          </button>
        </div>
      </motion.div>

      {/* Three Cards Below */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.slice(1).map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col items-center p-6 rounded-2xl overflow-hidden cursor-pointer bg-black-100 shadow-lg hover:shadow-xl border border-neutral-200"
            style={{ width: "300px", height: "400px" }}
          >
            <div className="relative mb-4">
              <Image
                width={200}
                height={200}
                src={card.src || "/default-placeholder.png"}
                alt={card.title}
                className="w-40 h-40 object-cover rounded-full border-8 border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-purple">
                {card.title}
              </h3>
              <p className="text-sm text-purple-600 mb-4">
                {card.description}
              </p>
              <button className="px-6 py-2 text-sm rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-700">
                {card.ctaText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "F.I.C. CSS",
    title: "Ananya Roy Choudhury",
    src: "/ananaya.png",
    ctaText: "View",
    content: () => <p>As the Faculty In-Charge (F.I.C.) of the 
      Cultural Society of Silicon, Ananya plays a pivotal role in guiding
       and mentoring the team. With a keen eye for detail and a passion for 
       the arts, she ensures the society thrives in its mission of fostering 
       cultural engagement. Her leadership is marked by creativity, dedication, 
       and an inspiring vision, making her a cornerstone of the society's success.</p>,
  },
  {
    description: "Co-ordinator",
    title: "Lalit",
    src: "/lalit.png",
    ctaText: "View",
    content: () => <p>A committed and enthusiastic member, Lalit is 
      instrumental in coordinating cultural events and ensuring their seamless 
      execution. His proactive approach and ability to manage diverse responsibilities
       make him a reliable team player. Lalit’s contributions are vital in creating
       memorable experiences for the society's initiatives..</p>,
  },
  {
    description: "Co-ordinator",
    title: "Bivas Ranjan Parida",
    src: "/bivas.png",
    ctaText: "View",
    content: () => <p>Bivas brings energy and innovation to the Cultural Society of Silicon.
       Known for his dynamic personality, he excels at brainstorming creative ideas and implementing them effectively.
        His dedication to the society is reflected in his active involvement in organizing and participating in various cultural activities, 
      adding value to every event he contributes to.</p>,
  },
  {
    description: "Co-ordinator",
    title: "Amiya Bhusan Sahoo",
    src: "/amiya.png",
    ctaText: "View",
    content: () => <p>Amiya is a passionate member whose innovative thinking and 
      organizational skills shine through in every project. With a strong commitment to promoting cultural activities,
       Amiya plays a significant role in ensuring the society's events are impactful and engaging. His collaborative spirit and 
       creative
       contributions are assets to the team.</p>,
  },
];
