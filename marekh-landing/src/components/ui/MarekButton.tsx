"use client";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "outline-sienna";

interface MarekButtonProps {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-sienna text-white hover:bg-sienna-dark border border-sienna hover:border-sienna-dark",
  ghost:
    "text-navy/60 hover:text-navy hover:bg-navy/5 border border-transparent",
  outline:
    "text-navy border border-navy/30 hover:border-navy/60 hover:text-navy",
  "outline-sienna":
    "text-sienna border border-sienna/50 hover:border-sienna hover:bg-sienna/10",
};

export function MarekButton({
  variant = "primary",
  children,
  href,
  onClick,
  className,
  icon,
  disabled,
}: MarekButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium",
    "rounded-none transition-all duration-150 cursor-pointer select-none",
    "active:scale-[0.98] active:translate-y-px",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sienna focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={base}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
}
