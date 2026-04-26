import Container from "./Container";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Do you charge on billed charges or collections?",
    a: "Net collections only. Money actually collected and posted to your account, never gross billed charges, and never anything on what we don't collect.",
  },
  {
    q: "Can we start with a limited scope?",
    a: "Yes. Many practices start with a single workflow such as denial follow-up, AR cleanup, or a specific claim type, then expand from there.",
  },
  {
    q: "How do you handle patient data?",
    a: "Through controlled access, defined workflows, and the appropriate business associate and confidentiality agreements that healthcare providers expect during onboarding.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[color:var(--paper)] py-24 sm:py-32 border-t border-[color:var(--hairline)]">
      <Container size="narrow">
        <SectionHeading
          index="06"
          eyebrow="Common questions"
          title="The short answers."
          align="left"
        />

        <div className="mt-14">
          {FAQS.map((item, idx) => (
            <details
              key={item.q}
              className="group border-t border-[color:var(--hairline)] last:border-b"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 list-none [&::-webkit-details-marker]:hidden">
                <span
                  className="font-display text-[1.3rem] sm:text-[1.5rem] leading-tight text-[color:var(--accent-deep)] pr-4"
                  style={{ fontWeight: 400 }}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="mt-2 shrink-0 text-[color:var(--ink-muted)] transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="pb-7 text-[15.5px] leading-[1.75] text-[color:var(--ink-muted)] max-w-xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
