"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-slate-950 text-white z-50 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          GRIDERA LTD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="hover:text-amber-600 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-amber-600 transition">
            About
          </Link>
          <Link href="#expertise" className="hover:text-amber-600 transition">
            Expertise
          </Link>
          <Link href="#services" className="hover:text-amber-600 transition">
            Services
          </Link>
          <Link href="#contact" className="hover:text-amber-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 md:hidden">
            <Link href="#" className="hover:text-amber-600 transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-amber-600 transition">
              About
            </Link>
            <Link href="#expertise" className="hover:text-amber-600 transition">
              Expertise
            </Link>
            <Link href="#services" className="hover:text-amber-600 transition">
              Services
            </Link>
            <Link href="#contact" className="hover:text-amber-600 transition">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
