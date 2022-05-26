function Saluto(name){
  return(
    <div>
      <h1>
        Hello,{name}
      </h1>
    </div>
  )
}

function App(){
  return(
    Saluto('Edoardo')
  )
}


export default App;
