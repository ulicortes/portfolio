import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Proyects from './Components/Proyects';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/proyects' element={<Proyects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
