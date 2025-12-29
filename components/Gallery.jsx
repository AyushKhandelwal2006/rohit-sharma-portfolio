"use client";

const images = [
  { src: "/images/rohit1.jpg", caption: "Match-winning knock 🏏" },
  { src: "/images/rohit2.png", caption: "Captain Rohit Sharma 🧢" },
  { src: "/images/rohit3.jpg", caption: "The Hitman in action 🔥" },
  { src: "/images/rohit4.png", caption: "Calm & composed leader 😌" },
  { src: "/images/rohit5.png", caption: "Indian cricket pride 🇮🇳" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] py-20">
      <h2 className="text-4xl font-black mb-10">Gallery</h2>

      {/* PHONE FRAME */}
      <div className="w-[320px] h-[620px] bg-black rounded-[40px] p-4 shadow-2xl border-4 border-black">
        {/* SCREEN */}
        <div className="w-full h-full bg-white rounded-[30px] overflow-x-scroll snap-x snap-mandatory flex no-scrollbar">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full snap-center flex flex-col items-center justify-center p-4"
            >
              <img
                src={img.src}
                alt="Rohit Sharma"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <p className="mt-4 text-center font-semibold">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Swipe left → to view more
      </p>
    </section>
  );
}
