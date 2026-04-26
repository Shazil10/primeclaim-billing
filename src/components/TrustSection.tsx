import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ClockIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from "./icons";

const CARDS = [
  {
    title: "Reduce Denials",
    description:
      "Identify issues, correct claims, and support timely resubmissions.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Improve Follow-Up",
    description:
      "Track unpaid claims and follow up with payers before balances age.",
    Icon: TrendingUpIcon,
  },
  {
    title: "Lower Admin Burden",
    description:
      "Free your staff from repetitive billing tasks so they can focus on patients.",
    Icon: ClockIcon,
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why it matters"
          title="Billing should not slow down your practice."
          description="Many practices lose time and revenue because of delayed claims, denials, missed follow-ups, and inconsistent billing workflows. PrimeClaim Billing acts as an extension of your team, helping keep the revenue cycle organized, responsive, and transparent."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_-8px_rgba(0,59,111,0.18)] hover:border-[color:var(--accent)]/30 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--navy-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
