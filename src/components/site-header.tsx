"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Wordmark } from "./logo";

type NavChild = { label: string; href: string };
const subNav: Record<string, NavChild[]> = {
  "/services": [
    { label: "All services", href: "/services" },
    { label: "AI Transformation", href: "/services/ai" },
  ],
};

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
                const children = subNav[item.href];

                if (!children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`nav-link ${active ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`nav-link inline-flex items-center gap-1.5 ${active ? "active" : ""}`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="transition-transform group-hover:rotate-180"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Dropdown — outer wrapper has transparent top padding to bridge hover gap */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity">
                      <div className="min-w-[220px] bg-canvas border border-line rounded-md shadow-lg py-2">
                        {children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-5 py-2.5 text-[13px] tracking-wide transition ${
                                childActive
                                  ? "text-accent"
                                  : "text-ink-soft hover:text-accent hover:bg-canvas-2"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
              const children = subNav[item.href];
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 nav-link ${active ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {children && (
                    <div className="pl-4 border-l border-line ml-1 mb-2">
                      {children
                        .filter((c) => c.href !== item.href)
                        .map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={`block py-2 nav-link ${childActive ? "active" : ""}`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                    </div>
                  )}
                </div>
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
