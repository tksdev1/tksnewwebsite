import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-hero text-canvas">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/tks-logo.png"
              alt="TechKey Solutions"
              width={300}
              height={156}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-[15px] leading-relaxed text-canvas/65 max-w-sm">
              {site.tagline}. Boutique consulting since {site.established} —
              CRM, ERP, AI, apps and integrations for modern businesses.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-[15px]">
              <a
                href={`mailto:${site.email}`}
                className="text-canvas hover:text-accent transition w-fit"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="text-canvas hover:text-accent transition w-fit"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow !text-canvas/50 mb-4">Company</p>
            <ul className="space-y-2.5 text-[14px]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-canvas/70 hover:text-accent transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-canvas/70 hover:text-accent transition"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow !text-canvas/50 mb-4">Social</p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canvas/70 hover:text-accent transition"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-canvas/50 mb-4">Get started</p>
            <a href="https://calendly.com/techkeysolutions/15min?utm_medium=email&_hsenc=p2ANqtz-8Uo4hFPiyIJMLoVJ8ysbViG3qZWXmaEuPpcbIaUvunpYvYq_UzMMnn-t7eYLYmhtyL0H5joyGZbb9P3_TYzOb-XHeAHA&_hsmi=2&utm_content=2&utm_source=hs_email&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Book a Consultation</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-canvas/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-canvas/50">
          <p>© {new Date().getFullYear()} TechKey Solutions LLC</p>
          <p className="italic text-accent">
            Established {site.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
