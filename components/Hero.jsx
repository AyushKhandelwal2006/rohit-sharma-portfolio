"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelector(".hero-text");
      if (text) {
        text.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden">

      {/* 🎥 CLOUDINARY VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/djryqefyo/video/upload/v1767016134/rohit.mp4_qxje3q.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/rohit.png"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* HERO CONTENT */}
      <div className="hero-text relative z-20 ml-8 md:ml-16 mt-40 bg-white text-black brutal p-6 md:p-10 w-fit animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-black uppercase">
          Rohit Sharma
        </h1>

        <p className="mt-2 font-bold tracking-wide">
          Hitman of Indian Cricket
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-6">
          <Link
            href="/stats"
            className="brutal bg-yellow-400 px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 transition"
          >
            View Stats
          </Link>

          <Link
            href="/career"
            className="brutal bg-pink-500 px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 transition"
          >
            Career
          </Link>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white font-bold">
        ↓ Scroll
      </div>

    </section>
  );
}
