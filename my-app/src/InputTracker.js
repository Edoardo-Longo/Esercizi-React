import { useState } from "react";
export function InputTracker() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function inputHandler(event) {
    event.target.name === "username"
      ? setUsername(event.target.value)
      : setPassword(event.target.value);
  }
  function tellMeInputValue(event) {
    event.preventDefault();
    let username = document.querySelector("#prova").firstChild.value;
    let password = document.querySelector("#prova").lastChild.value;
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }

  return { username, password, tellMeInputValue, inputHandler };
}
