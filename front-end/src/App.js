import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import InitialScreen from './pages/InitialScreen';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<InitialScreen/>}></Route>
            </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
