"use client";
import { useState } from "react";

export default function Timeline() {
  const [activeYear, setActiveYear] = useState("1999");

  const events = [
    {
      year: "1999",
      text: "Joined a cricket camp with his uncle's money, where his talent was noticed by coach Dinesh Lad.",
      image: "/images/rohit1999.png",
    },
    {
      year: "2007",
      text: "Played in the inaugural ICC T20 World Cup and was part of the winning Indian team.",
      image: "/images/rohit2007.png",
    },
    {
      year: "2011",
      text: "Joined Mumbai Indians and began his legendary IPL journey.",
      image: "/images/rohit2011.png",
    },
    {
      year: "2013",
      text: "Became the first Indian captain to lead teams into all ICC finals.",
      image: "/images/rohit2013.png",
    },
    {
      year: "2019",
      text: "Scored five centuries in a single ODI World Cup.",
      image: "/images/rohit2019.png",
    },
    {
      year: "2024",
      text: "Led India to victory in the ICC T20 World Cup.",
      image: "/images/rohit2024.png",
    },
    {
      year: "2025",
      text: "Announced retirement from T20I and Test cricket.",
      image: "/images/rohit2025.png",
    },
  ];

  const activeEvent = events.find(e => e.year === activeYear);

  return (
    <section className="min-h-screen bg-[#f8f9fc] px-8 py-16">
      <h1 className="text-4xl font-black text-center mb-14">Career Timeline</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT – TIMELINE */}
        <div className="relative border-l-4 border-black pl-6 space-y-10">
          {events.map((event) => (
            <div
              key={event.year}
              onClick={() => setActiveYear(event.year)}
              className="cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-black rounded-full mt-2"></div>
                <div>
                  <h2 className="text-2xl font-extrabold">
                    {event.year}
                  </h2>
                  <p className="text-gray-700 mt-1 group-hover:text-black">
                    {event.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – IMAGE */}
        <div className="bg-white border-4 border-black p-4 shadow-xl">
          <img
            src={activeEvent.image}
            alt={activeEvent.year}
            className="w-full h-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
