import Container from "./Container";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[color:var(--paper)] pt-20 sm:pt-28 lg:pt-36 pb-24 sm:pb-32"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Display headline */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                01
              </span>
              <span className="h-px w-8 bg-[color:var(--hairline-strong)]" />
              <span className="eyebrow">A medical billing partner</span>
            </div>

            <h1
              className="font-display mt-8 text-[2.65rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[1.02] text-[color:var(--ink)] tracking-[-0.02em]"
              style={{ fontWeight: 400 }}
            >
              Medical billing,{" "}
              <em className="italic text-[color:var(--accent)]" style={{ fontWeight: 400 }}>
                done quietly.
              </em>
            </h1>

            <p className="mt-7 max-w-xl text-[1.05rem] sm:text-[1.1rem] leading-[1.7] text-[color:var(--ink-muted)]">
              We help small and mid-sized U.S. healthcare practices submit
              cleaner claims, follow up faster, and get paid on time —
              without the cost of a large in-house billing team.
            </p>

            <div className="mt-10 flex items-center gap-8 sm:gap-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-[14px] tracking-wide text-[color:var(--ink)]"
              >
                <span className="border-b border-[color:var(--ink)] pb-1">
                  Start a conversation
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#services"
                className="text-[14px] tracking-wide text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
              >
                See what we do
              </a>
            </div>
          </div>

          {/* Quiet pricing pull-quote */}
          <div className="lg:col-span-4">
            <div className="border-t border-[color:var(--hairline-strong)] pt-7">
              <p className="eyebrow">Performance-aligned</p>
              <p
                className="font-display mt-3 text-[3.4rem] sm:text-[4rem] leading-none text-[color:var(--ink)] numeral"
                style={{ fontWeight: 400 }}
              >
                96.5<span className="text-[color:var(--ink-soft)]">%</span>
              </p>
              <p className="mt-2 text-[15px] leading-[1.55] text-[color:var(--ink-muted)] max-w-[18rem]">
                of every dollar collected stays with your practice. We charge
                a flat <span className="text-[color:var(--ink)]">3.5%</span> on
                net collections — nothing on what we don&apos;t collect.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* hairline footer of hero */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 mt-20 sm:mt-28">
        <div className="border-t border-[color:var(--hairline)]" />
      </div>
    </section>
  );
}
