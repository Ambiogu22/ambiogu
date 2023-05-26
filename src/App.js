import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import { useState, createContext } from "react";

export const NavMenu = createContext()

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="App">
      <NavMenu.Provider value={{ showMenu, setShowMenu }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </NavMenu.Provider>
    </div>
  );
}

export default App;
