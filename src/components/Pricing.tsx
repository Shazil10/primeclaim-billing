import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./icons";

const PRICING_ROWS = [
  {
    situation: "Clean workflow + consistent volume",
    rate: "Around 3.0%",
  },
  {
    situation: "Standard small/mid-sized practice",
    rate: "3.5% – 4.0%",
  },
  {
    situation: "Higher complexity or heavier denial follow-up",
    rate: "Custom quote",
  },
  {
    situation: "Old AR cleanup or special recovery work",
    rate: "Quoted separately",
  },
];

const HIGHLIGHTS = [
  "Based on net collections, not gross billed charges.",
  "Aligned incentives — we are paid on revenue actually collected.",
  "Transparent monthly summaries of activity and outcomes.",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 bg-white"
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, performance-aligned pricing"
          description="Our pricing is based on monthly net collections, not gross charges. That means our incentives are aligned with your practice: we are paid based on revenue actually collected and posted."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Main pricing card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--navy-deep)] to-[color:var(--navy)] p-8 text-white shadow-[0_12px_40px_-12px_rgba(0,59,111,0.4)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Starting at
              </p>
              <p className="mt-3 text-5xl font-semibold tracking-tight">
                3% – 4%
              </p>
              <p className="mt-1 text-sm text-white/80">
                of monthly collections
              </p>

              <div className="mt-7 h-px bg-white/15" />

              <ul className="mt-6 space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <CheckIcon
                        className="h-3 w-3 text-white"
                        strokeWidth={2.6}
                      />
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-xs leading-relaxed text-white/70">
                For practices with clean billing workflows and consistent
                volume, pricing may be closer to 3%.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] hover:bg-slate-100 transition-colors"
              >
                Request a quote
              </a>
            </div>
          </div>

          {/* Pricing table */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[color:var(--border)] bg-white overflow-hidden">
              <div className="px-6 py-5 border-b border-[color:var(--border)]">
                <h3 className="text-base font-semibold text-[color:var(--navy-deep)]">
                  Typical pricing by practice situation
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Final pricing depends on specialty, claim volume, denial
                  complexity, existing workflow, and required level of
                  follow-up.
                </p>
              </div>

              {/* Desktop table */}
              <div className="hidden sm:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[color:var(--bg-soft)] text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                      <th className="px-6 py-3">Practice situation</th>
                      <th className="px-6 py-3 text-right">Typical rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--border)]">
                    {PRICING_ROWS.map((row) => (
                      <tr key={row.situation}>
                        <td className="px-6 py-4 text-slate-800">
                          {row.situation}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-[color:var(--navy-deep)]">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked */}
              <div className="sm:hidden divide-y divide-[color:var(--border)]">
                {PRICING_ROWS.map((row) => (
                  <div key={row.situation} className="px-5 py-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Practice situation
                    </p>
                    <p className="mt-1 text-sm text-slate-800">
                      {row.situation}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
                      Typical rate
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[color:var(--navy-deep)]">
                      {row.rate}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-[color:var(--bg-soft)] border-t border-[color:var(--border)] text-xs text-slate-600">
                Pricing is reviewed and confirmed in writing before any work
                begins. No hidden fees.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
