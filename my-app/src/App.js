import Counter from './Counter';
import Login from './Login';

function App() {

  function onCounterChange(counter){
    console.log(`The count now is ${counter}`)
  }

  return (
    <div className="App">
      <Counter initialValue={5} onCounterChange={onCounterChange}/>
      <Login/>
    </div>
  );
}

export default App;
