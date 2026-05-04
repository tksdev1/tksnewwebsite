import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} · TechKey Solutions`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      {/* HEADER */}
      <section className="border-b border-line">
        <Container className="pt-16 pb-16 lg:pt-24 lg:pb-20">
          <Link
            href="/blog"
            className="num-label hover:text-ink transition inline-flex items-center gap-2"
          >
            ← Journal
          </Link>
          <div className="mt-12 flex items-center gap-3">
            <span className="num-label">{formatDate(post.date)}</span>
            {post.author && (
              <>
                <span className="h-px w-10 bg-line-strong" />
                <span className="num-label">{post.author}</span>
              </>
            )}
          </div>
          <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em] text-ink max-w-4xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-8 max-w-3xl text-[20px] leading-relaxed text-ink-soft">
              {post.description}
            </p>
          )}
        </Container>
      </section>

      {/* BODY */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-4 border-t border-line-strong pt-4">
                <p className="num-label">Written by</p>
                <p className="display text-xl text-ink">
                  {post.author ?? "TechKey Solutions"}
                </p>
              </div>
            </aside>
            <div className="lg:col-span-8 lg:col-start-5 max-w-[68ch]">
              <div
                className="prose-content text-[17px]"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <div className="mt-20 border-t border-line pt-10">
                <p className="num-label">Next</p>
                <div className="mt-3 flex items-baseline justify-between gap-6">
                  <h3 className="display text-3xl text-ink leading-[1.1]">
                    Work with us.
                  </h3>
                  <a
                    href="https://calendly.com/techkeysolutions/15min?utm_medium=email&_hsenc=p2ANqtz-8Uo4hFPiyIJMLoVJ8ysbViG3qZWXmaEuPpcbIaUvunpYvYq_UzMMnn-t7eYLYmhtyL0H5joyGZbb9P3_TYzOb-XHeAHA&_hsmi=2&utm_content=2&utm_source=hs_email&month=2026-05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[14px] text-ink link-underline"
                  >
                    Book a Consultation
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
