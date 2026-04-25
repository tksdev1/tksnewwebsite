import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const pageTitle = "AI Transformation — Implementation, Training & Workflow Automation";
const pageDescription =
  "TechKey Solutions embeds with your team for a 90-day AI transformation: workflow audit, production deployment, role-specific training, and self-sustaining systems. Boutique AI implementation since 2016.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI transformation",
    "AI implementation services",
    "enterprise AI consulting",
    "AI workflow automation",
    "AI training for teams",
    "generative AI deployment",
    "AI agent development",
    "TechKey Solutions",
  ],
  alternates: { canonical: "/services/ai" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/ai",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const struggles = [
  {
    num: "01",
    title: "Accountability gap.",
    body: "AI adoption gets distributed across the org with no one truly owning the outcome.",
  },
  {
    num: "02",
    title: "Bandwidth constraints.",
    body: "Teams take on AI exploration as a side project, competing with their existing deliverables for time and attention.",
  },
  {
    num: "03",
    title: "Skill asymmetry.",
    body: "Most employees know AI exists but lack the practical knowledge to integrate it into their specific workflows.",
  },
  {
    num: "04",
    title: "Measurement failure.",
    body: "Without baselines and clear success criteria, novelty effects look indistinguishable from real productivity gains.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Implementation over advice.",
    body: "The consulting industry is saturated with strategy decks. We produce systems that run in production. We're measured by the productivity gains we deliver, not the reports we write.",
  },
  {
    num: "02",
    title: "Built for the AI era.",
    body: "Deep expertise across the full stack — large language models, retrieval-augmented generation, workflow automation, custom agent development. We pick the right tool for each use case, not a single vendor.",
  },
  {
    num: "03",
    title: "Designed to leave.",
    body: "Every engagement is built to make us unnecessary. We document everything, train your people to own their workflows, and transition cleanly. Internal capability is the deliverable.",
  },
];

const phases = [
  {
    num: "01",
    title: "Diagnose",
    weeks: "Weeks 1–2",
    body: "Stakeholder interviews across affected teams and leadership, workflow mapping and time-motion analysis, current tech stack assessment, and a prioritized opportunity matrix ranked by leverage and ROI.",
  },
  {
    num: "02",
    title: "Deploy",
    weeks: "Weeks 3–5",
    body: "AI tools selected, configured, and rolled out into production — no sandboxes. Custom automations built where they earn their keep. Integrations into existing CRM, ERP and communication tools.",
  },
  {
    num: "03",
    title: "Train",
    weeks: "Weeks 6–9",
    body: "Role-specific, hands-on training contextualized to your team's daily work. Custom prompt engineering libraries, written playbooks, standard operating procedures, and live office hours for real-time problem solving.",
  },
  {
    num: "04",
    title: "Optimize",
    weeks: "Weeks 10–12",
    body: "Performance measured against pre-engagement baselines. Underperforming workflows refined. Comprehensive handoff documentation produced. Internal ownership assigned. Executive presentation of results.",
  },
];

const tiers = [
  {
    name: "Accelerate",
    audience: "For teams adopting AI in a structured way for the first time.",
    deliverables: [
      "Comprehensive workflow audit and opportunity assessment",
      "AI tool deployment across priority workflows",
      "Hands-on team training program",
      "Custom prompt libraries and usage playbooks",
      "Bi-weekly optimization sprints with performance tracking",
    ],
  },
  {
    name: "Transform",
    audience: "For organizations re-engineering one or more departments.",
    deliverables: [
      "Everything in Accelerate, plus:",
      "Custom AI agent and workflow automation development",
      "Full departmental workflow re-engineering",
      "Technical integration with existing tools and APIs",
      "Weekly executive strategy sessions",
    ],
  },
  {
    name: "Enterprise",
    audience: "For company-wide transformation with executive sponsorship.",
    deliverables: [
      "Everything in Transform, plus:",
      "Dedicated embedded team",
      "Proprietary AI tool and internal product development",
      "Company-wide rollout with structured change management",
      "C-suite AI strategy and technology roadmap",
      "Post-engagement support and transition period",
    ],
  },
];

const outcomes = [
  {
    label: "Hours reclaimed",
    body: "Per-employee weekly time savings on manual, repetitive tasks — measured against pre-engagement baselines.",
  },
  {
    label: "Operating cost reduction",
    body: "Measurable departmental cost impact when custom automations replace recurring manual processes.",
  },
  {
    label: "AI fluency",
    body: "Every team member trained on workflows contextualized to their role — not generic prompt courses.",
  },
  {
    label: "Compounding advantage",
    body: "Systems and documentation that keep improving inside your team after we transition out.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Implementation and Transformation",
  name: "AI Transformation",
  provider: {
    "@type": "Organization",
    name: site.name,
    url: "https://thetks.com",
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.established),
  },
  description: pageDescription,
  areaServed: "United States",
  serviceOutput: "Production AI workflows, trained internal teams, sustainable productivity gains.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Transformation Engagement Tiers",
    itemListElement: tiers.map((t, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: t.name,
        description: t.audience,
      },
    })),
  },
};

