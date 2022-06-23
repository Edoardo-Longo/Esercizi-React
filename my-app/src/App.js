import './App.css';
import Counter from './Counter';
import ClickTracker from './ClickTracker';

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} incrementBy={3} interval={500}/>
      <ClickTracker/>
    </div>
  );
}

export default App;