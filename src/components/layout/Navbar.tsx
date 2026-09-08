import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Datasets", href: "#datasets" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-7 lg:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#183D2B]/20 bg-white/70">
            <span className="text-lg font-semibold text-[#183D2B]">
              B
            </span>
          </div>

          <div className="leading-none">
            <div className="font-serif text-xl tracking-[0.18em] text-[#101713]">
              BHUMI<span className="text-[#183D2B]">.AI</span>
            </div>

            <p className="mt-1 text-[7px] tracking-[0.32em] text-[#7B8178]">
              LAND INTELLIGENCE FOR A
            </p>

            <p className="text-[7px] tracking-[0.32em] text-[#7B8178]">
              SUSTAINABLE INDIA
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors ${
                index === 0
                  ? "text-[#183D2B]"
                  : "text-[#39413C] hover:text-[#183D2B]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#101713]/10 bg-white/60 backdrop-blur-md transition hover:bg-white"
          >
            <Search size={18} strokeWidth={1.7} />
          </button>

          <Link
            href="/explore"
            className="hidden items-center gap-3 rounded-full bg-[#183D2B] px-6 py-3 text-sm text-white shadow-lg shadow-[#183D2B]/10 transition hover:bg-[#101713] sm:flex"
          >
            Explore Map
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}