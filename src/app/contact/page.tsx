import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact · TechKey Solutions",
  description:
    "Get in touch with TechKey Solutions. Email, phone, or send us a note about your project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="flex items-center gap-3">
            <span className="num-label">Contact</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Say hello</span>
          </div>
          <h1 className="hero-headline mt-8 text-ink max-w-[20ch]">
            Let&apos;s talk.
          </h1>
          <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
            Tell us a bit about your project, and we&apos;ll be in touch within
            one business day. Prefer email or phone? Reach out directly below.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT: details */}
            <div className="lg:col-span-5">
              <dl className="space-y-10">
                <div className="border-t border-line-strong pt-6">
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-3">
                    <a
                      href={`mailto:${site.email}`}
                      className="display text-3xl sm:text-4xl text-ink link-underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line-strong pt-6">
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-3">
                    <a
                      href={site.phoneHref}
                      className="display text-3xl sm:text-4xl text-ink link-underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line-strong pt-6">
                  <dt className="eyebrow">Follow</dt>
                  <dd className="mt-3 flex gap-6">
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="display text-xl text-ink link-underline"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="display text-xl text-ink link-underline"
                    >
                      Facebook ↗
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line-strong pt-6">
                  <dt className="eyebrow">Response time</dt>
                  <dd className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                    We reply within one business day. Urgent? Call us.
                  </dd>
                </div>
              </dl>
            </div>

            {/* RIGHT: form */}
            <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-16">
              <p className="eyebrow">General inquiries</p>
              <h2 className="display mt-3 text-3xl text-ink leading-[1.1]">
                Send us a note.
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
