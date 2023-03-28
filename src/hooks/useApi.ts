import {useState} from 'react';

const useApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (apiFunc: any, ...args: any[]) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      if (response.status === 200) {
        setData(response.data);
      } else {
        setError(true);
      }
    } catch (err: any) {
      setData([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {data, error, loading, request};
};

export default useApi;
