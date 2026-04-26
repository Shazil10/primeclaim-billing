import Container from "./Container";

const SPECIALTIES = [
  "Dental",
  "Physical Therapy",
  "Mental & Behavioral Health",
  "Primary Care",
  "Chiropractic",
  "Specialty Practices",
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-[color:var(--paper)] py-20 sm:py-24 border-t border-[color:var(--hairline)]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                05
              </span>
              <span className="h-px w-8 bg-[color:var(--accent)]/40" />
              <span className="eyebrow">Built for</span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <p
              className="font-display text-[1.7rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[1.25] text-[color:var(--ink)] tracking-[-0.015em]"
              style={{ fontWeight: 400 }}
            >
              Small and mid-sized practices in{" "}
              {SPECIALTIES.map((s, i) => (
                <span key={s}>
                  <em
                    className="italic text-[color:var(--accent)]"
                    style={{ fontWeight: 400 }}
                  >
                    {s}
                  </em>
                  {i === SPECIALTIES.length - 2
                    ? ", and "
                    : i < SPECIALTIES.length - 1
                    ? ", "
                    : "."}
                </span>
              ))}
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-[color:var(--ink-muted)]">
              We adapt to your existing systems and clinical rhythm.
              Recurring-visit specialties, complex payer mixes, and
              specialty-specific coding rules included.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
