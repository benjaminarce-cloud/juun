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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary: "ui-accent ui-accent-hover ui-shadow-softer",
    secondary: "ui-card ui-hairline ui-border hover:bg-black/5",
    ghost: "hover:bg-black/5",
  };

  const sizes: Record<string, string> = {
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-[15px]",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
