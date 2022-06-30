import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(username);
  const [loading,setLoading]=useState(false)
  const [error, setError] = useState(false);

  async function userProvider() {
    try {
        setLoading(true)
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        const pack = await response.json();
        setData(pack);
        console.log(pack);
      } else {
        throw new Error("Impossibile comunicare con il server.");
      }
      setLoading(false)
    } catch (errore) {
      return setError(errore);
    }
  }
  useEffect(() => {
    userProvider();
  }, []);

  return { data, error, loading };
}
