import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

type ServiceGroup = {
  num: string;
  title: string;
  intro: string;
  items: string[];
  href?: string;
  hrefLabel?: string;
};

export const metadata: Metadata = {
  title: "Services · TechKey Solutions",
  description:
    "CRM, ERP, AI, websites, integrations and app development — delivered by a boutique team that's been shipping since 2016.",
};

const serviceGroups: ServiceGroup[] = [
  {
    num: "01",
    title: "Business Software",
    intro:
      "The operational backbone of your company — configured to how you actually work.",
    items: [
      "CRM (Salesforce, MS Dynamics, HubSpot, Zoho)",
      "ERP",
      "Ticketing systems",
      "Property management software",
      "Process mapping & optimization",
      "Project management (Agile / Scrum)",
    ],
  },
  {
    num: "02",
    title: "Artificial Intelligence",
    intro:
      "Practical AI deployments that pay for themselves — not science projects.",
    items: [
      "Marketing automation",
      "Virtual assistance",
      "Chatbots",
      "Smart document processing",
      "Predictive maintenance",
    ],
    href: "/services/ai",
    hrefLabel: "Read the full AI Transformation playbook",
  },
  {
    num: "03",
    title: "Websites & Integrations",
    intro:
      "Customer-facing experiences and the plumbing that ties your stack together.",
    items: [
      "E-commerce",
      "CMS (WordPress, Appfolio)",
      "APIs & integrations",
      "Web & mobile apps",
    ],
  },
  {
    num: "04",
    title: "App Development",
    intro:
      "Mobile and cross-platform apps built for reliability and scale.",
    items: ["Hybrid apps", "Native apps"],
  },
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
  "Elevated Living",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="flex items-center gap-3">
            <span className="num-label">Services</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">What we do</span>
          </div>
          <h1 className="hero-headline mt-8 text-ink max-w-[20ch]">
            One partner for the full software stack.
          </h1>
          <p className="mt-12 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
            From CRM and ERP to AI, websites, integrations and mobile apps —
            we build and deliver the systems that run your business.
          </p>
        </Container>
      </section>

      {/* SERVICE GROUPS */}
      <section className="py-24">
        <Container>
          <ul className="divide-y divide-line border-y border-line">
            {serviceGroups.map((group) => (
              <li
                key={group.num}
                className="py-14 grid lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-4">
                  <span className="num-label">{group.num}</span>
                  <h2 className="display mt-4 text-4xl lg:text-5xl text-ink leading-[1.05]">
                    {group.title}
                  </h2>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-[16px] leading-relaxed text-ink-soft">
                    {group.intro}
                  </p>
                  {group.href && group.hrefLabel && (
                    <Link
                      href={group.href}
                      className="mt-5 inline-flex items-center gap-2 text-[14px] text-ink link-underline"
                    >
                      {group.hrefLabel} →
                    </Link>
                  )}
                </div>
                <ul className="lg:col-span-4 space-y-3 text-[15px] text-ink border-t border-line pt-5 lg:border-t-0 lg:pt-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-b border-line pb-3 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-canvas-2 border-y border-line">
        <Container>
          <SectionHeading
            index="V."
            eyebrow="Platforms we work on"
            title="Fluent in the tools you already use."
            lede="We implement, customize and integrate across the platforms that run modern businesses. If it's not here, ask — we've probably worked with it."
          />

          <div className="mt-14 border-t border-l border-line grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p}
                className="border-r border-b border-line px-5 py-6 hover:bg-canvas transition"
              >
                <span className="display text-[20px] text-ink">{p}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="num-label">VI. / Next step</p>
              <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                Not sure where to start?
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                Book a free consultation and we&apos;ll walk through your
                current stack, pain points, and what a realistic first
                engagement could look like.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book a consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="btn-secondary">
                <span>Meet the team</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
