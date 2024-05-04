export const calculateMonthsWorked = (start: Date, end: Date): number => {
  const startMonth = start.getMonth() + 1;
  const startYear = start.getFullYear();
  const endMonth = end.getMonth() + 1;
  const endYear = end.getFullYear();

  const monthsWorked = (endYear - startYear) * 12 + endMonth - startMonth;

  return monthsWorked;
};
