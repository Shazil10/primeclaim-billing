import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ArrowReturn,
  ChartBars,
  Coins,
  Hourglass,
  PaperPlane,
  ShieldCheck,
} from "./icons";

const SERVICES = [
  {
    title: "Eligibility Verification",
    description: "Confirm patient coverage before claims are submitted.",
    Icon: ShieldCheck,
  },
  {
    title: "Claim Submission",
    description: "Submit clean claims electronically or through payer portals.",
    Icon: PaperPlane,
  },
  {
    title: "Payment Posting",
    description: "Record insurance and patient payments accurately.",
    Icon: Coins,
  },
  {
    title: "Denial Management",
    description: "Identify root causes, appeal, and resubmit promptly.",
    Icon: ArrowReturn,
  },
  {
    title: "AR Follow-Up",
    description: "Monitor aging claims and follow up before balances slip.",
    Icon: Hourglass,
  },
  {
    title: "Monthly Reporting",
    description: "A clear summary of activity, collections, and follow-up.",
    Icon: ChartBars,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[color:var(--paper)] py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Services"
          title="A complete revenue cycle, handled."
          description="Six operational pillars across the billing workflow. We can take all of them, or only the parts where your team needs the help."
        />

        <ul className="mt-16 border-t border-[color:var(--hairline)]">
          {SERVICES.map(({ title, description, Icon }, idx) => (
            <li
              key={title}
              className="grid grid-cols-12 gap-6 sm:gap-8 border-b border-[color:var(--hairline)] py-7 sm:py-8 group hover:bg-[color:var(--ivory)]/70 transition-colors"
            >
              <span className="col-span-2 sm:col-span-1 numeral text-[color:var(--ink-soft)] text-sm pt-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 sm:col-span-1 flex sm:justify-center pt-0.5">
                <Icon className="text-[color:var(--accent)]" />
              </div>
              <h3
                className="col-span-12 sm:col-span-4 font-display text-[1.4rem] sm:text-[1.7rem] leading-tight text-[color:var(--accent-deep)]"
                style={{ fontWeight: 400 }}
              >
                {title}
              </h3>
              <p className="col-span-12 sm:col-span-6 text-[15px] leading-[1.7] text-[color:var(--ink-muted)] sm:pt-2">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[14px] text-[color:var(--ink-soft)] italic">
          Credentialing support available on request.
        </p>
      </Container>
    </section>
  );
}
