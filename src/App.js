import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from './Components/Login';
import Gamemenu from './Components/Gamemenu';
import Game1 from './Components/Game1';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Game' element={<Game />} />
        <Route path='/Game1' element={<Game1 />} />
        <Route path='/Gamemenu' element={<Gamemenu />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
