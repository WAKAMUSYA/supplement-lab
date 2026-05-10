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
    { href: "/stacks", label: "スタックガイド" },
    { href: "/articles", label: "読み物" },
    { href: "/faq", label: "よくある質問" },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-[110] w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-primary text-2xl">🔬</span>
            <span className="gradient-text">筋トレサプリ研究室</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`hover:text-primary transition-colors ${
                  pathname === link.href ? "text-primary font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-primary focus:outline-none relative z-[120]"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden bg-white transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-16">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-2xl font-bold transition-colors ${
                pathname === link.href ? "text-primary" : "text-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-1 bg-gray-100 rounded-full mt-4"></div>
          <p className="text-xs text-gray-400">© 筋トレサプリ研究室</p>
        </nav>
      </div>
    </>
  );
}
