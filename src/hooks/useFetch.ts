import { useState, useEffect } from 'react';
import axios from '@/services/axios';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  content: {
    entries: T[];
    totalData: number;
    totalPage: number;
  };
  message: number;
  errors: string[];
}

const useFetch = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      axios
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.content.entries);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });

      return () => controller.abort();
    },
    deps?.length ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useFetch;
