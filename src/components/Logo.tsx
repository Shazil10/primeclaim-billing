import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  priority?: boolean;
}

export default function Logo({
  className = "h-9 w-auto",
  variant = "full",
  priority = false,
}: LogoProps) {
  // The user-supplied logo (if any) is expected at /primeclaim-logo.png.
  // We fall back to the SVG variants otherwise.
  if (variant === "mark") {
    return (
      <Image
        src="/primeclaim-mark.svg"
        alt="PrimeClaim Billing"
        width={80}
        height={80}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/primeclaim-logo.svg"
      alt="PrimeClaim Billing"
      width={360}
      height={80}
      className={className}
      priority={priority}
    />
  );
}
