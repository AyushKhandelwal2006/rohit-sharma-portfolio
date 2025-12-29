export default function Timeline() {
  const events = [
    { year: "2007", text: "International Debut" },
    { year: "2013", text: "Champions Trophy Winner" },
    { year: "2019", text: "5 WC Centuries" },
  ];

  return (
    <section id="timeline" className="p-20 bg-white">
      <h2 className="text-4xl font-black mb-8">Career Timeline</h2>

      <div className="space-y-6">
        {events.map((e, i) => (
          <div key={i} className="brutal p-6 bg-cyan-300">
            <h3 className="font-black text-xl">{e.year}</h3>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
