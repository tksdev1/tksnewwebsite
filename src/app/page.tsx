import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
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
    title: "Business Software",
    href: "/services",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Artificial Intelligence",
    href: "/services",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
  },
  {
    title: "Websites & Integrations",
    href: "/services",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "App Development",
    href: "/services",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

const principles = [
  {
    title: "Enhanced decision-making.",
    body: "We surface hidden patterns in your data so every decision is backed by evidence, not intuition.",
  },
  {
    title: "Personalized customer experience.",
    body: "CRM systems that anticipate what your customers need — before they ask.",
  },
  {
    title: "Continuous improvement.",
    body: "Ongoing optimization keeps you ahead in a market that won&apos;t sit still.",
  },
  {
    title: "Unmatched efficiency.",
    body: "Automate the repetitive work so your team can focus on what actually moves the business.",
  },
];

const aiSolutions = [
  "Chatbots",
  "Marketing automation",
  "Virtual assistants",
  "Data-driven decisions",
  "Smart document processing",
  "Predictive maintenance",
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
      {/* HERO — TKS dark navy with decorative gradient + grid */}
      <section className="hero-bg text-canvas">
        <Container className="pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="flex items-center gap-3">
            <span className="num-label !text-accent">Est. {site.established}</span>
            <span className="h-px w-10 bg-canvas/30" />
            <span className="eyebrow !text-canvas/70">Boutique consulting firm</span>
          </div>

          <h1 className="hero-headline mt-8 max-w-[18ch] text-canvas">
            The key to all your software needs.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 lg:col-span-5 text-[18px] leading-relaxed text-canvas/85">
              TechKey Solutions is a boutique partner delivering CRM, ERP, AI,
              app development and integration services that streamline
              operations, sharpen decisions and drive growth — for companies
              of every size.
            </p>
            <div className="md:col-span-6 lg:col-start-8 lg:col-span-5 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book a consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/services"
                className="text-[13px] text-canvas/85 hover:text-canvas link-underline"
              >
                See what we do
              </Link>
            </div>
          </div>
        </Container>
      </section>


      {/* PRINCIPLES / WHY */}
      <section className="py-24">
        <Container>
          <SectionHeading
            index="I."
            eyebrow="Why TechKey"
            title="Built to move your business forward."
            lede="We partner with companies of every size to turn technology into a measurable edge — not just a line item."
          />

          <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14 md:border-t md:border-line md:pt-14">
            {principles.map((p, i) => (
              <div key={p.title} className="relative">
                <span className="num-label">0{i + 1}</span>
                <h3 className="display mt-3 text-2xl text-ink leading-[1.1]">
                  {p.title}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-relaxed text-ink-soft"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES — TKS blue-gradient signature tiles */}
      <section className="py-24 border-y border-line bg-canvas-2">
        <Container>
          <SectionHeading
            index="II."
            eyebrow="Capabilities"
            title="One partner for the full software stack."
            lede="From front-of-house CRM to the plumbing that ties your systems together — we build, integrate and operate all of it."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceTiles.map((tile) => (
              <Link key={tile.title} href={tile.href} className="tile-card">
                <span className="tile-card-icon">{tile.icon}</span>
                <span className="tile-card-label">{tile.title}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-12 inline-flex items-center gap-2 text-[14px] text-ink link-underline"
          >
            Browse every capability →
          </Link>
        </Container>
      </section>

      {/* AI IN ACTION */}
      <section className="py-24">
        <Container>
          <SectionHeading
            index="III."
            eyebrow="AI in action"
            title="Putting intelligence into action."
            lede="The best first AI projects remove a repetitive, high-volume task someone hates doing. We've shipped all six of these with small teams."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {aiSolutions.map((title, i) => (
              <div
                key={title}
                className="border-r border-b border-line p-8 hover:bg-canvas-blue/40 transition group"
              >
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
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-20 border-y border-line bg-canvas-2">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-6">
            <p className="eyebrow">Platforms we work on</p>
            <Link
              href="/services"
              className="text-[13px] text-ink-soft link-underline"
            >
              See the full list →
            </Link>
          </div>
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
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="num-label">IV. / Next step</p>
              <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                Ready to start your AI journey?
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                Book a free consultation and we&apos;ll map a practical path to
                the outcomes you&apos;re after — no jargon, no fluff.
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
        </Container>
      </section>
    </>
  );
}

const aiSolutionBodies = [
  "Always-on conversational agents that qualify leads and answer the routine questions your team fields every day.",
  "Multi-channel campaigns that reach the right person with the right message at the right moment — automatically.",
  "AI assistants that handle scheduling, research and routine admin so your team can focus on high-impact work.",
  "Turn raw data into dashboards and forecasts that guide every decision — operational, financial and strategic.",
  "Extract, classify and route documents automatically. No more manual data entry from PDFs and scans.",
  "Spot failures before they cost you downtime, with sensor-driven models trained on your own equipment data.",
];
