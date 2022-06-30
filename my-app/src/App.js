import Counter from './Counter';
import {useState} from 'react'
import Login from './Login';
import GithubUser from './GithubUser';
const array=['Edoardo-Longo']

function App() {

  const [toggle,setToggle]=useState(true)
  const [name,setName]=useState('')

  function onCounterChange(counter){
    console.log(`The count now is ${counter}`)
  }

  function handleButton(){
    setToggle((s)=>!s)
  }

  function insertNameHandler(event){
    setName(event.target.value)
  }
  
  function launchData(event){
    event.preventDefault()
    array.push(event.target.previousElementSibling.defaultValue)
    console.log(array)
  setName('')
  }

  return (
    <div className="App">
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
     <Login/>
     {array.map ((element)=>{return(
        <div>
        <GithubUser username={element}/>
        </div>
        )})}
     <form onSubmit={launchData}>
     <input type='text' name='insertName' value={name} onChange={insertNameHandler} ></input>
     <button type='submit' onClick={launchData}>Start</button>
     </form>
    </div>
  );
}
export default App;