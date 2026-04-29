import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES: Record<NonNullable<LogoProps["size"]>, { h: string; px: number }> =
  {
    sm: { h: "h-10", px: 40 },
    md: { h: "h-14", px: 56 },
    lg: { h: "h-20", px: 80 },
  };

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { h, px } = SIZES[size];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="PrimeClaim Billing"
        width={px}
        height={px}
        priority
        className={`${h} w-auto select-none`}
      />
    </span>
  );
}
