import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
import "./App.scss"


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
     
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ProjectsContainer" component={ProjectsContainer} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;