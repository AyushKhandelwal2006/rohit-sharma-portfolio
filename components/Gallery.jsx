export default function Gallery() {
  return (
    <section id="gallery" className="p-20">
      <h2 className="text-4xl font-black mb-8">Media Gallery</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="brutal bg-orange-500 h-48 flex items-center justify-center">MATCH 1</div>
        <div className="brutal bg-pink-500 h-64 flex items-center justify-center">MATCH 2</div>
        <div className="brutal bg-lime-500 h-40 flex items-center justify-center">MATCH 3</div>
      </div>
    </section>
  );
}
