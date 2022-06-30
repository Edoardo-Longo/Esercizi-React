import useSWR from "swr";
export default function useFetch(username) {
  const fetcher = (url) => fetch(url).then((resp) => resp.json());
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  return { data, error, isLoading: !data && !error };
}
