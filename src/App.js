import {Route}  from "react-router-dom";
import {Routes} from "react-router-dom"
import Home from "./Routes/Home";
import About from "./Routes/About"
import Services from "./Routes/Services"
import Contact from "./Routes/Contact"
import "./style.css";
import Gallery from "./Routes/Gallery";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      
    </div>
  );
}
export default App
