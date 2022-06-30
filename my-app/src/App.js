import Counter from './Counter';
import Login from './Login';
import {useState} from 'react'
import GithubUser from './GithubUser';

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
      <Login/>
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
     <GithubUser username={'Edoardo-Longo'}/>
    </div>
  );
}

export default App;
