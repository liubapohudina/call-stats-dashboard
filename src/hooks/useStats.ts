import { useState, useCallback, useEffect, useRef } from 'react';
import type { CallStats } from '../types/stats.types';
import { getCallStats } from '../api/stats.api';

interface UseStatsResult {
  stats: CallStats | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refetch: () => void;
}

export const useStats = (
  startDate: string,
  endDate: string,
): UseStatsResult => {
  const [stats, setStats] = useState<CallStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const abortRef = useRef<AbortController | null>(null);

  const refetch = useCallback(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    getCallStats(startDate, endDate, controller.signal)
      .then((data) => {
        setStats(data);
        setLastUpdated(new Date());
      })
      .catch((err) => {
        if (err.name === 'CanceledError' || err.name === 'AbortError') return;

        console.error('Failed to fetch call stats:', err);
        setError('Не вдалося оновити дані. Спробуй ще раз.');
      })
      .finally(() => {
        if (abortRef.current === controller) {
          setLoading(false);
        }
      });
  }, [startDate, endDate]);

  useEffect(() => {
    refetch();
    return () => {
      abortRef.current?.abort();
    };
  }, [refetch]);

  return { stats, loading, error, lastUpdated, refetch };
};
