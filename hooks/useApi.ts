import { API_URL } from "@/utils/config";
import { useEffect, useState } from "react";

export const useApi = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [endpoint]);

  return data;
};
