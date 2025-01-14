import Link from "next/link";
import Socials from "./socials";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <Link href="/">
        <h1 className="text-lg font-bold">BlogCast</h1>
      </Link>
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Socials />
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-black text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
}
