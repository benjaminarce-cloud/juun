import { cn } from "@/lib/cn";

export function Pill({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-[14px] transition",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-border bg-card text-fg hover:bg-fg/5"
      )}
    >
      {children}
    </button>
  );
}
