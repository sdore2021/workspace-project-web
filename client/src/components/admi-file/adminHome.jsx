import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import Articles from "./articles";
import InsertArticle from "./insertAticle";
import NavBar from "./navBar";

class AdminHome extends Component {
  state = {};

  /* componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
      console.log(user);
    } catch (ex) {}
  }*/

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <NavBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <h1>Wellcome to administrator page</h1>
              {this.state.user && <h1>M. {this.state.user.name} bonjour</h1>}
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminHome;
