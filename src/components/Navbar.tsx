"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/ingredients", label: "成分一覧" },
    { href: "/purposes", label: "目的から探す" },
    { href: "/articles", label: "読み物" },
    { href: "/faq", label: "よくある質問" },
    { href: "/about", label: "研究室について" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center gap-2 relative z-50">
          <span className="text-primary text-2xl">🔬</span>
          <span className="gradient-text">筋トレサプリ研究室</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-bold" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-gray-600 hover:text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`${pathname === link.href ? "text-primary" : "text-gray-800"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
