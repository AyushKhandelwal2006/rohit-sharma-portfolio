export default function Contact() {
  return (
    <section id="contact" className="p-20 bg-yellow-300">
      <h2 className="text-4xl font-black mb-6">Fan Message</h2>

      <form className="brutal bg-white p-8 w-96 flex flex-col gap-4">
        <input className="border-4 border-black p-2" placeholder="Name" />
        <input className="border-4 border-black p-2" placeholder="Email" />
        <textarea className="border-4 border-black p-2" placeholder="Message"></textarea>
        <button className="brutal bg-pink-500 font-bold">Send</button>
      </form>
    </section>
  );
}
