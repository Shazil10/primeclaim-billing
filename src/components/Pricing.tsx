import Container from "./Container";
import SectionHeading from "./SectionHeading";

const TERMS = [
  {
    label: "Net collections",
    body: "Paid only on revenue that actually posts to your account, never on gross billed charges.",
  },
  {
    label: "No setup",
    body: "No onboarding fees, no contract minimums.",
  },
  {
    label: "Special scope",
    body: "Old AR cleanup and recovery work are quoted separately.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[color:var(--paper-deep)] py-24 sm:py-28 border-y border-[color:var(--hairline)]"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              index="03"
              eyebrow="Pricing"
              title="The terms, in three lines."
              align="left"
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-[color:var(--accent)]/35">
              {TERMS.map((term) => (
                <li
                  key={term.label}
                  className="grid grid-cols-12 gap-4 sm:gap-6 border-b border-[color:var(--hairline-strong)] py-6"
                >
                  <span className="eyebrow col-span-12 sm:col-span-4 pt-1">
                    {term.label}
                  </span>
                  <p className="col-span-12 sm:col-span-8 text-[15px] leading-[1.7] text-[color:var(--ink-muted)]">
                    {term.body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[14px] text-[color:var(--ink-soft)] italic">
              Pricing is confirmed in writing before any work begins.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
