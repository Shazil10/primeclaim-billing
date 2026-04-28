import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Hand-drawn line icons in the Lumira register.
 * Stroke 1.4, round caps, light decorative dot or curl on a few to
 * give that gently illustrated feel without becoming cartoonish.
 *
 * All icons inherit currentColor so callers control hue with text-color
 * utilities. Default size is 28px.
 */
const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Services */

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4.5 6.5 7.5v6.7c0 5.4 3.9 9.6 9.5 11.3 5.6-1.7 9.5-5.9 9.5-11.3V7.5L16 4.5Z" />
      <path d="m11.5 15.5 3 3 6-6.5" />
      <circle cx="25.5" cy="6" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function PaperPlane(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M27.5 5 4.5 13.5l9 3 3 9 11-20.5Z" />
      <path d="m13.5 16.5 14-11.5" />
      <circle cx="6" cy="22" r="0.7" fill="currentColor" />
      <circle cx="9" cy="26" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Coins(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="9" rx="6.5" ry="2.6" />
      <path d="M5.5 9v4c0 1.4 2.9 2.6 6.5 2.6s6.5-1.2 6.5-2.6V9" />
      <path d="M5.5 13v4c0 1.4 2.9 2.6 6.5 2.6 1.3 0 2.5-.15 3.5-.4" />
      <ellipse cx="21" cy="20" rx="6" ry="2.4" />
      <path d="M15 20v4c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-4" />
    </svg>
  );
}

export function ArrowReturn(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 16a10 10 0 0 1 17.5-6.5L26 12" />
      <path d="M26 5v7h-7" />
      <path d="M26 16a10 10 0 0 1-17.5 6.5L6 20" />
      <path d="M6 27v-7h7" />
      <circle cx="29" cy="3.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Hourglass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5h14" />
      <path d="M9 27h14" />
      <path d="M9 5c0 5 6 6 6 11s-6 6-6 11" />
      <path d="M23 5c0 5-6 6-6 11s6 6 6 11" />
      <path d="M11.5 5c0 4 4.5 5 4.5 8s-4.5 4-4.5 8" strokeOpacity={0.45} />
    </svg>
  );
}

export function ChartBars(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 26V8" />
      <path d="M5 26h22" />
      <rect x="9" y="18" width="3.5" height="6" />
      <rect x="15" y="13" width="3.5" height="11" />
      <rect x="21" y="9" width="3.5" height="15" />
      <circle cx="27" cy="6" r="0.7" fill="currentColor" />
    </svg>
  );
}

/* Process */

export function Conversation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9.5C5 7 7 5 10 5h7c3 0 5 2 5 4.5v3c0 2.5-2 4.5-5 4.5h-3l-4 3.5v-3.5h-.5C7 17 5 15 5 12.5Z" />
      <path d="M14 21c.5 2.4 2.6 4 5.5 4h.5l3 2.5V25c2.4-.4 4-2 4-4.2v-2.4c0-1.4-.7-2.6-1.8-3.4" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13.5" cy="13.5" r="7.5" />
      <path d="m19.5 19.5 7 7" />
      <path d="M10 12h7" />
      <path d="M10 15h5" />
      <circle cx="27" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Doorway(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 27V7l8-2v22" />
      <path d="M16 5l8 2v20" />
      <path d="M8 27h16" />
      <circle cx="14.4" cy="16.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function Pulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16h6l3-7 4 14 3-7h10" />
      <circle cx="29" cy="9" r="0.6" fill="currentColor" />
    </svg>
  );
}

/* UI */

export function PhoneSm(props: IconProps) {
  return (
    <svg {...base} width={14} height={14} {...props}>
      <path d="M22 21v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.2 6h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2L8.1 14a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 21Z" />
    </svg>
  );
}

export function MailSm(props: IconProps) {
  return (
    <svg {...base} width={14} height={14} {...props}>
      <rect x="3" y="6" width="26" height="20" rx="2" />
      <path d="m3 8 13 9 13-9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 16h22" />
      <path d="m20 8 8 8-8 8" />
    </svg>
  );
}

/* Systems & compliance */

export function Layers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m16 5 11 5.5L16 16 5 10.5 16 5Z" />
      <path d="M5 16.5 16 22l11-5.5" />
      <path d="M5 22 16 27.5 27 22" />
      <circle cx="29" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ShieldLock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 4.5 6.5 7.5v6.7c0 5.4 3.9 9.6 9.5 11.3 5.6-1.7 9.5-5.9 9.5-11.3V7.5L16 4.5Z" />
      <rect x="12.5" y="13.5" width="7" height="6" rx="0.8" />
      <path d="M14 13.5v-1.7a2 2 0 0 1 4 0v1.7" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="14" width="19" height="13" rx="1.5" />
      <path d="M10.5 14v-3.5a5.5 5.5 0 0 1 11 0V14" />
      <circle cx="16" cy="20" r="1.4" />
      <path d="M16 21.4V24" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="7" width="22" height="20" rx="1.5" />
      <path d="M5 13h22" />
      <path d="M11 4.5v5" />
      <path d="M21 4.5v5" />
      <circle cx="11.5" cy="19" r="0.9" fill="currentColor" />
      <circle cx="16" cy="19" r="0.9" fill="currentColor" />
      <circle cx="20.5" cy="19" r="0.9" fill="currentColor" />
    </svg>
  );
}
