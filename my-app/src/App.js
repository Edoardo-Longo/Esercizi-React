import Todolist from "./TodoList";

function App() {
  return (
    <div className="App">
      <Todolist>
        {
          ((item, remover) =>{
            return(
              <ul>
              {item.map((item, index) => (
                <li key={index}>
                  {item}
                  <button
                    key={index + "btn"}
                    onClick={() => {
                      remover(item);
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            )
          })
        }
      </Todolist>
    </div>
  );
}

export default App;
