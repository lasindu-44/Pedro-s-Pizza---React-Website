import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";

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
      </Routes >
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
