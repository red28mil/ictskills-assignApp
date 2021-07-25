import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleDrink from "./pages/SingleDrink";
import Error from "./pages/Error";


function App() {
  return (
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/drink/:id">
          <SingleDrink />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
 

export default App;
