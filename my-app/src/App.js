import Counter from './Counter';
import {useState} from 'react'

function App() {

  const [toggle,setToggle]=useState(true)

  function onCounterChange(counter){
    console.log(`The count now is ${counter}`)
  }

  function handleButton(){
    setToggle((s)=>!s)
  }

  return (
    <div className="App">
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
    </div>
  );
}
export default App;