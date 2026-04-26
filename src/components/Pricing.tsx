import Container from "./Container";
import SectionHeading from "./SectionHeading";

const NOTES = [
  {
    label: "Net collections",
    body: "We&rsquo;re paid on revenue actually collected and posted — not on gross billed charges.",
  },
  {
    label: "No setup fees",
    body: "No onboarding charges, no contract minimums. We start when you&rsquo;re ready.",
  },
  {
    label: "Special scope",
    body: "Old AR cleanup, recovery work, and complex specialties are quoted separately.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[color:var(--paper-deep)] py-24 sm:py-32 border-y border-[color:var(--hairline-strong)]"
    >
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Pricing"
          title="One number. Nothing hidden."
          description="Our pricing is performance-aligned: a single flat rate on what your practice actually collects."
        />

        {/* The number */}
        <div className="mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">You keep</p>
            <p
              className="font-display numeral mt-3 text-[7rem] sm:text-[10rem] lg:text-[13rem] leading-[0.85] text-[color:var(--ink)] tracking-[-0.04em]"
              style={{ fontWeight: 300 }}
            >
              96.5<span className="text-[color:var(--ink-soft)]">%</span>
            </p>
            <p className="mt-6 text-[1.02rem] leading-[1.7] text-[color:var(--ink-muted)] max-w-md">
              of every dollar collected. We charge a flat{" "}
              <span className="text-[color:var(--ink)] font-medium">3.5%</span>{" "}
              on net collections, and nothing on what we don&rsquo;t collect.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ul className="border-t border-[color:var(--hairline-strong)]">
              {NOTES.map((note) => (
                <li
                  key={note.label}
                  className="grid grid-cols-12 gap-4 border-b border-[color:var(--hairline-strong)] py-5"
                >
                  <span className="eyebrow col-span-12 sm:col-span-4 pt-1">
                    {note.label}
                  </span>
                  <p
                    className="col-span-12 sm:col-span-8 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]"
                    dangerouslySetInnerHTML={{ __html: note.body }}
                  />
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-[14px] tracking-wide text-[color:var(--ink)]"
            >
              <span className="border-b border-[color:var(--ink)] pb-0.5">
                Request a written quote
              </span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
