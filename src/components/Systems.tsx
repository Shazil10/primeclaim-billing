import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { Calendar, Layers, Lock, ShieldLock } from "./icons";

const ITEMS = [
  {
    title: "EHR & Practice Management Access",
    body: "We coordinate access based on your current system and workflow.",
    Icon: Layers,
  },
  {
    title: "HIPAA-Aligned Workflows",
    body: "Appropriate business associate and data-handling agreements are coordinated before work begins.",
    Icon: ShieldLock,
  },
  {
    title: "Secure Communication",
    body: "Controlled access, defined workflows, and clear communication channels for billing activity.",
    Icon: Lock,
  },
  {
    title: "Reporting Rhythm",
    body: "Monthly summaries keep your team informed on collections, denials, AR follow-up, and billing status.",
    Icon: Calendar,
  },
];

export default function Systems() {
  return (
    <section
      id="systems"
      className="bg-[color:var(--paper)] py-24 sm:py-32 border-t border-[color:var(--hairline)]"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Systems & compliance"
          title="Built to work with your existing workflow."
          description="We work within your existing billing, EHR, and practice management systems whenever possible, helping your team avoid unnecessary disruption during onboarding."
        />

        <ul className="mt-16 grid sm:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-10 sm:gap-y-14">
          {ITEMS.map((item) => (
            <li key={item.title}>
              <div className="border-t border-[color:var(--hairline)] pt-6">
                <div className="flex items-center gap-4">
                  <item.Icon
                    className="text-[color:var(--accent)]"
                    width={26}
                    height={26}
                  />
                  <h3
                    className="font-display text-[1.4rem] sm:text-[1.6rem] leading-tight text-[color:var(--accent-deep)]"
                    style={{ fontWeight: 400 }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--ink-muted)] max-w-md pl-[42px]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
