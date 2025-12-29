export default function AboutRohit() {
  return (
    <section className="px-6 md:px-20 py-20 bg-[#FFF8E7]">

      {/* SECTION TITLE */}
      <h2 className="text-4xl md:text-5xl font-black mb-10 brutal bg-white inline-block px-6 py-3">
        About Rohit Sharma
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-4xl text-lg leading-relaxed font-medium mb-12">
        Rohit Gurunath Sharma, famously known as the “Hitman of Indian Cricket”,
        is one of the most accomplished batsmen in the modern era. Born on
        30 April 1987 in Nagpur, India, Rohit is admired for his elegant stroke
        play, ability to score big hundreds, and calm leadership.
        <br /><br />
        He is the current captain of the Indian national team in limited-overs
        formats and the most successful captain in IPL history, leading Mumbai
        Indians to five titles.
      </p>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="brutal bg-yellow-400 p-6">
          <h3 className="font-black text-xl mb-2">Playing Style</h3>
          <p>
            Right-handed opening batsman known for timing, power, and big scores.
          </p>
        </div>

        <div className="brutal bg-pink-500 p-6">
          <h3 className="font-black text-xl mb-2">Career Highlights</h3>
          <p>
            Only player with 3 ODI double centuries. Highest score: 264.
          </p>
        </div>

        <div className="brutal bg-lime-400 p-6">
          <h3 className="font-black text-xl mb-2">Leadership</h3>
          <p>
            5-time IPL-winning captain, known for calm and tactical leadership.
          </p>
        </div>

      </div>

      {/* LEGACY */}
      <div className="mt-16 brutal bg-white p-8 max-w-3xl">
        <p className="italic font-semibold">
          “Rohit Sharma’s journey from raw talent to one of the greatest openers
          in cricket history is an inspiration to millions.”
        </p>
      </div>

    </section>
  );
}
