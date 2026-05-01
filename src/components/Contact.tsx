import Container from "./Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[color:var(--paper-deep)] py-28 sm:py-36 border-t border-[color:var(--hairline)]"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="numeral text-[color:var(--ink-soft)] text-sm">
                08
              </span>
              <span className="h-px w-8 bg-[color:var(--hairline-strong)]" />
              <span className="eyebrow">Contact</span>
            </div>

            <h2
              className="font-display mt-6 text-[2.3rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.05] text-[color:var(--accent-deep)] tracking-[-0.02em]"
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

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="mailto:info@primeclaimbilling.com?subject=Intro%20call%20with%20PrimeClaim%20Billing"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--accent)] px-6 py-3 text-[14px] tracking-wide text-white hover:bg-[color:var(--accent-deep)] transition-colors"
              >
                Email us
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="tel:+14159859881"
                className="text-[14px] tracking-wide text-[color:var(--ink-muted)] hover:text-[color:var(--accent)] transition-colors"
              >
                Or call +1 (415) 985-9881
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="space-y-5 sm:space-y-6 border-t border-[color:var(--hairline-strong)] pt-7">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="sm:col-span-4 eyebrow sm:pt-1">Email</dt>
                <dd className="sm:col-span-8 text-[15px] text-[color:var(--ink)] break-words">
                  <a
                    href="mailto:info@primeclaimbilling.com"
                    className="hover:text-[color:var(--accent)] transition-colors"
                  >
                    info@primeclaimbilling.com
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="sm:col-span-4 eyebrow sm:pt-1">Phone</dt>
                <dd className="sm:col-span-8 text-[15px] text-[color:var(--ink)]">
                  <a
                    href="tel:+14159859881"
                    className="hover:text-[color:var(--accent)] transition-colors"
                  >
                    +1 (415) 985-9881
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="sm:col-span-4 eyebrow sm:pt-1">Office</dt>
                <dd className="sm:col-span-8 text-[15px] text-[color:var(--ink)] leading-[1.55]">
                  539 W. Commerce St #6489
                  <br />
                  Dallas, TX 75208
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="sm:col-span-4 eyebrow sm:pt-1">Web</dt>
                <dd className="sm:col-span-8 text-[15px] text-[color:var(--ink)]">
                  primeclaimbilling.com
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <dt className="sm:col-span-4 eyebrow sm:pt-1">Hours</dt>
                <dd className="sm:col-span-8 text-[15px] text-[color:var(--ink)]">
                  Monday to Friday, business hours (CT)
                </dd>
              </div>
            </dl>

          </div>
        </div>
      </Container>
    </section>
  );
}
