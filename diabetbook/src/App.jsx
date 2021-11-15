import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicio/Inicio";
import Registro from "./pages/Registro/Registro"; 
import Añadir from "./pages/Añadir/Añadir";
import NavBar from "./components/navbar";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/registro" element={<Registro/>}/>
            <Route exact path="/Añadir" element={<Añadir/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

