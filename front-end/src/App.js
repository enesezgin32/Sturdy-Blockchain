import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import InitialScreen from './pages/InitialScreen';
import { useState } from 'react';
import HastaGenelBilgileri from './pages/HastaGenelBilgileri';

function App() {
  const [generalInfoHasta,setGeneralInfoHasta] = useState(null)

  return (
    <div className="App">
      <Navbar></Navbar>

      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<InitialScreen setGeneralInfoHasta={setGeneralInfoHasta}/>}></Route>
              <Route exact path="/genel-bilgiler" element={<HastaGenelBilgileri generalInfoHasta={generalInfoHasta} />}></Route>
              
            </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
