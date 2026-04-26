interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";
  const maxWidth = align === "center" ? "max-w-2xl" : "";

  return (
    <div className={`${alignClasses} ${maxWidth} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--navy-deep)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
