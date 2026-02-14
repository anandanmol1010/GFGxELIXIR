"use client";

import Link from "next/link";
import { Mail, Github, Twitter, Instagram , Globe} from "lucide-react";

// Discord Icon
const DiscordIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

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
                <DiscordIcon />
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