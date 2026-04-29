import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const pageTitle = "AI Automation for Business — Assessment, Implementation & Optimization";
const pageDescription =
  "TechKey Solutions helps small and mid-sized businesses implement practical AI automation — from a $4,500 workflow assessment to full-scale AI transformation. Real outcomes, not experiments.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI automation for small business",
    "AI business optimization",
    "AI workflow automation",
    "AI implementation services",
    "lead automation",
    "customer service automation",
    "AI consulting for SMB",
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
    name: "Starter AI Launch",
    audience: "Small businesses wanting immediate efficiency wins.",
    deliverables: [
      "1–2 workflow automations",
      "Lead follow-up automation",
      "Basic chatbot setup",
      "CRM automation cleanup",
      "Basic reporting dashboard",
      "Staff training & implementation support",
    ],
  },
  {
    name: "Growth AI Package",
    audience: "Growing businesses automating multiple functions.",
    deliverables: [
      "Everything in Starter, plus:",
      "Multi-department workflow automation",
      "Customer service & marketing automation",
      "Sales & document automation",
      "Advanced dashboards",
      "SOP redesign",
    ],
  },
  {
    name: "Scale AI Transformation",
    audience: "Mid-sized businesses seeking broader transformation.",
    deliverables: [
      "Everything in Growth, plus:",
      "Custom AI assistants",
      "Advanced integrations & cross-platform automation",
      "Executive dashboards",
      "Department transformation",
      "AI operating model design",
    ],
  },
];

const outcomes = [
  {
    label: "Reduced manual work",
    body: "Automations eliminate the repetitive, high-volume tasks your team spends hours on every week.",
  },
  {
    label: "Faster customer response",
    body: "AI-powered customer service and lead follow-up that responds in minutes — not hours or days.",
  },
  {
    label: "Scalable operations",
    body: "Handle more volume without proportionally growing headcount — your systems do more of the lifting.",
  },
  {
    label: "Measurable ROI",
    body: "Every engagement includes ROI projections upfront and performance tracking throughout — so you always know what you&apos;re getting.",
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
  serviceOutput: "Deployed AI automations, reduced manual work, improved customer response times, measurable ROI.",
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
            AI automation that actually works.
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 lg:col-span-6 text-[18px] leading-relaxed text-canvas/85">
              We don&apos;t just deploy AI tools — we ensure they drive
              measurable business results. From workflow assessment to live
              automation to team training, we handle the full process so your
              business keeps running better long after launch.
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
            eyebrow="Implementation packages"
            title="Three packages. One outcome: AI that drives real business results."
            lede="The difference is depth — how many workflows we automate, how many departments we touch, and how transformative the scope. Every package includes mandatory post-launch support."
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
            Not sure which fits? We&apos;ll figure it out together on a call.{" "}
            <Link href="/services" className="text-ink link-underline">
              See full package details & pricing →
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
            title="Real operational outcomes — not experimental AI."
            lede="We measure success by the business results your automations deliver — reduced manual work, faster response times, and teams that can scale without burning out."
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
