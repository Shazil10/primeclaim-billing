import Container from "./Container";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    title: "Eligibility Verification",
    description: "Confirm patient coverage before claims are submitted.",
  },
  {
    title: "Claim Submission",
    description: "Submit clean claims electronically or through payer portals.",
  },
  {
    title: "Payment Posting",
    description: "Record insurance and patient payments accurately.",
  },
  {
    title: "Denial Management",
    description: "Identify root causes, appeal, and resubmit promptly.",
  },
  {
    title: "AR Follow-Up",
    description: "Monitor aging claims and follow up before balances slip.",
  },
  {
    title: "Monthly Reporting",
    description: "A quiet summary of activity, collections, and follow-up.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[color:var(--paper)] py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Services"
          title="A complete revenue cycle, handled."
          description="Six operational pillars across the billing workflow. We can take all of them, or only the parts where your team needs the help."
        />

        <ul className="mt-16 border-t border-[color:var(--hairline)]">
          {SERVICES.map((service, idx) => (
            <li
              key={service.title}
              className="grid grid-cols-12 gap-6 sm:gap-10 border-b border-[color:var(--hairline)] py-7 sm:py-8 group hover:bg-[color:var(--ivory)]/40 transition-colors"
            >
              <span className="col-span-2 sm:col-span-1 numeral text-[color:var(--ink-soft)] text-sm pt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3
                className="col-span-10 sm:col-span-5 font-display text-[1.4rem] sm:text-[1.7rem] leading-tight text-[color:var(--ink)]"
                style={{ fontWeight: 400 }}
              >
                {service.title}
              </h3>
              <p className="col-span-12 sm:col-span-6 text-[15px] leading-[1.7] text-[color:var(--ink-muted)] sm:pt-2">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[14px] text-[color:var(--ink-soft)] italic">
          Credentialing &amp; old AR cleanup available on request.
        </p>
      </Container>
    </section>
  );
}
