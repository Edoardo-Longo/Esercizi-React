import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} incrementBy={3} interval={500}/>
    </div>
  );
}

export default App;
