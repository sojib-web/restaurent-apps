import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';





const BodyComponet = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </div>
  )
}

export default BodyComponet;