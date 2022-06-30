import Counter from "./Counter";
import Login from "./Login";
import { useState } from "react";
import GithubUser from "./GithubUser";
const array = ["Edoardo-Longo"];

function App() {
  const [toggle, setToggle] = useState(true);

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

  function onCounterChange(counter) {
    console.log(`The count now is ${counter}`);
  }

  function handleButton() {
    setToggle((s) => !s);
  }

  return (
    <div className="App">
      <Login />
      {toggle && <Counter onCounterChange={onCounterChange} />}
      <button onClick={handleButton}>Toggle</button>
      {array.map ((element)=>{return(
        <div>
        <GithubUser username={element}/>
        </div>
        )})}
     <form onSubmit={launchData}>
     <input type='text' name='insertName' value={name} onChange={insertNameHandler} ></input>
     <button type='submit' onClick={launchData}>Start</button>
     </form>
    </div>
  );
}

export default App;
