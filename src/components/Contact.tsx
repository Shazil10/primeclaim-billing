import Container from "./Container";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-b from-white to-[color:var(--bg-soft)]"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
          {/* Copy + CTAs */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--navy-deep)]">
              Ready to review your billing workflow?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Contact PrimeClaim Billing to discuss your current billing
              process, claim volume, and revenue cycle needs. We&apos;ll
              respond within one business day.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@primeclaimbilling.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--navy-deep)] transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                Email Us
              </a>
              <a
                href="mailto:info@primeclaimbilling.com?subject=Intro%20Call%20Request"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--navy-deep)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
              >
                Schedule a Call
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Prefer to write directly?{" "}
              <a
                href="mailto:info@primeclaimbilling.com"
                className="font-medium text-[color:var(--accent)] hover:underline"
              >
                info@primeclaimbilling.com
              </a>
            </p>
          </div>

          {/* Contact card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[color:var(--border)] bg-white p-7 sm:p-8 shadow-[0_10px_30px_-12px_rgba(0,59,111,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                PrimeClaim Billing
              </p>
              <p className="mt-2 text-base font-medium text-[color:var(--navy-deep)]">
                Medical Billing &amp; Revenue Cycle Management
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:info@primeclaimbilling.com"
                  className="flex items-start gap-3 group"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>
                    <p className="text-sm font-medium text-[color:var(--navy-deep)] group-hover:text-[color:var(--accent)] transition-colors">
                      info@primeclaimbilling.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-[color:var(--navy-deep)]">
                      +1 (XXX) XXX-XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Website
                    </p>
                    <p className="text-sm font-medium text-[color:var(--navy-deep)]">
                      primeclaimbilling.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-[color:var(--bg-soft)] px-4 py-3 text-xs leading-relaxed text-slate-600">
                We coordinate appropriate business associate and data-handling
                agreements as part of onboarding for healthcare providers.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
