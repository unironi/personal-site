import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Art from "./components/pages/Art";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/art" exact component={Art}></Route>
        <Route path="/resume" exact component={Resume}></Route>
      </Switch>
    </Router>
  );
}

export default App;
