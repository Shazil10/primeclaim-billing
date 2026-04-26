import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  className = "",
  size = "default",
  children,
  ...rest
}: ContainerProps) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-7xl"
      : "max-w-6xl";
  return (
    <div
      className={`mx-auto w-full ${max} px-6 sm:px-8 lg:px-12 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
