export function getNowISO(): string {
  return new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 19).replace("T", " ");
}
