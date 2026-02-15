"use client";

import Link from "next/link";
import { Mail, Github, Twitter, Instagram , Globe} from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid container for four sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Logo / Brand */}
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-blue-600 tracking-widest">
              STELLARIS
            </h1>
            <p className="text-gray-400 text-sm">
              Building the future with code and courage.
            </p>
            <Link
              href="#hero"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              ↑ BACK TO TOP
            </Link>
          </div>

          {/* Event Info */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              EVENT INFO
            </h2>
            <p className="text-gray-400 text-sm">March 28 - 29, 2026</p>
            <p className="text-gray-400 text-sm font-semibold">36 Hours of Innovation</p>
          </div>



          {/* Quicklinks */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              QUICKLINKS
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 text-sm">
              <Link href="#hero" className="hover:text-white hover:underline transition-all">
                Home
              </Link>
              <Link href="#mission-briefing" className="hover:text-white hover:underline transition-all">
                About
              </Link>
              <Link href="#tracks" className="hover:text-white hover:underline transition-all">
                Tracks
              </Link>
              <Link href="#timeline" className="hover:text-white hover:underline transition-all">
                Timeline
              </Link>
              <Link href="#sponsors" className="hover:text-white hover:underline transition-all">
                Sponsors
              </Link>
              <Link href="#prizes" className="hover:text-white hover:underline transition-all">
                Rewards
              </Link>
              <Link href="#faq" className="hover:text-white hover:underline transition-all">
                FAQ
              </Link>
              <Link href="#contact" className="hover:text-white hover:underline transition-all">
                Register
              </Link>
            </div>
          </div>


          {/* Connect */}
          <div className="space-y-2">
            <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-colors cursor-pointer">
              CONNECT
            </h2>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Mail size={16} /> techcommunityelixir@gmail.com
            </p>
            <div className="flex items-center gap-4 mt-1 text-gray-400">
              <Link href="https://www.elixircommunity.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Globe size={18} />
              </Link>
              <Link href="https://github.com/ElixirTechCommunity" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={18} />
              </Link>
              <Link href="https://www.instagram.com/geeksforgeeks_abesec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="https://discord.gg/vw9d2V4x" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <IconBrandDiscord />
              </Link>
              <Link href="https://x.com/TheElixirTech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-xs space-y-1">
          <p>© 2026 GFG × ELIXIR TECH COMMUNITY. ALL RIGHTS RESERVED.</p>
          <p>Built with <span className="text-red-500">❤️</span> by GFG x ELIXIR Team.</p>
        </div>
      </div>
    </footer>
  );
}