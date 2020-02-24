import React, { Component } from "react";
import "./App.css";
//import axios from "axios";
//import { Router } from "react-router-dom";
import Articles from "./components/articles";
import Clients from "./components/clients";
import Commandes from "./components/commades";

class App extends Component {
  render() {
    return <Commandes />;
  }
}

export default App;
