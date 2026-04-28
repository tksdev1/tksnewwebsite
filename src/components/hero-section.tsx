"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./container";
import { site } from "@/lib/site";

const headline = "The key to all your software needs.";

export function HeroSection() {
  const words = headline.split(" ");

  return (
    <section className="hero-bg text-canvas relative overflow-hidden">
      {/* Floating ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <Container className="pt-24 pb-28 lg:pt-32 lg:pb-36 relative">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="num-label !text-accent">Est. {site.established}</span>
          <span className="h-px w-10 bg-canvas/30" />
          <span className="eyebrow !text-canvas/70">Boutique consulting firm</span>
        </motion.div>

        {/* Headline — word-by-word reveal */}
        <h1 className="hero-headline mt-8 max-w-[18ch] text-canvas" aria-label={headline}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{ marginRight: "0.28em" }}
              initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.075,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Body + CTA */}
        <motion.div
          className="mt-12 grid md:grid-cols-12 gap-10 items-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
        >
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
        </motion.div>
      </Container>
    </section>
  );
}
