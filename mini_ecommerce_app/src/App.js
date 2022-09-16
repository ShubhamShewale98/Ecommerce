
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import { ShopPage } from './Pages/ShopPage';
import { SingleEntityPage } from './Pages/SingleEntityPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collection/all" element={<ShopPage />}/>
        <Route path="/collection/all/:id" element={<SingleEntityPage />}/>
       </Routes>
    </div>
  );
}

export default App;
