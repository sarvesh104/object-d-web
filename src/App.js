import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about';
import Home from "./pages/home";
import Contact from './pages/contact';
import './App.css';
import Layout from './Layout/Layout';
import Errorm from './components/Errorm';

function App() {
  return (
    
    <Routes>
    <Route exact path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
    </Route>
    <Route path='*'  element={<Errorm />}/>
  </Routes>
  );
}

export default App;
