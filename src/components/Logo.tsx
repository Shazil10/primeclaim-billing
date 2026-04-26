interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

/**
 * Editorial monogram + wordmark.
 * Hairline circle with an italic Fraunces "P" inside, set against the loaded
 * display serif. No image asset, so it stays crisp at every size.
 */
export default function Logo({ className = "", size = "md" }: LogoProps) {
  const markSize = size === "sm" ? "h-7 w-7 text-[0.95rem]" : "h-9 w-9 text-[1.15rem]";
  const wordSize = size === "sm" ? "text-[1.25rem]" : "text-[1.5rem]";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="PrimeClaim"
    >
      <span
        aria-hidden
        className={`relative inline-flex ${markSize} items-center justify-center rounded-full border border-[color:var(--accent)] text-[color:var(--accent)]`}
      >
        <span
          className="font-display italic leading-none translate-y-[-1px]"
          style={{ fontWeight: 500 }}
        >
          P
        </span>
      </span>
      <span
        className={`font-display italic leading-none tracking-[-0.01em] text-[color:var(--accent)] ${wordSize}`}
        style={{ fontWeight: 500 }}
      >
        PrimeClaim
      </span>
    </span>
  );
}
