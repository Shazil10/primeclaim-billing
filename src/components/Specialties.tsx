import Container from "./Container";
import SectionHeading from "./SectionHeading";
import {
  ActivityIcon,
  BoneIcon,
  BrainIcon,
  HeartIcon,
  StethoscopeIcon,
  ToothIcon,
} from "./icons";

const SPECIALTIES = [
  {
    title: "Dental Offices",
    description:
      "Insurance claim support, payment posting, and AR follow-up.",
    Icon: ToothIcon,
  },
  {
    title: "Physical Therapy",
    description:
      "Recurring treatment claims, authorization tracking, and payer follow-up.",
    Icon: ActivityIcon,
  },
  {
    title: "Mental & Behavioral Health",
    description:
      "High-volume recurring visits, eligibility checks, and denial follow-up.",
    Icon: BrainIcon,
  },
  {
    title: "Primary Care",
    description:
      "Routine claim submission, payment posting, and revenue cycle support.",
    Icon: HeartIcon,
  },
  {
    title: "Chiropractic Clinics",
    description:
      "Insurance verification, claim submission, and AR tracking.",
    Icon: BoneIcon,
  },
  {
    title: "Specialty Practices",
    description:
      "More complex claims, payer-specific rules, and coding review support.",
    Icon: StethoscopeIcon,
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Specialties"
          title="Built for small and mid-sized practices"
          description="We work with practices that need reliable billing support without the cost and complexity of building a large in-house team."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-6 hover:shadow-[0_8px_24px_-8px_rgba(0,59,111,0.18)] hover:border-[color:var(--accent)]/30 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--navy)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[color:var(--navy-deep)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
