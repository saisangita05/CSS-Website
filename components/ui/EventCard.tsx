'use client';

import Tilt from "react-parallax-tilt";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  venue?: string;
  image: string;
  registrationLink?: string;
  registrationText?: string;
}

export default function EventCard({
  title,
  description,
  date,
  time,
  venue,
  image,
  registrationLink,
  registrationText = "Register Here",
}: EventCardProps) {
  return (
    <Tilt
      className="tilt-card"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={400}
      gyroscope={true}
    >
      <div
        className="max-w-56 rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 pt-5 md:w-[450px]"
        style={{
          background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
        }}
      >
        <img src={image} alt={title} className="w-40 h-40 object-cover mx-auto rounded-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm mb-4">{description}</p>
          <div className="text-neutral-300 text-sm mb-2">
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            {venue && (
              <p>
                <strong>Venue:</strong> {venue}
              </p>
            )}
          </div>
          {registrationLink && (
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              {registrationText}
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
}
