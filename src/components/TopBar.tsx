import { MailSm, PhoneSm } from "./icons";

export default function TopBar() {
  return (
    <div className="bg-[color:var(--accent-deep)] text-white/90 text-[12.5px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12 h-9 sm:h-10">
        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="tel:+14059033038"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <PhoneSm className="opacity-80" />
            <span className="hidden sm:inline">
              Call or text +1 (405) 903-3038
            </span>
            <span className="sm:hidden">Call</span>
          </a>
          <span aria-hidden className="h-3 w-px bg-white/25" />
          <a
            href="mailto:info@primeclaimbilling.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MailSm className="opacity-80" />
            <span className="hidden sm:inline">info@primeclaimbilling.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
        <span className="hidden sm:block text-white/70 tracking-wide">
          Mon to Fri, business hours (CT)
        </span>
      </div>
    </div>
  );
}
