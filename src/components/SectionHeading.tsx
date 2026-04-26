interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Editorial section heading.
 * Pattern:  "01 — Pricing"  (eyebrow row in small caps + numeral)
 *           Big serif title
 *           One sentence in body face
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";
  const maxW = align === "center" ? "max-w-2xl" : "max-w-2xl";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {(index || eyebrow) && (
        <div className="flex items-center gap-3">
          {index && (
            <span className="numeral text-[color:var(--ink-soft)] text-sm">
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span className="h-px w-6 bg-[color:var(--hairline-strong)]" />
          )}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="font-display mt-5 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.05] text-[color:var(--ink)]"
          style={{ fontWeight: 400 }}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[1.02rem] leading-[1.7] text-[color:var(--ink-muted)] ${maxW}`}>
          {description}
        </p>
      )}
    </div>
  );
}
