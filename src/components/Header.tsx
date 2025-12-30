"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#14b8a6] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f43f5e] rounded-full pulse-dot" />
            </div>
            <span className="text-xl font-bold">
              Neural<span className="gradient-text">Pulse</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[#888] hover:text-white transition-colors link-underline"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-[#888] hover:text-white transition-colors link-underline"
            >
              Articles
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-[#888] hover:text-white transition-colors link-underline"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#888] hover:text-white transition-colors link-underline"
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#subscribe"
              className="btn-primary text-sm"
            >
              Subscribe Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#222] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#222]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-[#888] hover:text-white transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium text-[#888] hover:text-white transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/categories"
                className="text-sm font-medium text-[#888] hover:text-white transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-[#888] hover:text-white transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#subscribe"
                className="btn-primary text-sm text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Subscribe Free
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
