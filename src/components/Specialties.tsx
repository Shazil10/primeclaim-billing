import Container from "./Container";
import SectionHeading from "./SectionHeading";

const SPECIALTIES = [
  "Dental",
  "Physical Therapy",
  "Mental & Behavioral Health",
  "Primary Care",
  "Chiropractic",
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Pain Management",
  "Psychiatry",
  "Radiology",
  "Urgent Care",
  "Specialty Practices",
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="bg-[color:var(--paper-deep)] py-24 sm:py-32 border-t border-[color:var(--hairline)]"
    >
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Specialties"
          title="Built for small and mid-sized practices."
          description="We support practices across a range of specialties, including recurring-visit, payer-heavy, and specialty-specific billing workflows."
        />

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 lg:gap-x-14 border-t border-[color:var(--hairline)]">
          {SPECIALTIES.map((name, idx) => (
            <li
              key={name}
              className="flex items-baseline gap-4 border-b border-[color:var(--hairline)] py-4 sm:py-5"
            >
              <span className="numeral text-[color:var(--ink-soft)] text-[12px] w-6 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className="font-display text-[1.1rem] sm:text-[1.2rem] leading-tight text-[color:var(--accent-deep)] italic"
                style={{ fontWeight: 400 }}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-xl text-[15px] leading-[1.7] text-[color:var(--ink-muted)] italic">
          Don&apos;t see your specialty? We can review your workflow and confirm
          fit during the first conversation.
        </p>
      </Container>
    </section>
  );
}
