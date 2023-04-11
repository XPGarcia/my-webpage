export function dateToShortString(date?: Date): string {
  if (!date) return 'PRESENTE';

  const monthIndex = date.getUTCMonth() + 1;
  const month = monthIndex.toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${year}`;
}

export function getAge(date: Date): string {
  const millisecondsInYear = 31556952000;
  const now = new Date();
  const ageInMillis = now.getTime() - date.getTime();
  return Math.floor(ageInMillis / millisecondsInYear).toString();
}
