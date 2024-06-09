import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/menu" exact Component={Menu}/>
        <Route path="/about" exact Component={About}/>
        <Route path="/contact" exact Component={Contact}/>

      </Routes >
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
