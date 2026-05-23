import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-leaf)] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-moss-700)] text-[var(--color-sand-50)] hover:bg-[var(--color-moss-800)] hover:-translate-y-0.5 shadow-[0_1px_2px_rgba(32,81,62,0.2)] hover:shadow-[0_8px_24px_rgba(32,81,62,0.25)]",
  outline:
    "border border-[var(--color-sand-50)]/40 text-[var(--color-sand-50)] hover:border-[var(--color-sand-50)] hover:bg-[var(--color-sand-50)]/8",
  ghost:
    "text-[var(--color-moss-700)] hover:text-[var(--color-moss-800)] underline underline-offset-[6px] decoration-1 decoration-[var(--color-moss-300)] hover:decoration-[var(--color-moss-700)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-moss-900)] hover:brightness-95 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm rounded-full",
  md: "h-12 px-6 text-[0.95rem] rounded-full",
  lg: "h-14 px-8 text-base rounded-full",
};

function buttonClasses(variant: Variant, size: Size, extra?: string) {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}

type LinkButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
    external?: boolean;
  };

export function LinkButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  href,
  external,
  ...rest
}: LinkButtonProps) {
  const classes = buttonClasses(variant, size, className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {icon}
    </Link>
  );
}

type ButtonProps = CommonProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...rest}
    >
      {children}
      {icon}
    </button>
  );
}
