import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginForm from "./components/admi-file/loginForm";
import AdminHome from "./components/admi-file/adminHome";
import RegisterAdim from "./components/admi-file/registerAdmin";
import LogoutAdmin from "./components/admi-file/logoutAdmin";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/LoginAdmin" component={LoginForm} />
            <Route path="/LogoutAdmin" component={LogoutAdmin} />
            <Route path="/AdminHome" component={AdminHome} />
            <Route path="/CreateNewAdmin" component={RegisterAdim} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/**
 * <Route
              path="/AdminHome"
              render={props => {
                if (user) return <Redirect to="/LoginAdmin" />;
                return <AdminHome {...props} />;
              }}
            />
            <Route
              path="/CreateNewAdmin"
              render={props => {
                if (!this.state.user) return <Redirect to="/LoginAdmin" />;
                return <RegisterAdim {...props} />;
              }}
            />
 */
