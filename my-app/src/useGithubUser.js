import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(username);
  const [error, setError] = useState(false);

  async function userProvider() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        const pack = await response.json();
        setData(pack);
        console.log(pack);
      } else {
        throw new Error("Impossibile comunicare con il server.");
      }
    } catch (errore) {
      return setError(errore);
    }
  }
  useEffect(() => {
    userProvider();
  }, []);

  return { data, error };
}
