import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow";
}

export default function Container({
  className = "",
  size = "default",
  children,
  ...rest
}: ContainerProps) {
  const max = size === "narrow" ? "max-w-4xl" : "max-w-6xl";
  return (
    <div
      className={`mx-auto w-full ${max} px-5 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
