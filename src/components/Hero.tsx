import Container from "./Container";
import { ArrowRight } from "./icons";

const TERMS = [
  {
    label: "Net collections",
    body: "Never on gross billed charges.",
  },
  {
    label: "No setup",
    body: "No onboarding fees, no contract minimums.",
  },
  {
    label: "Special scope",
    body: "Old AR cleanup and recovery quoted separately.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[color:var(--paper)] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24"
    >
      <Container>
        {/* Top row: headline + intro on the left, CTAs */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                01
              </span>
              <span className="h-px w-8 bg-[color:var(--accent)]/45" />
              <span className="eyebrow">A medical billing partner</span>
            </div>

            <h1
              className="font-display mt-8 text-[2.65rem] sm:text-[3.6rem] lg:text-[4.4rem] leading-[1.02] text-[color:var(--ink)] tracking-[-0.02em]"
              style={{ fontWeight: 400 }}
            >
              Medical billing,{" "}
              <em
                className="italic text-[color:var(--accent)]"
                style={{ fontWeight: 400 }}
              >
                done quietly.
              </em>
            </h1>

            <p className="mt-7 max-w-xl text-[1.05rem] sm:text-[1.1rem] leading-[1.7] text-[color:var(--ink-muted)]">
              We help small and mid-sized U.S. healthcare practices submit
              cleaner claims, follow up faster, and get paid on time, without
              the cost of a large in-house billing team.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-7">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--accent)] px-6 py-3 text-[14px] tracking-wide text-white shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-[color:var(--accent-deep)] transition-colors"
              >
                Start a conversation
                <ArrowRight
                  className="transition-transform group-hover:translate-x-0.5"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="#services"
                className="text-[14px] tracking-wide text-[color:var(--ink-muted)] hover:text-[color:var(--accent)] transition-colors"
              >
                See what we do
              </a>
            </div>
          </div>

          {/* Pricing block: number + sentence + terms */}
          <aside
            id="pricing"
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[color:var(--accent)]/20 scroll-mt-24"
          >
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                02
              </span>
              <span className="h-px w-8 bg-[color:var(--accent)]/45" />
              <span className="eyebrow">Performance-aligned</span>
            </div>

            <p
              className="font-display numeral mt-5 text-[6.5rem] sm:text-[8.5rem] lg:text-[10.5rem] leading-[0.85] text-[color:var(--accent-deep)] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              96.5
              <span className="text-[color:var(--accent)]/50">%</span>
            </p>

            <p className="mt-5 max-w-md text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              of every dollar collected stays with your practice. We charge
              a flat{" "}
              <span className="text-[color:var(--ink)] font-medium">
                3.5%
              </span>{" "}
              on net collections, and nothing on what we don&apos;t collect.
            </p>

            <ul className="mt-8 border-t border-[color:var(--accent)]/20">
              {TERMS.map((term) => (
                <li
                  key={term.label}
                  className="grid grid-cols-12 gap-3 border-b border-[color:var(--hairline-strong)]/70 py-4"
                >
                  <span className="eyebrow col-span-12 sm:col-span-5 pt-0.5">
                    {term.label}
                  </span>
                  <p className="col-span-12 sm:col-span-7 text-[13.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                    {term.body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[12.5px] text-[color:var(--ink-soft)] italic">
              Pricing is confirmed in writing before any work begins.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
