import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <div className="App">
        <Link to="/counter">
          {" "}
          Counter
        </Link>
        <Link to="/githubuser/Edoardo-Longo">
          Link2
        </Link>
        <Link to="/">
          {" "}
          Welcome
        </Link>

        <Routes>
          <Route path="/" element={<Welcome name="Edoardo" />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/githubuser">
            <Route path=":name" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
