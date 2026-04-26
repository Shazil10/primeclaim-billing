import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { ChevronDownIcon } from "./icons";

const FAQS = [
  {
    q: "Do you charge based on billed charges or collections?",
    a: "We charge based on monthly net collections — money actually collected and posted — not gross billed charges.",
  },
  {
    q: "Do you work with small practices?",
    a: "Yes. We are designed for small and mid-sized practices that want reliable billing support without building a large in-house team.",
  },
  {
    q: "Can we start with a limited scope?",
    a: "Yes. Many practices begin with a specific workflow, claim type, or follow-up need before expanding.",
  },
  {
    q: "Do you support old AR cleanup?",
    a: "Yes, old AR cleanup can be reviewed and quoted separately depending on volume and aging.",
  },
  {
    q: "Do you handle patient data securely?",
    a: "We work through controlled access, defined workflows, and appropriate confidentiality practices. For healthcare providers, we can coordinate the necessary business associate and data handling requirements as part of onboarding.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to the questions practice owners and office managers ask most often."
        />

        <div className="mt-10 divide-y divide-[color:var(--border)] rounded-2xl border border-[color:var(--border)] bg-white overflow-hidden">
          {FAQS.map((item, idx) => (
            <details
              key={item.q}
              className="group"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium text-[color:var(--navy-deep)] pr-4">
                  {item.q}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--navy)] transition-transform group-open:rotate-180">
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 -mt-1 text-sm leading-relaxed text-slate-600">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
