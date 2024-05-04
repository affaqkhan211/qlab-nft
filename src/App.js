import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Projects from './pages/Projects';
import Requirements from './pages/Requirements';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/requirements" element = {<Requirements/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes> 

      <Footer />
    </>
  );
}

export default App;
