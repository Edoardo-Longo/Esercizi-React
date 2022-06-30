import {useState} from 'react'
import GithubUser from './GithubUser';
const array=['Edoardo-Longo']

function App() {
  const [name,setName]=useState('')

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