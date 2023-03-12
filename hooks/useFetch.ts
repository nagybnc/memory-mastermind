import { useState, useEffect } from "react";

interface ApiResponse<Data> {
  data: Data;
  error: Error | null;
  isLoading: boolean;
}

const useFetch = <Data = unknown>(url: string): ApiResponse<Data> => {
  const [data, setData] = useState<Data>([] as Data);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
