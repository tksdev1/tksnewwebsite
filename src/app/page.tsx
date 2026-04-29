import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HeroSection } from "@/components/hero-section";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

const iconProps = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const serviceTiles = [
  {
    title: "Lead & Sales Automation",
    href: "/services/ai",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Customer Service AI",
    href: "/services/ai",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    href: "/services/ai",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
  },
  {
    title: "Reporting & Dashboards",
    href: "/services/ai",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
  },
];

const principles = [
  {
    title: "Real results, not experiments.",
    body: "Every automation we implement is tied to a measurable outcome — leads converted, hours reclaimed, costs reduced. No vanity AI projects.",
  },
  {
    title: "Done-for-you implementation.",
    body: "We handle the full process: workflow analysis, automation build, staff training, and ongoing optimization. Your team gets the benefits without the technical overhead.",
  },
  {
    title: "Right-sized for your business.",
    body: "Our solutions are built for small and mid-sized businesses — practical scope, efficient timelines, and investments that make sense at your scale.",
  },
  {
    title: "Optimization built in.",
    body: "Every engagement includes mandatory post-launch support so your automations keep improving — not just deployed and forgotten.",
  },
];

const aiSolutions = [
  "Lead Automation",
  "Customer Service Automation",
  "Scheduling Automation",
  "CRM Optimization",
  "Document Automation",
  "Internal AI Assistants",
  "Reporting Dashboards",
  "Workflow Automation",
];

const aiSolutionBodies = [
  "Automatically follow up with leads, qualify prospects, and sync activity to your CRM — so no opportunity falls through the cracks.",
  "Always-on AI that handles routine customer inquiries, routes support tickets, and escalates issues — without adding headcount.",
  "Intelligent scheduling that coordinates appointments, staff, and resources without back-and-forth email chains.",
  "Clean up your CRM data, automate data entry, and build workflows that keep your pipeline healthy and up to date.",
  "Automatically generate, route, and process proposals, contracts, and business documents — cutting hours from every deal.",
  "Custom AI assistants trained on your processes to answer team questions, surface knowledge, and guide daily decisions.",
  "Real-time dashboards and automated reports that give leadership clear visibility into performance, KPIs, and trends.",
  "End-to-end automation of multi-step business processes — eliminating manual handoffs and human error across departments.",
];

const partners = [
  "Salesforce",
  "Microsoft Dynamics",
  "HubSpot",
  "Zoho",
  "AppFolio",
  "Yardi",
  "RealPage",
  "Entrata",
  "DocuSign",
  "Knock CRM",
  "QuickBooks",
  "Asana",
  "Jira",
  "Monday.com",
  "Odoo",
  "WordPress",
  "Google Analytics",
  "Rent Cafe",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* PRINCIPLES / WHY */}
      <section className="py-24">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="I."
              eyebrow="Why TechKey"
              title="AI that earns its keep."
              lede="We implement practical AI solutions that reduce manual work, improve response times, and help your team scale — without the experimentation overhead."
            />
          </AnimateIn>

          <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14 md:border-t md:border-line md:pt-14">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1}>
                <div className="relative">
                  <span className="num-label">0{i + 1}</span>
                  <h3 className="display mt-3 text-2xl text-ink leading-[1.1]">
                    {p.title}
                  </h3>
                  <p
                    className="mt-4 text-[15px] leading-relaxed text-ink-soft"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24 border-y border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="II."
              eyebrow="Common solutions"
              title="The automations that move the needle fastest."
              lede="We focus on high-impact, proven AI implementations — not science projects. These are the solutions small and mid-sized businesses use every day."
            />
          </AnimateIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceTiles.map((tile, i) => (
              <AnimateIn key={tile.title} delay={i * 0.1}>
                <Link href={tile.href} className="tile-card">
                  <span className="tile-card-icon">{tile.icon}</span>
                  <span className="tile-card-label">{tile.title}</span>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <Link
              href="/services"
              className="mt-12 inline-flex items-center gap-2 text-[14px] text-ink link-underline"
            >
              See all packages & pricing →
            </Link>
          </AnimateIn>
        </Container>
      </section>

      {/* AI IN ACTION */}
      <section className="py-24">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="III."
              eyebrow="What we automate"
              title="Eight solutions, proven in the field."
              lede="The best first AI projects eliminate a repetitive, high-volume task your team hates doing. Here's what we deploy for small and mid-sized businesses."
            />
          </AnimateIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {aiSolutions.map((title, i) => (
              <AnimateIn key={title} delay={(i % 3) * 0.08}>
                <div className="border-r border-b border-line p-8 hover:bg-canvas-blue/40 transition group h-full">
                  <span className="num-label">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-5 text-2xl text-ink leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-soft leading-relaxed">
                    {aiSolutionBodies[i]}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-6 inline-block text-ink-soft group-hover:translate-x-0.5 group-hover:text-accent transition"
                  >
                    →
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-20 border-y border-line bg-canvas-2">
        <Container>
          <AnimateIn>
            <div className="flex flex-wrap items-baseline justify-between gap-6">
              <p className="eyebrow">Platforms we work on</p>
              <Link
                href="/services"
                className="text-[13px] text-ink-soft link-underline"
              >
                See the full list →
              </Link>
            </div>
          </AnimateIn>
        </Container>
        <div className="mt-8 marquee-mask overflow-hidden">
          <div className="flex gap-x-10 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="display text-2xl text-ink-soft/60"
              >
                {p} <span className="text-line-strong mx-4">·</span>
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="num-label">IV. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Ready to see where AI pays off in your business?
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  We&apos;ll analyze your workflows, identify your highest-ROI
                  automation opportunities, and build a 60-day roadmap — no
                  jargon, no fluff.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link href="/contact" className="btn-primary">
                  <span>Book a free consultation</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a href={`mailto:${site.email}`} className="btn-secondary">
                  <span>{site.email}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
