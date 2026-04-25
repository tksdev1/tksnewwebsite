import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal · TechKey Solutions",
  description:
    "Practical notes on CRM, ERP, AI, integrations and the systems that run modern businesses.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="flex items-center gap-3">
            <span className="num-label">Journal</span>
            <span className="h-px w-10 bg-line-strong" />
            <span className="eyebrow">Field notes</span>
          </div>
          <h1 className="hero-headline mt-8 text-ink max-w-[20ch]">
            Notes from the field.
          </h1>
          <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-ink-soft">
            Practical write-ups on CRM, ERP, AI and the integrations that
            actually move the needle for real businesses.
          </p>
        </Container>
      </section>

      {posts.length === 0 ? (
        <section className="py-28">
          <Container>
            <p className="num-label">No posts yet — check back soon.</p>
          </Container>
        </section>
      ) : (
        <>
          {/* FEATURED */}
          {featured && (
            <section className="py-20 border-b border-line">
              <Container>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid lg:grid-cols-12 gap-10 items-end"
                >
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className="num-label">Latest</span>
                      <span className="h-px w-10 bg-line-strong" />
                      <span className="num-label">{formatDate(featured.date)}</span>
                    </div>
                    <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-ink">
                      {featured.title}
                    </h2>
                    <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
                      {featured.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[13px] text-ink link-underline">
                      Read the piece
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                  <div className="lg:col-span-4 lg:col-start-9">
                    {featured.author && (
                      <div className="border-t border-line-strong pt-4">
                        <p className="num-label">Author</p>
                        <p className="display mt-2 text-2xl text-ink">
                          {featured.author}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </Container>
            </section>
          )}

          {/* ARCHIVE */}
          {rest.length > 0 && (
            <section className="py-20">
              <Container>
                <p className="eyebrow">Archive</p>
                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {rest.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group grid md:grid-cols-12 gap-6 py-8 items-baseline hover:bg-canvas-2/60 -mx-2 px-2 transition"
                      >
                        <span className="md:col-span-2 num-label">
                          {formatDate(post.date)}
                        </span>
                        <div className="md:col-span-7">
                          <h3 className="display text-2xl sm:text-3xl text-ink leading-[1.1]">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <span className="md:col-span-2 md:col-start-11 num-label text-right">
                          {post.author ?? ""}
                        </span>
                        <span
                          aria-hidden="true"
                          className="hidden md:block md:col-span-1 text-right text-ink-soft group-hover:text-ink group-hover:translate-x-0.5 transition"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </section>
          )}
        </>
      )}
    </>
  );
}
