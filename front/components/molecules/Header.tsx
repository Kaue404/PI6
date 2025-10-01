"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/jogos", label: "Jogos" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <button
            className="lg:hidden text-[#eeeedd] hover:text-[#05DBF2] transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white no-underline hover:text-[#05DBF2] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#999999]" />
              </div>
              <input
                type="search"
                placeholder="Buscar jogos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-[#999999] bg-[#1A1A1A] pl-10 pr-3 py-2 text-sm text-[#eeeedd] placeholder-[#999999] focus:border-[#05DBF2] focus:outline-none focus:ring-2 focus:ring-[#05DBF2]"
              />
            </div>
          </div>

          <div className="absolute right-4 flex items-center space-x-4">
            <Link
              href="/usuario"
              className="text-[#eeeedd] hover:text-[#05DBF2] transition-colors"
              aria-label="Perfil do usuário"
            >
              <UserIcon className="h-6 w-6" />
            </Link>

            <Link
              href="/"
              className="text-[#05DBF2] text-2xl font-bold no-underline hover:text-[#05DBF2]/90 transition-colors"
            >
              <Image
                src={"/Icon.svg"}
                width={48}
                height={48}
                alt={"Logo do App"}
                quality={100}
              />
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <div className="pt-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#999999]" />
                </div>
                <input
                  type="search"
                  placeholder="Buscar jogos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-[#999999] bg-[#1A1A1A] pl-10 pr-3 py-2 text-sm text-[#eeeedd] placeholder-[#999999] focus:border-[#05DBF2] focus:outline-none focus:ring-2 focus:ring-[#05DBF2]"
                />
              </div>
            </div>

            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white no-underline hover:text-[#05DBF2] transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
