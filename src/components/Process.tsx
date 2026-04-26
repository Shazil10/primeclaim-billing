import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { Conversation, Doorway, Pulse, Search } from "./icons";

const STEPS = [
  {
    title: "A conversation",
    description:
      "We learn about your specialty, claim volume, current workflow, and the parts that aren&rsquo;t working.",
    Icon: Conversation,
  },
  {
    title: "A workflow review",
    description:
      "We review your claim process, payer mix, denial patterns, and AR before quoting anything.",
    Icon: Search,
  },
  {
    title: "Onboarding",
    description:
      "We coordinate access, communication, reporting, and any required agreements before work begins.",
    Icon: Doorway,
  },
  {
    title: "Ongoing support",
    description:
      "Daily billing operations and a quiet monthly summary, on the cadence we agree on.",
    Icon: Pulse,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[color:var(--paper-deep)] py-24 sm:py-32 border-y border-[color:var(--hairline)]"
    >
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Process"
          title="From first call to monthly rhythm."
        />

        <ol className="mt-16 grid sm:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-10 sm:gap-y-14">
          {STEPS.map((step, idx) => (
            <li key={step.title}>
              <div className="border-t border-[color:var(--hairline)] pt-6">
                <div className="flex items-center gap-4">
                  <span className="numeral text-[color:var(--ink-soft)] text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <step.Icon className="text-[color:var(--accent)]" width={26} height={26} />
                  <h3
                    className="font-display text-[1.5rem] sm:text-[1.75rem] leading-tight text-[color:var(--accent-deep)] ml-1"
                    style={{ fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-[15px] leading-[1.7] text-[color:var(--ink-muted)] max-w-md pl-9"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
