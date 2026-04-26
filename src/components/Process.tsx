import Container from "./Container";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "Discovery Call",
    description:
      "We learn about your specialty, billing volume, current workflow, and pain points.",
  },
  {
    title: "Workflow Review",
    description:
      "We review your claim process, payer mix, denial patterns, and AR needs.",
  },
  {
    title: "Pricing Confirmation",
    description:
      "We confirm a clear percentage rate based on scope and complexity.",
  },
  {
    title: "Onboarding",
    description:
      "We coordinate access, communication channels, reporting format, and billing workflow.",
  },
  {
    title: "Billing Support Begins",
    description:
      "Our team begins claim submission, follow-up, posting, denial management, and reporting.",
  },
  {
    title: "Monthly Review",
    description:
      "You receive updates on collections, denials, AR follow-up, and billing activity.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 sm:py-24 bg-[color:var(--bg-soft)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="A straightforward path from first conversation to ongoing billing support — with no surprises."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-[color:var(--border)] bg-white p-6 hover:shadow-[0_8px_24px_-8px_rgba(0,59,111,0.18)] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--navy-deep)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-[color:var(--navy-deep)]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
