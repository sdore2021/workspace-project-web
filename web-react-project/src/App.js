import React, { Component } from "react";
import "./App.css";
//import axios from "axios";
//import { Router } from "react-router-dom";
import Articles from "./components/articles";
import Clients from "./components/clients";
import Commandes from "./components/commades";
import InsertArticle from "./components/insertAticle";
import AdminHome from "./components/adminHome";
import ModalArticle from "./components/modalArticle";

class App extends Component {
  render() {
    return <Articles />;
  }
}

export default App;
