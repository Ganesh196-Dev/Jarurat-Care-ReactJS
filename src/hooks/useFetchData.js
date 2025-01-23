import { useQuery } from '@tanstack/react-query';

const useFetchData = (url) => {
  const { data, isLoading, error } = useQuery(url, async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  });

  return { data, isLoading, error };
};

export default useFetchData;
