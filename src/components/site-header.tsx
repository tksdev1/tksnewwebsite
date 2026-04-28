"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Wordmark } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/80 border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/" aria-label="TechKey Solutions home">
            <Wordmark />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {site.nav
              .filter((n) => n.href !== "/")
              .map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${active ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] text-ink-soft hover:text-ink hidden lg:inline"
            >
              {site.email}
            </a>
            <Link href="/contact" className="btn-primary">
              <span>Book a call</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-2 border-t border-line">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 nav-link ${active ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 btn-primary"
            >
              <span>Book a call</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
