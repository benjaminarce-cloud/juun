// Simple className join utility
// Filters falsy values so conditional classes are safe
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
