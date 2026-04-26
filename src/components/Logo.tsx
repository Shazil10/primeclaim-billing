interface LogoProps {
  className?: string;
  inline?: boolean;
}

/**
 * Typographic wordmark — uses the loaded display serif (Fraunces).
 * No gradient mark, no icon. Refined, editorial, calm.
 */
export default function Logo({ className = "", inline = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-2 ${className}`}
      aria-label="PrimeClaim Billing"
    >
      <span
        className="font-display text-[1.35rem] sm:text-[1.45rem] leading-none text-[color:var(--ink)] tracking-tight"
        style={{ fontWeight: 500, fontStyle: "italic" }}
      >
        PrimeClaim
      </span>
      {!inline && (
        <span
          aria-hidden
          className="hidden sm:inline-block h-[1px] w-4 bg-[color:var(--hairline-strong)] translate-y-[-4px]"
        />
      )}
      <span
        className="text-[0.62rem] uppercase tracking-[0.32em] text-[color:var(--ink-muted)] leading-none"
        style={{ fontWeight: 500 }}
      >
        Billing
      </span>
    </span>
  );
}
