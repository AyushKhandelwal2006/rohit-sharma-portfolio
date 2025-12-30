"use client";

import { useState } from "react";

const images = [
  { src: "/images/rohit1.jpg", caption: "Match-winning knock 🏏" },
  { src: "/images/rohit2.png", caption: "Captain Rohit 🇮🇳" },
  { src: "/images/rohit3.jpg", caption: "Hitman in action 💥" },
  { src: "/images/rohit4.png", caption: "World Cup Glory 🏆" },
  { src: "/images/rohit5.png", caption: "Calm & Composed 😌" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#fff8e7] py-16">
      <h1 className="text-4xl font-black mb-10">Gallery</h1>

      {/* Phone Frame */}
      <div className="w-[280px] h-[520px] bg-white border-[10px] border-black rounded-[40px] shadow-xl flex flex-col items-center justify-between p-4">
        
        {/* Image */}
        <img
          src={images[index].src}
          alt="Rohit Sharma"
          className="w-full h-[380px] object-cover rounded-xl"
        />

        {/* Caption */}
        <p className="font-bold mt-2">
          {images[index].caption}
        </p>

        {/* Controls */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
            className="px-4 py-2 bg-yellow-400 border-4 border-black font-bold"
          >
            ◀
          </button>

          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="px-4 py-2 bg-pink-400 border-4 border-black font-bold"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
