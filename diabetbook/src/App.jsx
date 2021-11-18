import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicio/Inicio";
import Registro from "./pages/Registro/Registro"; 
import Agregar from "./pages/Agregar/Agregar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <div className="App">
            
        <Router>
            <Routes> 
              <Route ot exact path="/" element={<Home/>}/>
              <Route exact path="/inicio" element={<Inicio/>}/>
              <Route exact path="/registro" element={<Registro/>}/>
              <Route exact path="/agregar" element={<Agregar/>}/>
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;

