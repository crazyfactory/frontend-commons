export function getDatetimeIso(date: Date): string {
  return date.toISOString().substring(0, 19).replace("T", " ");
}
