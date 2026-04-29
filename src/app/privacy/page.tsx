import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy · TechKey Solutions",
  description:
    "How TechKey Solutions handles information submitted through thetks.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="flex items-center gap-3">
            <span className="num-label">Legal</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Privacy policy</span>
          </div>
          <h1 className="display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em] text-ink max-w-3xl">
            Privacy Policy.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3">
              <div className="border-t border-line-strong pt-4">
                <p className="num-label">Last updated</p>
                <p className="display mt-2 text-xl text-ink">April 2026</p>
              </div>
            </aside>
            <div className="lg:col-span-8 lg:col-start-5 max-w-[68ch]">
              <div className="prose-content text-[16px]">
                <p>
                  TechKey Solutions LLC (&quot;TechKey&quot;, &quot;we&quot;, &quot;us&quot;)
                  operates thetks.com. This page explains what information we
                  collect through the site and how we use it.
                </p>

                <h2>Information you submit</h2>
                <p>
                  When you use our contact form, we collect the name, email
                  and message you provide. We use this information solely to
                  respond to your inquiry.
                </p>

                <h2>Analytics</h2>
                <p>
                  We may use privacy-respecting analytics to understand how
                  the site is used in aggregate. We do not sell personal
                  information.
                </p>

                <h2>Cookies</h2>
                <p>
                  The site uses only the cookies required for core
                  functionality.
                </p>

                <h2>Contact</h2>
                <p>
                  Questions about this policy? Email us at{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
                  <a href={site.phoneHref}>{site.phone}</a>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
