export const formatToMonthYear = (date: Date): string => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${year}`;
};
