import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { AnimateIn } from "@/components/animate-in";
import { Counter } from "@/components/counter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About · TechKey Solutions",
  description:
    "Since 2016, TechKey Solutions has been a trusted technology partner delivering CRM, ERP, AI, and integration solutions.",
};


const values = [
  {
    title: "Innovation",
    body: "We watch where industry is going and build solutions that age well.",
  },
  {
    title: "Integrity",
    body: "Straightforward communication and durable client relationships.",
  },
  {
    title: "Customer success",
    body: "Exceptional service and a genuine partnership with every client.",
  },
  {
    title: "Future-focused",
    body: "We monitor trends and deliver technology that adapts with you.",
  },
];

const stats = [
  { label: "Founded", value: 2016, prefix: "", suffix: "" },
  { label: "Clients served", value: 50, prefix: "", suffix: "+" },
  { label: "Practice areas", value: 4, prefix: "", suffix: "" },
  { label: "Platforms", value: 18, prefix: "", suffix: "+" },
];


export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="num-label">About</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">Est. {site.established}</span>
            </div>
            <h1 className="hero-headline mt-8 text-ink max-w-[20ch]">
              A trusted technology partner since 2016.
            </h1>
          </AnimateIn>

          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <AnimateIn delay={0.15} className="lg:col-span-7">
              <p className="text-[18px] leading-relaxed text-ink-soft">
                TechKey Solutions offers comprehensive software solutions — CRM
                (Salesforce, MS Dynamics), ERP, app development and
                website/integration services — along with cutting-edge
                Artificial Intelligence tools. We help businesses make
                data-driven decisions, streamline operations and act on
                predictive analytics.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.25} className="lg:col-span-4 lg:col-start-9">
              <dl className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="border-t border-line-strong pt-4">
                    <dt className="num-label">{s.label}</dt>
                    <dd className="display mt-2 text-4xl text-ink">
                      <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 bg-canvas-2 border-b border-line">
        <Container>
          <AnimateIn>
            <figure className="max-w-4xl">
              <p className="display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
                &ldquo;We build for the business that wants technology to be an
                advantage, not just an expense line.&rdquo;
              </p>
              <figcaption className="mt-10 flex items-center gap-4 num-label">
                <span className="h-px w-10 bg-line-strong" />
                TechKey Solutions
              </figcaption>
            </figure>
          </AnimateIn>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="I."
              eyebrow="Principles"
              title="How we show up for clients."
            />
          </AnimateIn>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-line bg-canvas-2 p-8 flex flex-col h-full">
                  <h3 className="display text-2xl text-ink">{v.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft flex-1">
                    {v.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="num-label">II. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Let&apos;s trade notes on your project.
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  Thirty minutes, no sales pitch — just a clear read on
                  what&apos;s possible, what&apos;s not, and where to start.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a href="https://calendly.com/techkeysolutions/15min?utm_medium=email&_hsenc=p2ANqtz-8Uo4hFPiyIJMLoVJ8ysbViG3qZWXmaEuPpcbIaUvunpYvYq_UzMMnn-t7eYLYmhtyL0H5joyGZbb9P3_TYzOb-XHeAHA&_hsmi=2&utm_content=2&utm_source=hs_email&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>Book a Consultation</span>
                  <span aria-hidden="true">→</span>
                </a>
                <Link href="/services" className="btn-secondary">
                  <span>Explore our services</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
