import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ChartIcon,
  RotateIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from "./icons";

const REASONS = [
  {
    title: "Transparent Reporting",
    description:
      "Clear monthly summaries so you know what was submitted, paid, denied, and followed up.",
    Icon: ChartIcon,
  },
  {
    title: "Cost-Efficient Support",
    description:
      "A lean operating model designed to reduce billing costs without sacrificing responsiveness.",
    Icon: TrendingUpIcon,
  },
  {
    title: "Dedicated Follow-Up",
    description:
      "Unpaid and denied claims are actively monitored instead of sitting untouched.",
    Icon: RotateIcon,
  },
  {
    title: "Flexible Workflows",
    description:
      "We adapt to your existing systems and practice structure whenever possible.",
    Icon: ShieldCheckIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24 bg-[color:var(--bg-soft)]">
      <Container>
        <SectionHeading
          eyebrow="Why PrimeClaim Billing"
          title="Why practices choose PrimeClaim Billing"
          description="A serious operational partner for the parts of your revenue cycle that need consistency, attention, and follow-through."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-6 hover:shadow-[0_8px_24px_-8px_rgba(0,59,111,0.18)] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[color:var(--navy-deep)]">
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
