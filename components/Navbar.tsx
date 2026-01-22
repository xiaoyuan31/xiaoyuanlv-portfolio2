import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg">
          Xiao Yuan Lv
        </Link>

        <div className="flex gap-6 text-zinc-400">
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
