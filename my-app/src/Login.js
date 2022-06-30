import React from "react";
import { InputTracker } from "./InputTracker";

function Login() {
  const { username, password, tellMeInputValue, inputHandler } =
    InputTracker();

  return (
    <>
      <form id="prova">
        <input
          type="text"
          name="username"
          onChange={inputHandler}
          value={username}
        ></input>
        <input
          type="password"
          name="password"
          onChange={inputHandler}
          value={password}
        ></input>
      </form>
      <button onClick={tellMeInputValue}>Submit</button>
    </>
  );
}

export default Login;
