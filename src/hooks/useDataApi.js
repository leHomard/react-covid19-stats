import { useState, useEffect } from "react";
import axios from "axios";

export const useDataApi = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        if (mounted) {
          setData(result.data);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
      return () => (mounted = false);
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error
  };
};
