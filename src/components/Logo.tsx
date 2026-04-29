import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES: Record<
  NonNullable<LogoProps["size"]>,
  { mark: string; markPx: number; word: string; gap: string }
> = {
  sm: {
    mark: "h-9 w-9",
    markPx: 36,
    word: "text-[1.15rem] sm:text-[1.2rem]",
    gap: "gap-2.5",
  },
  md: {
    mark: "h-10 w-10 sm:h-12 sm:w-12",
    markPx: 48,
    word: "text-[1.3rem] sm:text-[1.55rem]",
    gap: "gap-2.5 sm:gap-3",
  },
  lg: {
    mark: "h-14 w-14 sm:h-20 sm:w-20",
    markPx: 80,
    word: "text-[1.6rem] sm:text-[2.4rem]",
    gap: "gap-3 sm:gap-4",
  },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { mark, markPx, word, gap } = SIZES[size];

  return (
    <span
      className={`inline-flex items-center ${gap} ${className}`}
      aria-label="PrimeClaim Billing"
    >
      <Image
        src="/monogram.png"
        alt=""
        width={markPx * 2}
        height={markPx * 2}
        priority
        aria-hidden
        className={`${mark} object-contain select-none`}
      />
      <span
        className={`font-display italic leading-none tracking-[-0.01em] text-[color:var(--accent-deep)] ${word}`}
        style={{ fontWeight: 500 }}
      >
        PrimeClaim
        <span className="text-[color:var(--accent)]/65"> Billing</span>
      </span>
    </span>
  );
}
