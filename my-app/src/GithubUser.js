import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GithubUser() {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const {name} = useParams()
  async function userProvider() {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      console.log(name)
      if (response.status === 200) {
        const pack = await response.json()
        setData(pack)
        console.log(pack)
      }
      else {
        console.log(response)
        throw new Error('Impossibile comunicare con il server.');
      }
    } catch (errore) {
      return setError(errore);
    }
  }
  useEffect(() => {
    userProvider()

  }, [name])

  return (
    <>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} alt=""></img>
      <h1>{data.name}</h1>
      {error && <h1>{error.message} </h1>}
    </>
  );
}
