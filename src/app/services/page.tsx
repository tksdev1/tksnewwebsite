import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Automation Services & Packages · TechKey Solutions",
  description:
    "Practical AI automation packages for small and mid-sized businesses. From a $4,500 strategy assessment to full-scale AI transformation — real results, measurable outcomes.",
  keywords: [
    "AI automation services",
    "AI implementation for small business",
    "AI business optimization",
    "AI consulting packages",
    "workflow automation pricing",
    "AI assessment and strategy",
    "lead automation",
    "customer service automation",
    "TechKey Solutions",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Automation Services & Packages · TechKey Solutions",
    description:
      "Practical AI automation packages for small and mid-sized businesses. Start with a strategy assessment or jump straight to implementation.",
    url: "/services",
    siteName: site.name,
    type: "website",
  },
};

const assessmentIncludes = [
  "Workflow analysis",
  "Process bottleneck review",
  "Software stack review",
  "AI opportunity mapping",
  "ROI projections",
  "Implementation roadmap",
];

const assessmentDeliverables = [
  "AI readiness assessment",
  "Automation recommendations",
  "ROI estimate",
  "60-day implementation roadmap",
];

const implementationPackages = [
  {
    num: "02",
    name: "Starter AI Launch",
    bestFor: "Small businesses wanting immediate efficiency wins",
    fee: "$10,000",
    retainer: "+ $2,500/month support (3 months)",
    timeline: "4-week implementation · 3 months optimization",
    includes: [
      "1–2 workflow automations",
      "Lead follow-up automation",
      "Basic chatbot setup",
      "CRM automation cleanup",
      "Basic reporting dashboard",
      "Staff training",
      "Implementation support",
    ],
    support: [
      "Bug fixes & workflow adjustments",
      "Team support",
      "Performance optimization",
      "Monthly strategy calls",
    ],
  },
  {
    num: "03",
    name: "Growth AI Package",
    bestFor: "Growing businesses automating multiple functions",
    fee: "$25,000",
    retainer: "+ $4,000/month support (4 months)",
    timeline: "6–8 week implementation · 3 months optimization",
    includes: [
      "Everything in Starter, plus:",
      "Multi-department workflow automation",
      "Customer service automation",
      "Marketing automation",
      "Sales automation",
      "Document automation",
      "Advanced dashboards",
      "SOP redesign",
    ],
    support: [
      "Workflow optimization",
      "Team retraining",
      "Prompt refinement",
      "New automation enhancements",
      "Monthly executive review calls",
    ],
  },
  {
    num: "04",
    name: "Scale AI Transformation",
    bestFor: "Mid-sized businesses seeking broader transformation",
    fee: "$35,000",
    retainer: "+ $5,000/month support (6 months)",
    timeline: "10–12 week implementation · 3 months optimization",
    includes: [
      "Everything in Growth, plus:",
      "Custom AI assistants",
      "Advanced integrations",
      "Cross-platform automation",
      "Executive dashboards",
      "Department transformation",
      "AI operating model design",
    ],
    support: [
      "Continuous optimization",
      "New workflow creation",
      "Executive advisory",
      "AI scaling roadmap",
      "KPI monitoring",
    ],
  },
];

