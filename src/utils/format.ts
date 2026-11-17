const pad = (n: number) => String(n).padStart(2, '0');

/** Memory-address styled date: 0x2026.11.16 */
export function hexDate(date: Date): string {
  return `0x${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`;
}

/** Human-readable date for screen readers and tooltips. */
export function longDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
