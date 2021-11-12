import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicio/Inicio";
import Registro from "./pages/Registro/Registro"; 
import Añadir from "./pages/Añadir/Añadir";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/registro" element={<Registro/>}/>
          <Route exact path="/añadir" element={<Añadir/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

