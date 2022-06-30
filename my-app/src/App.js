import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome name='Edoardo'/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
