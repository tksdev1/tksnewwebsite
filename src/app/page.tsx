import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HeroSection } from "@/components/hero-section";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

const principles = [
  {
    title: "We tie every project to a real number.",
    body: "More leads converted, hours saved, support tickets handled automatically. If we can't attach a measurable outcome to an automation, we won't pitch it to you.",
  },
  {
    title: "We stay involved past launch day.",
    body: "You get the workflow analysis, the build, the staff training, and post-launch tuning — included. The automations that fail are usually the ones nobody's checking on after go-live.",
  },
  {
    title: "Built for your budget, not a Fortune 500's.",
    body: "Our work is sized for small and mid-sized teams. Practical scope, fast timelines, and investments that make sense at your stage of growth.",
  },
  {
    title: "Your automations should evolve as you do.",
    body: "Every engagement includes mandatory post-launch support. Your business keeps changing — your workflows need to keep up.",
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
  "Your CRM shouldn't need a babysitter. We set up follow-up sequences, lead scoring, and pipeline updates that run automatically — so your team focuses on conversations, not data entry.",
  "An AI that handles routine questions around the clock, routes the complex ones to the right person, and logs everything. Your support team stops drowning in repeat inquiries.",
  "No more back-and-forth to find a time. Intelligent scheduling that coordinates staff, clients, and resources without a single email chain.",
  "Bad CRM data is a silent killer. We clean up duplicate records, automate data entry, and build workflows that keep your pipeline accurate without manual upkeep.",
  "Generate proposals, contracts, and reports automatically. Cut hours from every deal cycle without anyone touching a template.",
  "A custom AI trained on your team's processes — answers questions, surfaces the right information, and helps new staff get up to speed faster.",
  "Real-time visibility into what actually matters. Dashboards that surface the metrics leadership needs, automatically updated, no spreadsheet required.",
  "We map your multi-step workflows, identify every manual handoff, and build something that runs itself. Less human error, fewer dropped balls.",
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

      {/* WHO WE ARE */}
      <section className="py-16 border-b border-line">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-10 items-baseline">
              <p className="lg:col-span-7 text-[19px] leading-relaxed text-ink-soft">
                We&apos;re a seven-person team based in Phoenix. We&apos;ve been building CRM,
                ERP, and integration solutions since 2016 — and for the past few years,
                most of what we build is AI automation. We work directly with the people
                who&apos;ll use what we build, and we stay involved long after the launch.
              </p>
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                <a href="/services" className="text-[14px] link-underline text-ink-soft">See our packages →</a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* PRINCIPLES / WHY */}
      <section className="py-24">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="I."
              eyebrow="Our approach"
              title="What makes us different."
              lede="A lot of AI consultants will deploy something and disappear. We work differently — and these four things are why our clients keep coming back."
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

      {/* WHAT WE BUILD */}
      <section className="py-24 border-t border-line">
        <Container>
          <AnimateIn>
            <SectionHeading
              index="II."
              eyebrow="What we build"
              title="The automations our clients ask for most."
              lede="These aren't theoretical capabilities — every one of these is something we've deployed and tuned for a real business. Most projects start with one or two, then expand from there."
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
                <p className="num-label">III. / Next step</p>
                <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                  Start with a conversation, not a contract.
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                  We&apos;ll walk through your workflows together, find where AI
                  actually moves the needle, and put together an honest 60-day
                  plan. First call is free — no pitch, no pressure.
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
