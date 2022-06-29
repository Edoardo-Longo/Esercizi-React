import Counter from './Counter';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5}/>
      <Login/>
    </div>
  );
}

export default App;
