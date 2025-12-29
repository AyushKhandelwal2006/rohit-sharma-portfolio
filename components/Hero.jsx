"use client";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <video
        className="hero-video"
        src="/rohit.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Rohit Sharma</h1>
        <p>Hitman of Indian Cricket</p>
      </div>
    </section>
  );
}
