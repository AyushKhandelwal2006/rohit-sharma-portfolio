"use client";

export default function Gallery() {
  const images = [
    { src: "/images/rohit1.jpg", caption: "World Cup Glory 🏆" },
    { src: "/images/rohit2.jpg", caption: "Captain Rohit 🇮🇳" },
    { src: "/images/rohit3.jpg", caption: "Calm & Composed 😎" },
    { src: "/images/rohit4.jpg", caption: "Hitman in action 💥" },
    { src: "/images/rohit5.jpg", caption: "Match-winning knock 🏏" },
  ];

  return (
    <section className="min-h-screen bg-[#fff7e6] px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black p-3 shadow-lg hover:scale-105 transition"
          >
            <img
              src={img.src}
              alt="Rohit Sharma"
              className="w-full h-64 object-contain bg-white"
            />
            <p className="mt-3 text-center font-bold">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
