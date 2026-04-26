"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--paper)]/85 backdrop-blur-md border-b border-[color:var(--hairline)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12 h-[4.5rem]">
        <Link href="#top" aria-label="PrimeClaim Billing — home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-wide text-[color:var(--ink)] border-b border-[color:var(--ink)] pb-0.5 hover:opacity-70 transition-opacity"
        >
          Schedule a call
          <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center text-[color:var(--ink)]"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M5 5l10 10M5 15L15 5" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M3 7h16M3 15h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-[color:var(--hairline)] bg-[color:var(--paper)] transition-[max-height] duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] text-[color:var(--ink)] border-b border-[color:var(--hairline)] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center gap-2 text-[14px] text-[color:var(--ink)] border-b border-[color:var(--ink)] pb-0.5"
          >
            Schedule a call
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
