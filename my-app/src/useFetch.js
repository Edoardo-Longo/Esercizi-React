import useSWR from "swr";
export default function useFetch(username) {
  const prova = () => {
    console.log("fetch bloccata");
  };
  const isValid = username ? true : false;
  const { data, error } = useSWR(
    isValid ? `https://api.github.com/users/${username}` : prova()
  );
  return { data, error, isLoading: !data && !error && !isValid, isValid };
}
