import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-accent-fg hover:opacity-90 shadow-softer",
    secondary:
      "border border-border bg-card text-fg hover:bg-fg/5",
    ghost:
      "text-fg hover:bg-fg/5",
  };

  const sizes: Record<string, string> = {
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-[15px]",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