const commonSolutions = [
  "Lead automation",
  "Customer service automation",
  "Scheduling automation",
  "CRM optimization",
  "Proposal & document automation",
  "Internal AI assistants",
  "Reporting dashboards",
  "Workflow automation",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <AnimateIn>
            <div className="flex items-center gap-3">
              <span className="num-label">Services</span>
              <span className="h-px w-10 bg-line-strong" />
              <span className="eyebrow">AI Automation & Business Optimization</span>
            </div>
            <h1 className="hero-headline mt-8 text-ink max-w-[22ch]">
              Practical AI. Measurable results.
            </h1>
            <p className="mt-12 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
              We don&apos;t just deploy AI tools — we ensure they actually drive
              measurable business results. Every engagement starts with a clear
              assessment and ends with automations your team owns and uses every day.
            </p>
          </AnimateIn>
        </Container>
      </section>

      {/* COMMON SOLUTIONS STRIP */}
      <section className="py-14 border-b border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <p className="eyebrow mb-8">Common solutions</p>
            <div className="flex flex-wrap gap-3">
              {commonSolutions.map((s) => (
                <span
                  key={s}
                  className="border border-line rounded-full px-4 py-1.5 text-[14px] text-ink-soft display"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ASSESSMENT */}
      <section className="py-24 border-b border-line">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="num-label">01 / The right starting point</span>
                <h2 className="display mt-4 text-4xl lg:text-5xl text-ink leading-[1.05]">
                  AI Assessment & Strategy
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                  Before any automation is built, we map your workflows,
                  identify bottlenecks, and surface the highest-ROI
                  opportunities in your business. You walk away with a clear
                  picture of where AI pays off — and a concrete roadmap to
                  get there.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-baseline">
                  <span className="display text-4xl text-ink">$4,500</span>
                  <span className="num-label">flat fee · 1–2 weeks</span>
                </div>
                <Link href="/contact" className="mt-8 btn-primary inline-flex">
                  <span>Start with an assessment</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="lg:col-span-3 lg:col-start-7">
                <p className="eyebrow mb-4">Includes</p>
                <ul className="space-y-3">
                  {assessmentIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-ink border-b border-line pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <p className="eyebrow mb-4">Deliverables</p>
                <ul className="space-y-3">
                  {assessmentDeliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15px] text-ink border-b border-line pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* IMPLEMENTATION PACKAGES */}
      <section className="py-24 bg-canvas-2 border-b border-line">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="II."
              eyebrow="Implementation packages"
              title="From first automation to full transformation."
              lede="Every package includes a mandatory post-launch support period to ensure your automations keep performing — not just at launch, but as your business evolves."
            />
          </AnimateIn>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {implementationPackages.map((pkg, i) => (
              <AnimateIn key={pkg.name} delay={i * 0.1}>
                <article className="bg-canvas border border-line rounded-lg p-8 flex flex-col h-full">
                  <header>
                    <span className="num-label">{pkg.num}</span>
                    <h2 className="display mt-3 text-2xl text-ink leading-tight">
                      {pkg.name}
                    </h2>
                    <p className="mt-2 text-[13px] text-ink-soft italic">
                      {pkg.bestFor}
                    </p>
                    <div className="mt-5 border-t border-line pt-5">
                      <p className="display text-3xl text-ink">{pkg.fee}</p>
                      <p className="mt-1 text-[13px] text-ink-soft">{pkg.retainer}</p>
                      <p className="mt-2 num-label">{pkg.timeline}</p>
                    </div>
                  </header>

                  <div className="mt-6 flex-1">
                    <p className="eyebrow mb-3">Includes</p>
                    <ul className="space-y-2 text-[14px] text-ink-soft">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-baseline gap-2.5">
                          <span aria-hidden="true" className="text-accent shrink-0">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-line pt-5">
                    <p className="eyebrow mb-3">Post-launch support includes</p>
                    <ul className="space-y-2 text-[14px] text-ink-soft">
                      {pkg.support.map((item) => (
                        <li key={item} className="flex items-baseline gap-2.5">
                          <span aria-hidden="true" className="text-ink-soft/50 shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ONGOING SUPPORT */}
      <section className="py-24 border-b border-line">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="num-label">III. / Long-term</span>
                <h2 className="display mt-4 text-4xl lg:text-5xl text-ink leading-[1.05]">
                  Continued optimization after launch.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft max-w-prose">
                  For businesses that want continued AI expansion, workflow
                  refinement, and long-term strategic support after their
                  initial engagement period wraps up.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="bg-canvas-2 border border-line rounded-lg p-8">
                  <p className="num-label">Ongoing optional support</p>
                  <p className="display mt-3 text-3xl text-ink">
                    From $2,500<span className="text-ink-soft text-xl">/month</span>
                  </p>
                  <p className="mt-2 text-[14px] text-ink-soft">or billed at $350/hour</p>
                  <Link
                    href="/contact"
                    className="mt-6 btn-secondary inline-flex w-full justify-between"
                  >
                    <span>Get in touch</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="num-label">IV. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Not sure which package fits?
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  Book a free consultation and we&apos;ll walk through your
                  current workflows, pinpoint your highest-leverage automation
                  opportunities, and recommend the right starting point.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link href="/contact" className="btn-primary">
                  <span>Book a free consultation</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/services/ai" className="btn-secondary">
                  <span>See our methodology</span>
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
