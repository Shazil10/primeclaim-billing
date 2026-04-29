import Logo from "./Logo";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--paper)] py-12 border-t border-[color:var(--hairline)]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Logo size="lg" />

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px] text-[color:var(--ink-muted)]">
            <a href="#services" className="hover:text-[color:var(--ink)] transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-[color:var(--ink)] transition-colors">
              Pricing
            </a>
            <a href="#process" className="hover:text-[color:var(--ink)] transition-colors">
              Process
            </a>
            <a
              href="mailto:info@primeclaimbilling.com"
              className="hover:text-[color:var(--ink)] transition-colors"
            >
              info@primeclaimbilling.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[color:var(--hairline)] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 text-[12px] text-[color:var(--ink-soft)]">
          <div className="flex flex-col gap-1">
            <p>© 2026 PrimeClaim Billing. All rights reserved.</p>
            <p>539 W. Commerce St #6489, Dallas, TX 75208</p>
          </div>
          <p className="italic">Medical billing &amp; revenue cycle management.</p>
        </div>
      </Container>
    </footer>
  );
}
