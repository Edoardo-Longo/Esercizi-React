import Counter from './Counter';
import FilterdList from './FilteredList';
import {useState} from 'react'
import CarDetails from './CarDetails';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import Title from './Title';

function App() {

  const [language, setLanguage] = useState('en')

  const data={
    model:'fiat',
    color:'blue',
    year:1999
  }

  const [list, setList] = useState([{
    id: 1,
    name: 'Marco',
    age: 17
  }, {
    id: 2,
    name: 'Luca',
    age: 22
  },
  {
    id: 3,
    name: 'Giovanni',
    age: 19
  },
  {
    id: 4,
    name: 'Riccardo',
    age: 28
  }])

  const [toggle,setToggle]=useState(true)

  function onCounterChange(counter){
    console.log(`The count now is ${counter}`)
  }

  function handleButton(){
    setToggle((s)=>!s)
  }

  function selectHandler(event){
    setLanguage(event.target.value)
 }

  return (
    <div className="App">
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
     <FilterdList list={list}/>
     <CarDetails data={data}/>
     <select value={language} onChange={selectHandler}>
        <option value='en'>ENGLISH</option>
        <option value='it'>ITALIANO</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage>
          <Title />
        </DisplayLanguage>
      </LanguageContext.Provider>
    </div>
  );
}
export default App;