import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:brightness-110 shadow-sm transition-all",
    secondary:
      "bg-white border border-[#222222] text-[#222222] hover:bg-gray-50",
    glass:
      "bg-white/70 backdrop-blur-md text-[#222222] hover:bg-white border border-black/5 shadow-sm",
    ghost: "hover:bg-gray-50 text-[#222222] hover:text-black",
    outline:
      "border border-[#dddddd] bg-white text-[#222222] hover:bg-gray-50 hover:border-[#222222]",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
