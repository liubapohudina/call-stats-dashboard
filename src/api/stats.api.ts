import axios from 'axios';
import type { CallStats } from '../types/stats.types';

export const getCallStats = async (
  startDate: string,
  endDate: string,
  signal?: AbortSignal,
): Promise<CallStats> => {
  const response = await axios.get<CallStats>(
    'https://wfwokl4.app.n8n.cloud/webhook/get-call-stats',
    {
      params: { startDate, endDate },
      signal,
    },
  );

  return response.data;
};
