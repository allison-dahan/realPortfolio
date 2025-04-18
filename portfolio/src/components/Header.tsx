// components/Header.tsx
"use client"

import Link from "next/link"
import { Menu, Code2, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="inline-block font-bold">Allison Dahan</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="px-0 text-base hover:bg-transparent focus:bg-transparent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <Code2 className="h-6 w-6" />
              <span className="inline-block font-bold">Allison Dahan</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="px-0 text-base hover:bg-transparent focus:bg-transparent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 grid gap-6 py-6 text-center">
            <Link
              href="#skills"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex justify-center gap-4 pt-4">
              {/* Social links */}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}