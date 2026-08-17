export interface CallStats {
  totalCalls: number;
  positive: number;
  negative: number;
  negativeCallPercent: number;
  recommendation: string;
}
export interface DailyCallStat {
  date: string;
  totalCalls: number;
  negativePercent: number;
}

export interface CallStats {
  totalCalls: number;
  positive: number;
  negative: number;
  negativeCallPercent: number;
  recommendation: string;
  dailyStats: DailyCallStat[];
}
