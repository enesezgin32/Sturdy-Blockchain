import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import InitialScreen from './pages/InitialScreen';
import HastaGenelBilgileri from './pages/HastaGenelBilgileri';
import DoktorEkranı from './pages/DoktorEkranı';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
              <Route exact path="/" element={<InitialScreen/>}></Route>
              <Route exact path="/genel-bilgiler" element={<HastaGenelBilgileri/>}></Route>
              <Route exact path="/doktor-ekranı" element={<DoktorEkranı/>}></Route>
            </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
