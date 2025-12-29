import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white brutal z-50 flex justify-between px-8 py-4">
      <h1 className="font-black text-xl">ROHIT SHARMA</h1>

      <div className="flex gap-6 font-bold">
        <Link href="/">Home</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/career">Career</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}

