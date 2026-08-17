const toIsoDate = (date: Date): string => date.toISOString().slice(0, 10);

export interface DateRange {
  startDate: string;
  endDate: string;
}

export const getDefaultDateRange = (): DateRange => {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 6);

  return {
    startDate: toIsoDate(start),
    endDate: toIsoDate(end),
  };
};
