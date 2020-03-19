import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginForm from "./components/admi-file/loginForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/Admin" component={LoginForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
