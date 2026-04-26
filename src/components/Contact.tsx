import Container from "./Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[color:var(--paper-deep)] py-28 sm:py-36 border-t border-[color:var(--hairline-strong)]"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                07
              </span>
              <span className="h-px w-8 bg-[color:var(--hairline-strong)]" />
              <span className="eyebrow">Contact</span>
            </div>

            <h2
              className="font-display mt-6 text-[2.3rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.05] text-[color:var(--ink)] tracking-[-0.02em]"
              style={{ fontWeight: 400 }}
            >
              Tell us where billing is{" "}
              <em className="italic text-[color:var(--accent)]" style={{ fontWeight: 400 }}>
                slowing you down.
              </em>
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.7] text-[color:var(--ink-muted)]">
              We&rsquo;ll respond within one business day. The first
              conversation is short, specific, and free of charge.
            </p>

            <a
              href="mailto:info@primeclaimbilling.com?subject=Intro%20call%20with%20PrimeClaim"
              className="mt-10 inline-flex items-baseline gap-3 group"
            >
              <span
                className="font-display text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] text-[color:var(--ink)] border-b border-[color:var(--ink)] pb-1 group-hover:opacity-70 transition-opacity"
                style={{ fontWeight: 400 }}
              >
                info@primeclaimbilling.com
              </span>
              <span
                aria-hidden
                className="text-[color:var(--ink)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <dl className="space-y-6 border-t border-[color:var(--hairline-strong)] pt-7">
              <div className="grid grid-cols-12 gap-4">
                <dt className="col-span-4 eyebrow pt-1">Phone</dt>
                <dd className="col-span-8 text-[15px] text-[color:var(--ink)]">
                  +1 (XXX) XXX-XXXX
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <dt className="col-span-4 eyebrow pt-1">Web</dt>
                <dd className="col-span-8 text-[15px] text-[color:var(--ink)]">
                  primeclaimbilling.com
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <dt className="col-span-4 eyebrow pt-1">Hours</dt>
                <dd className="col-span-8 text-[15px] text-[color:var(--ink)]">
                  Monday to Friday, business hours (ET)
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-[13px] leading-[1.7] text-[color:var(--ink-soft)] italic max-w-sm">
              Appropriate business associate and data-handling agreements are
              coordinated as part of onboarding.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
