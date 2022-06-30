import { useEffect, useState } from "react";

export default function GithubUserProvider({ username }) {

  const [error, setError] = useState(false);
  console.log(username);
  const [data, setData] = useState(username);

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

  return (
    <>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} alt=''></img>
      <h1>{data.name}</h1>
      {error && <h1>{error.message} </h1>}
    </>
  );
}
