import { useState, useEffect } from "react";

function useFetch({ url, method }) {
  const [data, setData] = useState([]);
  const { error, setError } = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url, { method });
        const data = await resp.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return { data, error };
}

export default useFetch;
