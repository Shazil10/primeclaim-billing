import Logo from "./Logo";
import Container from "./Container";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10 items-start">
          <div className="md:col-span-5">
            <Logo className="h-9 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Helping healthcare practices improve billing workflows, reduce
              denials, and strengthen cash flow.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-700 hover:text-[color:var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <a
                href="mailto:info@primeclaimbilling.com"
                className="block hover:text-[color:var(--accent)] transition-colors"
              >
                info@primeclaimbilling.com
              </a>
              <p>+1 (XXX) XXX-XXXX</p>
              <p>primeclaimbilling.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 PrimeClaim Billing. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Medical Billing &amp; Revenue Cycle Management
          </p>
        </div>
      </Container>
    </footer>
  );
}
