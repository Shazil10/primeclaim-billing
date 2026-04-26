import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ActivityIcon,
  ChartIcon,
  ClipboardIcon,
  CreditCardIcon,
  FileCheckIcon,
  RotateIcon,
  SearchIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "./icons";

const SERVICES = [
  {
    title: "Eligibility Verification",
    description: "Confirm patient coverage before claims are submitted.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Charge Entry",
    description: "Enter services accurately into the billing workflow.",
    Icon: ClipboardIcon,
  },
  {
    title: "Claim Submission",
    description:
      "Submit clean claims electronically or through payer portals.",
    Icon: FileCheckIcon,
  },
  {
    title: "Payment Posting",
    description:
      "Record insurance and patient payments clearly and consistently.",
    Icon: CreditCardIcon,
  },
  {
    title: "Denial Management",
    description:
      "Review denials, identify root causes, and support appeals or resubmissions.",
    Icon: RotateIcon,
  },
  {
    title: "Accounts Receivable Follow-Up",
    description:
      "Monitor aging claims and follow up with payers on unpaid balances.",
    Icon: ActivityIcon,
  },
  {
    title: "Monthly Reporting",
    description:
      "Provide simple summaries of billing activity, collections, denials, and follow-up status.",
    Icon: ChartIcon,
  },
  {
    title: "Credentialing Support",
    description:
      "Optional support for payer enrollment and provider credentialing workflows.",
    Icon: UsersIcon,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[color:var(--bg-soft)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="End-to-end billing support"
          description="Operational coverage across the revenue cycle — from eligibility verification through monthly reporting — adapted to the way your practice already works."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-6 hover:shadow-[0_8px_24px_-8px_rgba(0,59,111,0.18)] hover:border-[color:var(--accent)]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[color:var(--navy-deep)]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--navy)] text-white">
              <SearchIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[color:var(--navy-deep)]">
                Not sure what you need?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                We can review your current billing process and recommend the
                right scope — limited or full revenue cycle.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--navy-deep)] transition-colors whitespace-nowrap"
          >
            Request a workflow review
          </a>
        </div>
      </Container>
    </section>
  );
}
