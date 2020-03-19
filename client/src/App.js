import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginForm from "./components/admi-file/loginForm";
import AdminHome from "./components/admi-file/adminHome";

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
            <Route path="/AdminHome" component={AdminHome} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
