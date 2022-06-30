import useSWR from "swr";
export default function useFetch(username) {
  const manualFetch = () => {
    mutate();
  };
  const isValid = username ? true : false;
  const { data, error, mutate } = useSWR(
    isValid ? `https://api.github.com/users/${username}` : null
  );
  return {
    data,
    error,
    isLoading: !data && !error && !isValid,
    isValid,
    manualFetch,
  };
}
