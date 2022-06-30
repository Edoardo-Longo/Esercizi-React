import { useState } from "react";
import GithubUser from "./GithubUser";
import { SWRConfig, mutate } from "swr";
const array = ["Edoardo-Longo"];
const fetcher = (url) => fetch(url).then((resp) => resp.json());

function App() {
  const [name, setName] = useState("");

  function insertNameHandler(event) {
    setName(event.target.value);
  }

  function launchData(event) {
    event.preventDefault();
    array.push(event.target.previousElementSibling.defaultValue);
    console.log(array);
    setName("");
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <div className="App">
        {array.map((element) => {
          return (
            <>
              {element !== "" && (
                <div>
                  <GithubUser username={element} />
                </div>
              )}
            </>
          );
        })}
        <form onSubmit={launchData}>
          <input
            type="text"
            name="insertName"
            value={name}
            onChange={insertNameHandler}
          ></input>
          <button type="submit" onClick={launchData}>
            Start
          </button>
        </form>
      </div>
    </SWRConfig>
  );
}
export default App;
