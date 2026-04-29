import { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {(index || eyebrow) && (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {index && <span className="num-label">{index}</span>}
          {index && eyebrow && <span className="h-px w-8 bg-line-strong" />}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="display mt-5 text-4xl sm:text-5xl leading-[1.02] text-ink">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{lede}</p>
      )}
    </div>
  );
}
