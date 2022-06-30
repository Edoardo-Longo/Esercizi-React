import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <>
      <div className="App">
        <Link to="/counter">
          {" "}
          Counter
        </Link>
        <Link to="/user">
          Git
        </Link>
        <Link to="/">
          {" "}
          Welcome
        </Link>

        <Routes>
          <Route path="/" element={<Welcome name="Edoardo" />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="user" element={<ShowGithubUser />}>
            <Route path=":name" element={<GithubUser />} />
          </Route>
          <Route path='*' element={<h1>Errore 404</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
