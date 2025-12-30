"use client";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#fff6e5] px-6 py-16">
      <h1 className="text-4xl font-black text-center mb-12">
        Contact Rohit Sharma
      </h1>

      <div className="max-w-3xl mx-auto grid gap-8">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/rohitsharma45/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-white border-4 border-black p-6 shadow-lg hover:scale-105 transition"
        >
          <span className="text-xl font-bold">📸 Instagram</span>
          <span className="text-sm text-gray-600">@rohitsharma45</span>
        </a>

        {/* Twitter / X */}
        <a
          href="https://twitter.com/ImRo45"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-white border-4 border-black p-6 shadow-lg hover:scale-105 transition"
        >
          <span className="text-xl font-bold">🐦 Twitter (X)</span>
          <span className="text-sm text-gray-600">@ImRo45</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/RohitSharmaOfficialPage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-white border-4 border-black p-6 shadow-lg hover:scale-105 transition"
        >
          <span className="text-xl font-bold">📘 Facebook</span>
          <span className="text-sm text-gray-600">Official Page</span>
        </a>

        {/* Email (optional professional touch) */}
        <div className="bg-white border-4 border-black p-6 shadow-lg">
          <p className="text-xl font-bold mb-2">📧 Business Enquiries</p>
          <p className="text-gray-600">
            Via official management & endorsements
          </p>
        </div>
      </div>
    </section>
  );
}
