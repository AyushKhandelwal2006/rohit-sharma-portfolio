"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/rohit1.jpg", caption: "Match-winning knock 🏏" },
  { src: "/images/rohit2.png", caption: "Captain Rohit 🇮🇳" },
  { src: "/images/rohit3.jpg", caption: "The Hitman 🔥" },
  { src: "/images/rohit4.png", caption: "Pull shot king 👑" },
  { src: "/images/rohit5.png", caption: "Mumbai Indians Legend 💙" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <section className="min-h-screen bg-[#fff7e6] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Gallery</h1>

      {/* PHONE FRAME */}
      <div className="w-[280px] h-[520px] bg-black rounded-[40px] p-3 shadow-xl">
        <div className="bg-white w-full h-full rounded-[28px] flex flex-col items-center justify-center overflow-hidden">
          
          <Image
            src={images[index].src}
            alt="Rohit Sharma"
            width={220}
            height={300}
            className="object-cover rounded-xl"
          />

          <p className="mt-4 font-semibold text-center">
            {images[index].caption}
          </p>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-4">
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="px-4 py-2 bg-yellow-400 border-2 border-black"
        >
          ◀ Prev
        </button>

        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="px-4 py-2 bg-pink-400 border-2 border-black"
        >
          Next ▶
        </button>
      </div>
    </section>
  );
}
