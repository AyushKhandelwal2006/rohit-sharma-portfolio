"use client";

export default function Gallery() {
  const images = [
    { src: "/images/rohit1.jpg", caption: "Match-winning knock 🏏" },
    { src: "/images/rohit2.png", caption: "Captain Rohit 🇮🇳" },
    { src: "/images/rohit3.jpg", caption: "Hitman in action 💥" },
    { src: "/images/rohit4.png", caption: "World Cup Glory 🏆" },
    { src: "/images/rohit5.png", caption: "Calm & Composed 😌" },
  ];

  return (
    <section className="min-h-screen bg-[#fff8e7] px-8 py-16">
      <h1 className="text-4xl font-black text-center mb-12">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black p-4 shadow-lg hover:scale-105 transition"
          >
            <img
              src={img.src}
              alt="Rohit Sharma"
              className="w-full h-64 object-cover"
            />
            <p className="mt-3 font-bold text-center">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
