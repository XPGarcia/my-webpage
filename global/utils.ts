export function calculateAge(date: Date) {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }
  return age;
}

/**
 *
 * @param dateRange expected type: ['MM/YYYY', 'MM/YYYY' || 'PRESENT']
 * @returns the number of months worked
 */
export function calculateMonthsWorked(dateRange: string[]): number {
  const [startDate, endDate] = dateRange;

  const [startMonth, startYear] = startDate.split('/');

  let endMonth: number;
  let endYear: number;
  if (endDate.toLowerCase() === 'present') {
    const today = new Date();
    endMonth = today.getMonth() + 1;
    endYear = today.getFullYear();
  } else {
    const parts = endDate.split('/');
    endMonth = parseInt(parts[0]);
    endYear = parseInt(parts[1]);
  }

  const monthsWorked = (endYear - parseInt(startYear)) * 12 + endMonth - parseInt(startMonth) + 1;

  return monthsWorked;
}

export function fromMonthsToYears(months: number): number {
  return Math.floor(months / 12);
}
