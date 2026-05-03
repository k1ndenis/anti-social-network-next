"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-xl ${
      pathname === path ? "text-blue-400" : "text-gray-400"
    }`;

  return (
    <nav className="fixed bottom-0 w-full h-15 flex justify-around items-center bg-[#1a1a1a] border-t border-[#2a2a2a]">
      <Link href="/" className={linkClass("/")}>🏠</Link>
      <Link href="/explore" className={linkClass("/explore")}>🔍</Link>
      <Link
        href="/create"
        className="bg-blue-400 text-white px-3 py-1 rounded-lg text-xl"
      >
        +
      </Link>
      <Link href="/messages" className={linkClass("/messages")}>💬</Link>
      <Link href="/profile/me" className={linkClass("/profile/me")}>👤</Link>
    </nav>
  );
}