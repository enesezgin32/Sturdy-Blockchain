import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import InitialScreen from './pages/InitialScreen';
import { useState } from 'react';
import HastaGenelBilgileri from './pages/HastaGenelBilgileri';

function App() {
  const [generalInfoHasta,setGeneralInfoHasta] = useState(null)
  const [path,setPath] = useState(null)
  const [detailedInfo,setDetailedInfo] = useState(null)

  return (
    <div className="App">
    <BrowserRouter>
          <Navbar setDetailedInfo={()=>setDetailedInfo(null)} isLoggedIn={generalInfoHasta} setGeneralInfoHasta={setGeneralInfoHasta}></Navbar>
          <Routes>

              <Route exact path="/" element={<InitialScreen setPath={setPath} setGeneralInfoHasta={setGeneralInfoHasta}/>}></Route>
              <Route exact path="/genel-bilgiler" element={<HastaGenelBilgileri setPath={setPath} setDetailedInfo={setDetailedInfo} detailedInfo={detailedInfo}  whichPath={path} generalInfoHasta={generalInfoHasta} />}></Route>
            </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
