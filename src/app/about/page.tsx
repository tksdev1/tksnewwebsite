import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About · TechKey Solutions",
  description:
    "Since 2016, TechKey Solutions has been a trusted technology partner delivering CRM, ERP, AI, and integration solutions.",
};

const team = [
  {
    name: "Yuval De-Medonsa",
    role: "Lead Consultant",
    bio: "15+ years across software, data, analytics and BI. Background in financial services and solar. Off the clock: racing, car shows and rallies.",
  },
  {
    name: "Joe Palenzuela",
    role: "Consultant",
    bio: "Data scientist with 7+ years of experience. Owns problems end-to-end. Culinary experimenter in his spare time.",
  },
  {
    name: "Kimberly Parker",
    role: "Consultant",
    bio: "Software development grad focused on building accessible features. Fan of video games, series, movies and collectibles.",
  },
  {
    name: "Mikey Patel",
    role: "Lead Developer",
    bio: "Leads engineering delivery across our CRM, AI and integration projects.",
  },
  {
    name: "Rupesh Chhabra",
    role: "Developer",
    bio: "Full-stack developer shipping reliable integrations and web apps.",
  },
  {
    name: "Gaurav Sadawarte",
    role: "Developer",
    bio: "Developer focused on clean, maintainable product engineering.",
  },
  {
    name: "Ross Cohen",
    role: "Analyst / Project Manager",
    bio: "Keeps engagements on track and outcomes in focus — bridging clients and the build team.",
  },
];

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

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line">
        <Container className="pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="flex items-center gap-3">
            <span className="num-label">About</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Est. {site.established}</span>
          </div>
          <h1 className="hero-headline mt-8 text-ink max-w-[20ch]">
            A trusted technology partner since 2016.
          </h1>
          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <p className="lg:col-span-7 text-[18px] leading-relaxed text-ink-soft">
              TechKey Solutions offers comprehensive software solutions — CRM
              (Salesforce, MS Dynamics), ERP, app development and
              website/integration services — along with cutting-edge
              Artificial Intelligence tools. We help businesses make
              data-driven decisions, streamline operations and act on
              predictive analytics.
            </p>
            <div className="lg:col-span-4 lg:col-start-9">
              <dl className="grid grid-cols-2 gap-6">
                <Stat label="Founded" value="2016" />
                <Stat label="Team" value="7" />
                <Stat label="Practice areas" value="04" />
                <Stat label="Platforms" value="18+" />
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 bg-canvas-2 border-b border-line">
        <Container>
          <figure className="max-w-4xl">
            <p className="display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
              &ldquo;We build for the business that wants technology to be an
              advantage, not just an expense line.&rdquo;
            </p>
            <figcaption className="mt-10 flex items-center gap-4 num-label">
              <span className="h-px w-10 bg-line-strong" />
              Yuval De-Medonsa, Lead Consultant
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <Container>
          <SectionHeading
            index="I."
            eyebrow="Principles"
            title="How we show up for clients."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12 border-t border-line pt-12">
            {values.map((v, i) => (
              <div key={v.title}>
                <span className="num-label">0{i + 1}</span>
                <h3 className="display mt-3 text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft max-w-prose">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="py-24 border-y border-line bg-canvas-2">
        <Container>
          <SectionHeading
            index="II."
            eyebrow="The team"
            title="Small team. Big range of expertise."
          />
          <ul className="mt-16 divide-y divide-line border-y border-line">
            {team.map((member) => (
              <li
                key={member.name}
                className="grid md:grid-cols-12 gap-6 py-8 items-baseline hover:bg-canvas/50 transition px-2 -mx-2"
              >
                <div className="md:col-span-1">
                  <span className="num-label">{initials(member.name)}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="display text-2xl text-ink leading-tight">
                    {member.name}
                  </h3>
                  <p className="num-label mt-2">{member.role}</p>
                </div>
                <p className="md:col-span-7 text-[15px] leading-relaxed text-ink-soft">
                  {member.bio}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="num-label">III. / Meet the team</p>
              <h2 className="display mt-6 text-5xl sm:text-6xl leading-[1.02] text-ink max-w-[18ch]">
                Let&apos;s trade notes on your project.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-xl">
                Thirty minutes with Yuval. No sales pitch — just a clear read on
                what&apos;s possible, what&apos;s not, and where to start.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book a meeting with Yuval</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/services" className="btn-secondary">
                <span>Explore our services</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line-strong pt-4">
      <dt className="num-label">{label}</dt>
      <dd className="display mt-2 text-4xl text-ink">{value}</dd>
    </div>
  );
}