export default function AITransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero-bg text-canvas">
        <Container className="pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="flex items-center gap-3">
            <span className="num-label !text-accent">Services</span>
            <span className="h-px w-10 bg-canvas/30" />
            <span className="eyebrow !text-canvas/70">AI Transformation</span>
          </div>

          <h1 className="hero-headline mt-8 max-w-[20ch] text-canvas">
            Turn AI from a tool into a system.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 lg:col-span-6 text-[18px] leading-relaxed text-canvas/85">
              We embed with your team for 90 days. We deploy AI tools and
              automations across your highest-leverage workflows, train your
              people to own them, and leave behind self-sustaining systems
              that continue compounding in value after we&apos;re gone.
            </p>
            <div className="md:col-span-6 lg:col-start-8 lg:col-span-5 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Schedule a strategy session</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#methodology"
                className="text-[13px] text-canvas/85 hover:text-canvas link-underline"
              >
                See the methodology
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* THE GAP */}
      <section className="py-24">
        <Container>
          <SectionHeading
            index="I."
            eyebrow="The implementation gap"
            title="Most AI initiatives stall after the pilot."
            lede="Global corporate spending on generative AI is projected to exceed $200 billion by 2027. Yet research consistently shows the majority of AI projects never move past experimentation. The barrier isn't the technology. It's implementation."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12 border-t border-line pt-12">
            {struggles.map((s) => (
              <div key={s.num}>
                <span className="num-label">{s.num}</span>
                <h3 className="display mt-3 text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft max-w-prose">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY TKS */}
      <section className="py-24 border-y border-line bg-canvas-2">
        <Container>
          <SectionHeading
            index="II."
            eyebrow="How we work"
            title="We embed. We deploy. We document. We leave."
            lede="A dedicated external partner resolves the constraints that hold internal teams back: singular focus, cross-industry expertise, measurement frameworks from day one, and a time-bound mandate that prevents scope creep."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-x-10 gap-y-12 border-t border-line pt-12">
            {pillars.map((p) => (
              <div key={p.num}>
                <span className="num-label">{p.num}</span>
                <h3 className="display mt-3 text-2xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="py-24 scroll-mt-24">
        <Container>
          <SectionHeading
            index="III."
            eyebrow="Engagement methodology"
            title="A 90-day framework, refined across deployments."
            lede="Rigorous in structure, adaptive in execution. Four phases that move from diagnosis to self-sufficient internal capability — with clear milestones, measurable outcomes, and a hard end date that keeps every engagement urgent."
          />

          <ol className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-10">
            {phases.map((phase) => (
              <li
                key={phase.num}
                className="border-t border-line pt-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="num-label">{phase.num} / {phase.title}</span>
                  <span className="num-label !text-accent">{phase.weeks}</span>
                </div>
                <h3 className="display mt-4 text-3xl text-ink">{phase.title}.</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* TIERS */}
      <section className="py-24 border-y border-line bg-canvas-2">
        <Container>
          <SectionHeading
            index="IV."
            eyebrow="Engagement tiers"
            title="Three tiers. One outcome: AI that runs alongside your team."
            lede="Every engagement runs the same 90-day framework. The difference is depth — how many workflows we touch, how much we build vs. configure, and how deeply we embed."
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="bg-canvas border border-line rounded-lg p-8 flex flex-col gap-5"
              >
                <header>
                  <p className="num-label">Tier</p>
                  <h3 className="display mt-2 text-3xl text-ink">{tier.name}</h3>
                  <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                    {tier.audience}
                  </p>
                </header>

                <ul className="space-y-2.5 text-[14px] text-ink-soft border-t border-line pt-5">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2.5"
                    >
                      <span aria-hidden="true" className="text-accent">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-12 text-[15px] text-ink-soft">
            We&apos;ll match you to the right tier on a call.{" "}
            <Link href="/contact" className="text-ink link-underline">
              Get in touch →
            </Link>
          </p>
        </Container>
      </section>

      {/* OUTCOMES */}
      <section className="py-24">
        <Container>
          <SectionHeading
            index="V."
            eyebrow="What to expect"
            title="Productivity gains that compound after we leave."
            lede="Our success is measured by whether the systems we build keep performing once we transition out — not by whether you renew."
          />

          <dl className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-line pt-12">
            {outcomes.map((o) => (
              <div key={o.label}>
                <dt className="num-label !text-accent">{o.label}</dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {o.body}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-line bg-canvas-2">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="num-label">VI. / Next step</p>
              <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                Ready to start your AI transformation?
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                A complimentary strategy session: we&apos;ll assess your
                current state, identify preliminary opportunities, and
                determine which engagement tier fits your organization.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book a strategy session</span>
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
