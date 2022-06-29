import Welcome from './Welcome';
import Sum from './Sum';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Sum numbers={[2, 5 ,8, 100]}/>
    </div>
  );
}

export default App;
