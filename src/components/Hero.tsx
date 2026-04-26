import Container from "./Container";
import {
  ActivityIcon,
  ArrowRightIcon,
  ChartIcon,
  CheckIcon,
  ClipboardIcon,
  CreditCardIcon,
  FileCheckIcon,
  RotateIcon,
} from "./icons";

const SNAPSHOT_ITEMS = [
  { label: "Claim Submission", icon: FileCheckIcon },
  { label: "Denial Follow-Up", icon: RotateIcon },
  { label: "Payment Posting", icon: CreditCardIcon },
  { label: "AR Support", icon: ActivityIcon },
  { label: "Monthly Reporting", icon: ChartIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[color:var(--bg-soft)] to-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-[color:var(--accent-soft)] opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-[color:var(--accent-soft)] opacity-40 blur-3xl"
      />

      <Container className="relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Medical Billing &amp; Revenue Cycle Management
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-[color:var(--navy-deep)] leading-[1.1]">
              Medical Billing &amp; Revenue Cycle Support for Growing
              Healthcare Practices
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              PrimeClaim Billing helps small and mid-sized healthcare providers
              submit cleaner claims, follow up faster, reduce denials, and
              improve cash flow — without the cost of a large in-house billing
              team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--navy-deep)] transition-colors"
              >
                Contact Us
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy-deep)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
              >
                View Services
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Performance-aligned pricing starting at{" "}
              <span className="font-semibold text-slate-700">
                3%–4% of monthly collections
              </span>
              .
            </p>
          </div>

          {/* Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-white to-[color:var(--accent-soft)] blur-md opacity-70"
              />
              <div className="relative rounded-2xl border border-[color:var(--border)] bg-white shadow-[0_10px_40px_-12px_rgba(0,59,111,0.18)] overflow-hidden">
                <div className="flex items-center justify-between border-b border-[color:var(--border)] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-[color:var(--accent-soft)] flex items-center justify-center text-[color:var(--navy)]">
                      <ClipboardIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Overview
                      </p>
                      <p className="text-sm font-semibold text-[color:var(--navy-deep)]">
                        Revenue Cycle Snapshot
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    On track
                  </span>
                </div>

                <ul className="divide-y divide-[color:var(--border)]">
                  {SNAPSHOT_ITEMS.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center justify-between px-6 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-800">
                          {label}
                        </span>
                      </div>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                        <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-px bg-[color:var(--border)] border-t border-[color:var(--border)]">
                  <div className="bg-white px-4 py-3">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">
                      Clean claims
                    </p>
                    <p className="text-base font-semibold text-[color:var(--navy-deep)]">
                      97%
                    </p>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">
                      Avg. days in AR
                    </p>
                    <p className="text-base font-semibold text-[color:var(--navy-deep)]">
                      28
                    </p>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">
                      Follow-ups
                    </p>
                    <p className="text-base font-semibold text-[color:var(--navy-deep)]">
                      Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
